<script lang="ts">
  import GeneralObserver from './general-observer.svelte'

  export let theme: string = 'auto'
  export let frameSrc: string = ''
  export let height: string = '300px'
  export let width: string = '100%'
</script>

<GeneralObserver {height} {width}>
  <iframe
    title="deezer-widget"
    src={`https://widget.deezer.com/widget/${theme}/${frameSrc}`}
    {width}
    {height}
    frameborder="0"
    allowtransparency
    allow="encrypted-media; clipboard-write"
  />
</GeneralObserver>
