<script lang="ts">
  interface IProps {
    src: string;
    name: string;
    isLarger: boolean | undefined,
    style: string,
  } 

  export let props: IProps = {
    name: '',
    src: '',
    isLarger: false,
    style: ''
  };
</script>

<div class="icon">
  <button class={`icon-button ${props.style}`}>
    <svg
      aria-hidden="true"
      role="img"
      class={!props.isLarger ? 'w-6 h-6' : 'w-7 h-6'}
  ><path d={props.src} /></svg
    >
  </button>
   <span class="tooltip">{props.name}</span>
</div>

<style lang="scss">
  @keyframes borders {
    0% {
      border-radius: 50%;
    }
    33% {
      border-radius: 15%;
    }
    100% {
      border-radius: 20%;
    }
  }

  @keyframes fix {
    from {
      border-radius: 20%;
    }
    to {
      border-radius: 50%;
    }
  }
  .icon {
    @apply relative;
    .icon-button {
      @apply w-12 h-12 rounded-full flex items-center justify-center bg-gray-10;
      animation-name: fix;
      animation-timing-function: ease-in-out;
      animation-duration: 0.2s;
      transition: color 0.15s ease-out, background-color 0.15s ease-out;
      svg {
        @apply fill-success-20;
      }
      &:hover {
        @apply bg-success-10 rounded-[18px];
        animation-name: borders;
        animation-duration: 0.5s;
        animation-timing-function: ease-in-out;
        border-radius: 20%;
        svg {
          @apply fill-white;
        }
      }
      &.purple {
        svg {
          @apply fill-white;
        }
        &:hover {
        @apply bg-purple-light;
      }
      }  
    }
    .tooltip {
      word-break: break-word;
      @apply invisible min-w-[100px] max-w-[300px] p-[5px] bg-black text-center rounded-md absolute z-10 top-2 left-[145%] font-medium text-gray; 
    }

    .tooltip::after {
      content: "";
      border-width: 5px;
      border-style: solid;
      border-color: transparent black transparent transparent;
      @apply absolute mt-[-5px] top-1/2 right-full;
    }
    &:hover .tooltip {
      @apply visible;
    }
  }
</style>
