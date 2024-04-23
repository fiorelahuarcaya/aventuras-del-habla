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
  <div class="title">
    <p>Crea una cuenta</p>
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
    <div class="item-input">
      <label for="confirmPassword">Confirmar contraseña:</label>
      <input
        type="password"
        id="confirmPassword"
        bind:value={passwordConfirmInput}
      />
    </div>
    <input class="btn" type="submit" value="Registrar" />
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
      <p>¿Tiene una cuenta?</p>
      <a href="/login" class="underline-hover">Inicia Sesión</a>
    </div>
  </div>
</div>

<style>
  /* Estilos para pantallas más pequeñas (menor de 650px) */
  @media screen and (max-width: 650px) {
    .form {
      min-width: 15rem;
    }
  }

  @media screen and (max-width: 650px) {
    .form {
      min-width: 15rem;
      padding: 2rem;
    }
  }
</style>
