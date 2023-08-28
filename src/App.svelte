<script lang="ts">
  import IconButton from "./lib/IconButton.svelte";
  import { directionIcon, plusIcon, downloadIcon, discordIcon } from "./plugins/icon";
  let icons = [
    { src: discordIcon, name: "Learn More", isLarger: true, style: "purple" },
    { src: directionIcon, name: "Learn More" },
    { src: plusIcon, name: "Plus Server" },
    { src: downloadIcon, name: "Download Application" },
  ];
</script>

<div class="w-full h-screen bg-gray-30">
  <div class="w-[74px] h-full bg-gray-20 mt-5">
    <nav class="side-bar">
      <ul class="space-y-2">
        {#each icons as { src, name, isLarger, style }, i}
          <li class="side-bar__item">
            <IconButton props={{
              name,
              src,
              isLarger,
              style
            }}/>
            <div class="track" />
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</div>

<style lang="scss">
  .side-bar{
    &__item {
      @apply flex justify-center relative;
      .track {
        border-radius: 0 4px 4px 0;
        @apply invisible absolute top-1/2 left-0 -translate-y-1/2 h-1/3 w-2 bg-white -ml-1;
      }
      &:hover {
        .track {
          @apply visible;
        }
      }
    }
  }
</style>
