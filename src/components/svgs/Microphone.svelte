<script lang="ts">
  export let exerciseId: number;
</script>

<svg
  class="start-button"
  id={"start-button-" + exerciseId}
  cursor="pointer"
  width="100"
  height="101"
  viewBox="0 0 100 101"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle cx="50" cy="50.5208" r="50" fill="var(--quaternary-700)" />
  <g clip-path="url(#clip0_108_52)">
    <path
      d="M50 57.0208C44.475 57.0208 40.25 52.7958 40.25 47.2708V34.2708C40.25 29.0708 44.475 24.5208 50 24.5208C55.2 24.5208 59.75 28.7458 59.75 34.2708V47.2708C59.75 52.4708 55.2 57.0208 50 57.0208Z"
      fill="white"
    />
    <path
      d="M63 40.7708V48.8958C63 55.0708 57.15 60.2708 50.65 60.2708H49.35C42.85 60.2708 37 55.0708 37 48.8958V40.7708C35.05 40.7708 33.75 42.0708 33.75 44.0208V48.8958C33.75 56.0458 39.6 62.2208 46.75 63.1958V70.0208C37 70.0208 38.625 76.5208 38.625 76.5208H61.375C61.375 76.5208 63 70.0208 53.25 70.0208V63.1958C60.4 61.8958 66.25 56.0458 66.25 48.8958V44.0208C66.25 42.0708 64.95 40.7708 63 40.7708Z"
      fill="white"
    />
  </g>
  <defs>
    <clipPath id="clip0_108_52">
      <rect
        width="52"
        height="52"
        fill="white"
        transform="translate(24 24.5208)"
      />
    </clipPath>
  </defs>
</svg>

<style>
  svg circle:hover {
    fill: var(--quaternary-900);
  }
</style>
