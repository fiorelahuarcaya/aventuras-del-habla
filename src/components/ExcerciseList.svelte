<script lang="ts">
  import Recording from "./Recording.svelte";
  import Before from "../components/svgs/Before.svelte";
  import Next from "./svgs/Next.svelte";

  import type { Database } from "../db/supabase";

  type Excercise = Database["public"]["Tables"]["EXERCISE"]["Row"];

  export let exercices: Excercise[] = [];
  export let evaluationId: number;
</script>

{#each exercices as exercice, i}
  <div class={"exercise"} id={"exercise-" + i}>
    <p>{exercice.text_repeat}</p>
    <Recording {evaluationId} exerciseId={exercice.id_exercise} />
  </div>
  <div class="arrows" id={"arrows-" + i}>
    {#if i != 0}
      <Before order={i} />
    {/if}

    {#if i + 1 < exercices.length}
      <Next order={i} />
    {/if}
  </div>
{/each}

<style>
  p {
    font-size: 32px;
    font-family: var(--font-body);
  }

  div.exercise {
    display: none;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  div.exercise#exercise-0 {
    display: flex;
  }

  .arrows {
    display: none;
    flex-direction: row;
    justify-content: space-between;
  }

  div.arrows#arrows-0 {
    display: flex;
    justify-content: flex-end;
  }
</style>
