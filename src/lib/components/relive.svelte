<script lang="ts">
  import GeneralObserver from './general-observer.svelte'

  export let reliveId: string = ''
  export let width: string = '100%'

  const defaultMargin: number = 2
</script>

<GeneralObserver>
  <div
    style={`
      position: relative;
      width: ${width};
      aspect-ratio: 1 / 0.7825;
      overflow: hidden;
    `}
  >
    <iframe
      title={`relive-${reliveId}`}
      src={`https://www.relive.cc/view/${reliveId}/widget`}
      scrolling="no"
      frameborder="0"
      allowfullscreen
      style={`
        position: absolute;
        top: -${defaultMargin}px;
        left: -${defaultMargin}px;
        width: calc(100% + ${defaultMargin * 2}px);
        height: calc(100% + ${defaultMargin * 2}px);
      `}
    />
  </div>
</GeneralObserver>
