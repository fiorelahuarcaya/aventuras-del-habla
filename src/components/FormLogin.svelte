<script lang="ts">
  import Google from "./svgs/Google.svelte";

  let emailInput = "";
  let passwordInput = "";
  let error = "";
  let message = "";

  async function handleSubmit() {
    if (passwordInput === "" || emailInput === "") {
      error = "Por favor, llene todos los campos";
      return;
    }

    // Aquí podrías incluir la lógica de autenticación o cualquier otra lógica de negocio.
    // Si todo es correcto, redirigimos al usuario.
    window.location.href = "/practice"; // Cambia la ruta a /practice
  }
</script>

<div class="form">
  <div class="title">
    <p>Inicia Sesión</p>
  </div>

  <form on:submit|preventDefault={handleSubmit}>
    <div class="item-input">
      <label for="email">Correo:</label>
      <input type="email" id="email" bind:value={emailInput} />
    </div>
    <div class="item-input">
      <label for="password">Contraseña:</label>
      <input type="password" id="password" bind:value={passwordInput} />
    </div>
    <a href="/" class="small-text underline-hover">¿Olvidaste tu contraseña?</a>

    <input class="btn" type="submit" value="Login" />
  </form>

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

  <div class="footer-form">
    <div class="flex-row-text">
      <p>¿Aún no tiene una cuenta?</p>
      <a href="/register" class="underline-hover">Regístrese</a>
    </div>
  </div>
</div>

<style>
</style>
