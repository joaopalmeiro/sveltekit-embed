<script lang="ts">
  import { getPadding } from '$lib/utils'
  import GeneralObserver from './general-observer.svelte'

  export let width: string = '560'
  export let height: string = '315'
  export let youTubeId: string = ''
  export let listId: string = ''
  export let autoPlay: boolean = false
  export let aspectRatio: string = '16:9'
  export let skipTo = { h: 0, m: 0, s: 0 }

  const { h, m, s } = skipTo

  const tH = h * 60 * 60
  const tM = m * 60

  const startTime = tH + tM + s

  const baseUrl = `https://www.youtube-nocookie.com/embed/`
  const src = `${baseUrl}${
    youTubeId.length > 0
      ? `${youTubeId}?&autoplay=${autoPlay}&start=${startTime}`
      : `&videoseries?list=${listId}`
  }`
</script>

<GeneralObserver {height} {width}>
  <div
    style={`
    position: relative;
    width: 100%;
    ${getPadding(aspectRatio)}
  `}
  >
    <iframe
      {width}
      {height}
      class="youtube-sveltekit-embed"
      title={`youTube-${youTubeId}`}
      {src}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      style={`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    `}
    />
  </div>
</GeneralObserver>
