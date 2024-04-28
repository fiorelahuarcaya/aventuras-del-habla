<script lang="ts">
  import { onMount } from "svelte";

  export let order: number;

  onMount(() => {
    const nextButton = document.getElementById("before-button-" + order);
    if (nextButton) {
      nextButton.addEventListener("click", next);
    }

    function next() {
      const beforeExercise = document.getElementById("exercise-" + (order - 1));
      const currentExercise = document.getElementById("exercise-" + order);
      const arrows = document.getElementById("arrows-" + order);
      const beforeArrows = document.getElementById("arrows-" + (order - 1));

      if (!arrows || !beforeExercise || !currentExercise || !beforeArrows) {
        return;
      }
      currentExercise.style.display = "none";
      arrows.style.display = "none";
      beforeExercise.style.display = "flex";
      beforeArrows.style.display = "flex";
    }
  });
</script>

<svg
  id={"before-button-" + order}
  class="before-button"
  cursor="pointer"
  width="64"
  height="65"
  viewBox="0 0 64 65"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M0.721909 31.2575L30.2595 1.71997C30.6037 1.37534 31.0425 1.14059 31.5202 1.04546C31.998 0.950321 32.4932 0.999072 32.9432 1.18553C33.3932 1.372 33.7778 1.68778 34.0482 2.09293C34.3187 2.49807 34.4628 2.97434 34.4624 3.46146V15.7688L59.0771 15.7688C60.3827 15.7688 61.6349 16.2874 62.5581 17.2107C63.4813 18.1339 64 19.3861 64 20.6917V45.3063C64 46.612 63.4813 47.8642 62.5581 48.7874C61.6349 49.7106 60.3827 50.2293 59.0771 50.2293H34.4624V62.5366C34.4628 63.0237 34.3187 63.5 34.0482 63.9051C33.7778 64.3103 33.3932 64.6261 32.9432 64.8125C32.4932 64.999 31.998 65.0477 31.5202 64.9526C31.0425 64.8575 30.6037 64.6227 30.2595 64.2781L0.721909 34.7405C0.493051 34.5119 0.311495 34.2404 0.187623 33.9416C0.0637517 33.6428 -2.61924e-06 33.3225 -2.61924e-06 32.999C-2.61924e-06 32.6756 0.0637517 32.3553 0.187623 32.0564C0.311495 31.7576 0.493051 31.4861 0.721909 31.2575Z"
    fill="var(--primary-600)"
  />
</svg>

<style>
  svg.before-button:hover path {
    fill: var(--primary-900);
  }
</style>
