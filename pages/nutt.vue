<template>
	<main id="nutt">
    <h1>The Nutt <span class="lighten">archive</span></h1>
    <p>
    	<em>The Nutt</em>, hosted by Jabari Martin, airs every Sunday afternoon on <a href="https://en.wikipedia.org/wiki/KPFA/" target="_blank">KPFB 89.3FM</a> in Berkeley, California and surrounding areas. <br />
      New hour long <a href="https://kpfa.org/kpfb/kpfb-programs/" target="_blank">shows</a> are uploaded here within 2 days of broadcast.
    </p>
    <ul>
      <li>
        <a href="https://s3-us-west-2.amazonaws.com/stolenartifacts.com/theNutt/The+Nutt+-+%231+-+10-01-17.mp3"><em># 1</em> - Tribulous Beginnings</a>
      </li>
      <li>
        <a href="https://s3-us-west-2.amazonaws.com/stolenartifacts.com/theNutt/The+Nutt+-+%232+-+10-15-17+-+Second+Chances.mp3"><em># 2</em> - Second Chances</a>
      </li>
      <li>
        <a href="https://s3-us-west-2.amazonaws.com/stolenartifacts.com/theNutt/The+Nutt+-+%233+-+10-22-17.mp3"><em># 3</em> - The Cognitive Revolution</a>
      </li>
      <li>
        <a href="https://s3-us-west-2.amazonaws.com/stolenartifacts.com/theNutt/The+Nutt+-+%234+-+11-5-17+-+Saudades.mp3"><em># 4</em> - Saudades</a>
      </li>
      <li>
        <a href="https://s3-us-west-2.amazonaws.com/stolenartifacts.com/theNutt/The+Nutt+-+%235+-+11-19-17+-+Tripping+Easy+Through+Life.mp3"><em># 5</em> - Tripping Easy Through Life</a>
      </li>
      <li>
        <a href="https://s3-us-west-2.amazonaws.com/stolenartifacts.com/theNutt/The+Nutt+-+%236+-+12-24-17+-+Take+a+holiday+break.mp3"><em># 6</em> - Take a Holiday Break</a>
      </li>
      <li>
        <a href="https://s3-us-west-2.amazonaws.com/stolenartifacts.com/theNutt/The+Nutt+-+%237+-+12-31-17+-+Looking+Forward+to+the+Past.mp3"><em># 7</em> - Looking Forward to the Past</a>
      </li>
      <li>
        <a href="https://s3-us-west-2.amazonaws.com/stolenartifacts.com/theNutt/The+Nutt+-+%238+-+1-14-18+-+Rakish+Affection.mp3"><em># 8</em> - Rakish Affection</a>
      </li>
      <li>
        <a href="https://s3-us-west-2.amazonaws.com/stolenartifacts.com/theNutt/The+Nutt+-+%239+-+2-18-18+-+We+Do+THIS+Together.mp3"><em># 9</em> - We Do THIS Together</a>
      </li>
      <li>
        <a href="https://s3-us-west-2.amazonaws.com/stolenartifacts.com/theNutt/The+Nutt+-+%2310+-+3-12-18+-+Sweet+Booty+Sweat.mp3"><em># 10</em> - Sweet Booty Sweat</a>
      </li>
      <li>
        <a href="https://s3-us-west-2.amazonaws.com/stolenartifacts.com/theNutt/The+Nutt+-+%2311+-+4-08-18+-+A+Slice+of+Life.mp3"><em># 11</em> - A Slice of Life</a>
      </li>
      <li>
        <a href="https://s3-us-west-2.amazonaws.com/stolenartifacts.com/theNutt/The+Nutt+-+%2312+-+4-22-18+-+You+Can+Call+It+Love.mp3"><em># 12</em> - You Can Call It Love</a>
      </li>
      <li>
        <a href="https://s3-us-west-2.amazonaws.com/stolenartifacts.com/theNutt/The+Nutt+-+%2313+-+6-03-18+-+Scattered+Dreams.mp3"><em># 13</em> - Scattered Dreams</a>
      </li>
    </ul>
	</main>
</template>
<script>
  export default {
    name: 'nutt',
    head () {
        return {
            base: { target: '_blank', href: 'https://s3-us-west-2.amazonaws.com/stolenartifacts.com/theNutt/' }
        }
    },
    transition (to, from) {
      if (!from) return 'slide-left'
      return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
    }
  }
</script>
<style lang="scss">
a {
        color: #07a;
        font-family: Consolas, Monaco, Mono, monospace;
        line-height: 1.75;
        text-decoration: none;
        text-shadow: 0 1px #efefef;
        &:hover {
                color: darken(#07a, 5);
                font-weight: bold;
        }
}
em {
        font-weight: 600;
        font-style: normal;
}
h1 {
        margin: 1rem 0 2rem;
        text-align: center;
}
li {
        list-style: none;
        line-height: 2rem;
}
main#nutt {
  background: #fff;
  padding: 0 7.5%;
}
p {
	line-height: 1.5;
	padding: 0 10% 2rem;
}
.lighten {
	color: #aaa;
}
</style>
