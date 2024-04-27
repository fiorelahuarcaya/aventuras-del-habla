<script lang="ts">
  import Google from "../svgs/Google.svelte";

  let emailInput = "";
  let passwordInput = "";
  let passwordConfirmInput = "";
  let error = "";
  let message = "";

  let step = 1;

  let nameParentInput = "";
  let lastNameParentInput = "";
  let cellphoneParentInput = "";

  let namePacientInput = "";
  let lastNamePacientInput = "";
  let birthdatePacientInput = "";
  let genderPacientInput = "";


  async function handleSubmit() {
    if (passwordInput === "" || emailInput === "") {
      error = "Por favor, llene todos los campos";
      return;
    }

    if (passwordInput !== passwordConfirmInput) {
      error = "Las contraseñas no coinciden";
      return;
    }

    step = 2;
    error = "";
    message = "";
  }


  async function handleSubmitParent() {
    
    if (nameParentInput === "" || lastNameParentInput === "") {
      error = "Por favor, llene todos los campos obligatorios";
      return;
    }
    step = 3;
    error = "";
    message = "";
  }

  async function handleSubmitPacient() {
    error = "";
    message = "";
    if (namePacientInput === "" || lastNamePacientInput === "") {
      error = "Por favor, llene todos los campos obligatorios";
      return;
    }
    step = 3;
    error = "";
    message = "";
  }

</script>

<div class="form">
  {#if step === 1}
  <form on:submit|preventDefault={handleSubmit} id="form-register">
    <div class="title">
      <h2>¡Bienvenido a "Aventuras del Habla"!</h2>
      <p>Crea una cuenta</p>
    </div>

    <div class="item-input">
      <label for="email">Correo:</label>
      <input type="email" id="email" bind:value={emailInput} required/>
    </div>
    <div class="item-input">
      <label for="password">Contraseña:</label>
      <input type="password" id="password" bind:value={passwordInput} required/>
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

    <div class="footer-form">
      <div class="flex-row-text">
        <p>¿Tiene una cuenta?</p>
        <a href="/login" class="underline-hover">Inicia Sesión</a>
      </div>
    </div>

  </form>

  {:else if step === 2}
  <form on:submit|preventDefault={handleSubmitParent} id="form-register">
    <div class="title">
      <p>Datos del Apoderado</p>
    </div>

    <div class="item-input">
      <label for="nameParent">Nombre:</label>
      <input type="text" id="nameParent" bind:value={nameParentInput} required/>
    </div>
    
    <div class="item-input">
      <label for="lastnameParent">Apellidos:</label>
      <input type="text" id="lastnameParent" bind:value={lastNameParentInput} required/>
    </div>

    <div class="item-input">
      <label for="cellphoneParent">Celular:</label>
      <input type="text" id="cellphoneParent" bind:value={cellphoneParentInput} />
    </div>

    <input class="btn" type="submit" value="Continuar" />

    {#if error}
      <div class="error">{error}</div>
    {/if}
    {#if message}
      <div class="message">{message}</div>
    {/if}
  </form>
  {:else if step === 3}
  <form on:submit|preventDefault={handleSubmitPacient} id="form-register">
    <div class="title">
      <p>Datos del Niño</p>
    </div>

    <div class="item-input">
      <label for="namePacient">Nombre:</label>
      <input type="text" id="namePacient" bind:value={namePacientInput} required/>
    </div>
    
    <div class="item-input">
      <label for="lastnamePacient">Apellidos:</label>
      <input type="text" id="lastnamePacient" bind:value={lastNamePacientInput} required/>
    </div>

    <div class="item-input">
      <label for="birthdatePacient">Fecha de Nacimiento:</label>
      <input type="date" id="birthdatePacient" bind:value={birthdatePacientInput} required/>
    </div>

    <div class="item-input">
      <label for="gendenPacient">Género:</label>
      <select bind:value={genderPacientInput}>
        <option value="F">Femenino</option>
        <option value="M">Masculino</option>
      </select>
    </div>


    <input class="btn" type="submit" value="Finalizar" />

    {#if error}
      <div class="error">{error}</div>
    {/if}
    {#if message}
      <div class="message">{message}</div>
    {/if}
  </form>
  {/if}

</div>

<style>
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0rem;
    text-align: center;
    width: 100%;
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
