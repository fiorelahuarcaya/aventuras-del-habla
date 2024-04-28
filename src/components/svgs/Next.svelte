<script lang="ts">
  import { onMount } from "svelte";

  export let order: number;

  onMount(() => {
    const nextButton = document.getElementById("next-button-" + order);
    if (nextButton) {
      nextButton.addEventListener("click", next);
    }

    function next() {
      const nextExercise = document.getElementById("exercise-" + (order + 1));
      const currentExercise = document.getElementById("exercise-" + order);
      const arrows = document.getElementById("arrows-" + order);
      const nextArrows = document.getElementById("arrows-" + (order + 1));

      if (!arrows || !nextExercise || !currentExercise || !nextArrows) {
        return;
      }
      currentExercise.style.display = "none";
      arrows.style.display = "none";
      nextExercise.style.display = "flex";
      nextArrows.style.display = "flex";
    }
  });
</script>

<svg
  id={"next-button-" + order}
  class="next-button"
  cursor="pointer"
  width="64"
  height="65"
  viewBox="0 0 64 65"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M63.2781 34.7405L33.7405 64.2781C33.3963 64.6227 32.9575 64.8575 32.4798 64.9526C32.002 65.0477 31.5068 64.999 31.0568 64.8125C30.6068 64.6261 30.2222 64.3103 29.9518 63.9051C29.6813 63.5 29.5372 63.0237 29.5376 62.5366V50.2293H4.92293C3.61729 50.2293 2.36512 49.7106 1.44189 48.7874C0.518664 47.8641 0 46.612 0 45.3063V20.6917C0 19.3861 0.518664 18.1339 1.44189 17.2107C2.36512 16.2874 3.61729 15.7688 4.92293 15.7688H29.5376V3.46145C29.5372 2.97434 29.6813 2.49806 29.9518 2.09292C30.2222 1.68778 30.6068 1.37199 31.0568 1.18552C31.5068 0.999062 32.002 0.950314 32.4798 1.04545C32.9575 1.14059 33.3963 1.37533 33.7405 1.71996L63.2781 31.2575C63.5069 31.4861 63.6885 31.7576 63.8124 32.0564C63.9362 32.3552 64 32.6755 64 32.999C64 33.3225 63.9362 33.6428 63.8124 33.9416C63.6885 34.2404 63.5069 34.5119 63.2781 34.7405Z"
    fill="var(--primary-600)"
  />
</svg>

<style>
  svg.next-button:hover path {
    fill: var(--primary-900);
  }
</style>
