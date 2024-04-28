<script lang="ts">
  import Microphone from "./svgs/Microphone.svelte";
  import { onMount } from "svelte";
  import Audio from "./svgs/Audio.svelte";
  import Check from "./svgs/Check.svelte";

  export let evaluationId: number;
  export let exerciseId: number;

  onMount(() => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        // Obtén referencias a los botones de inicio y detención
        const startButton = document.getElementById(
          "start-button-" + exerciseId
        );
        const stopButton = document.getElementById("stop-button-" + exerciseId);
        const check = document.getElementById("check-" + exerciseId);

        // Asigna los controladores de eventos a los botones
        if (startButton) {
          startButton.addEventListener("click", startRecording);
        }

        if (stopButton) {
          stopButton.style.display = "none";
          stopButton.addEventListener("click", stopRecording);
        }

        if (check) {
          check.style.display = "none";
        }

        // Crea un nuevo objeto MediaRecorder para grabar el audio
        let mediaRecorder = new MediaRecorder(stream);
        let chunks: BlobPart[] = [];

        // Función para iniciar la grabación
        function startRecording() {
          if (!startButton || !stopButton) {
            return;
          }
          startButton.style.display = "none";
          stopButton.style.display = "block";

          console.log("Grabando ...");
          chunks.length = 0; // Limpia los fragmentos de audio previamente recopilados
          mediaRecorder = new MediaRecorder(stream);
          mediaRecorder.addEventListener("dataavailable", (event) => {
            chunks.push(event.data);
          });
          mediaRecorder.addEventListener("stop", () => {
            const audioBlob = new Blob(chunks, { type: "audio/wav" });
            const audioUrl = URL.createObjectURL(audioBlob);

            //TODO: Cargar audio a storage

            URL.revokeObjectURL(audioUrl);
          });
          mediaRecorder.start();
        }

        // Función para detener la grabación
        function stopRecording() {
          if (!check || !stopButton) {
            return;
          }
          stopButton.style.display = "none";
          check.style.display = "block";
          console.log("Guardando ...");
          if (mediaRecorder) {
            mediaRecorder.stop();
          }
        }
      })
      .catch((error) => {
        console.error("Se produjo un error al acceder al audio:", error);
      });
  });
</script>

<Microphone {exerciseId} />
<!-- <button id="start-button">Iniciar Grabación</button> -->
<Audio {exerciseId} />
<Check {exerciseId} />

<!-- <button id="stop-button">Detener Grabación</button> -->
<style>
</style>
