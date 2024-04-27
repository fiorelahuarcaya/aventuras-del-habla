<script lang="ts">
  import Google from "../svgs/Google.svelte";

  let emailInput = "";
  let passwordInput = "";
  let passwordConfirmInput = "";
  let error = "";
  let message = "";

  async function handleSubmit() {
    if (passwordInput === "" || emailInput === "") {
      error = "Por favor, llene todos los campos";
      return;
    }
  }
</script>

<div class="form">
  <form on:submit|preventDefault={handleSubmit}>
    <div class="title">
      <h2>¡Bienvenido a "Aventuras del Habla"!</h2>
      <p>Crea una cuenta</p>
    </div>

    <div class="item-input">
      <label for="email">Correo:</label>
      <input type="email" id="email" bind:value={emailInput} />
    </div>
    <div class="item-input">
      <label for="password">Contraseña:</label>
      <input type="password" id="password" bind:value={passwordInput} />
    </div>
    <div class="item-input">
      <label for="confirmPassword">Confirmar contraseña:</label>
      <input
        type="password"
        id="confirmPassword"
        bind:value={passwordConfirmInput}
      />
    </div>
    <input class="btn" type="submit" value="Registrar" />

    {#if error}
      <div class="error">{error}</div>
    {/if}
    {#if message}
      <div class="message">{message}</div>
    {/if}

    <div class="container-sign-with">
      <div class="title">
        <div />
        <p class="small-text">O ingresa con</p>
        <div />
      </div>
      <div class="list-social">
        <button class="sign-with google">
          <Google />
        </button>
      </div>
      <svg height="10" width="100%">
        <line
          x1="0"
          y1="0"
          x2="100%"
          y2="0"
          style="stroke:var(--primary-300);stroke-width:2"
        />
      </svg>
    </div>
  </form>

  <div class="footer-form">
    <div class="flex-row-text">
      <p>¿Tiene una cuenta?</p>
      <a href="/login" class="underline-hover">Inicia Sesión</a>
    </div>
  </div>
</div>

<style>
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0rem;
    text-align: center;
  }

  .container-sign-with .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }

  h2 {
    font-size: 1.5rem;
    line-height: normal;
  }
</style>
