<template>
    <div class="token-data">
        <div class="token-data__title" :style="setTraitsColor">
          <h1>{{$store.state.currentTokenData.name}}</h1>
          <h2>{{setDoggyType}} </h2>
        </div>
        <div class="token-data__info">
          <ul class="token-data__info__attrs">
            <li 
              v-for="attribute in $store.state.currentTokenData.attributes" 
              :key="attribute.trait_type"  
              class="token-data__info__attrs__attribute" 
              :style="attribute.value === '' ? 'display:none' :''" >
              
              <p class="token-data__info__attrs__attribute__trait"  :style="setTraitsColor" >{{attribute.value !== '' ? attribute.trait_type : ''}}</p>
              <p class="token-data__info__attrs__attribute__value" >{{attribute.value}}</p>
            </li>
          </ul>
        </div>
      </div>
</template>

<script>
export default {
    name: 'TokenInfoData',
    computed: {
    setTraitsColor(){
      const colors = {
        human: "#75402f",
        blue:"#2f7fbe",
        alien:"#2e8e72",
        zombie:"#567244",
        dogg:"#6d2916",
        robot: "#9294a4",
        golden: "#af721d",
      }

      const doggyType = this.$store.state.currentTokenData.attributes.filter((attr)=> attr.trait_type === "Type")
      const color = `background: ${colors[doggyType[0].value.toLowerCase()]};`

      return color
    },
    setDoggyType(){
      const trait = this.$store.state.currentTokenData.attributes.filter((attr)=> attr.trait_type === "Type")
      return trait[0].value
    }
    }
}
</script>

<style lang="scss" scoped>

    .token-data {
        
        &__title {
            display:flex;
            justify-content:space-between;
            align-items:flex-end;
            padding: 1em;
            border-radius:.5em .5em 0 0;
            color:white;

            & h1{
                font-size:1.5em;
            }

            & h2{
                font-size:1em;
            }
        }

        &__info {
            height:100%;
            background-color:rgba(0,0,0,.5);
            padding: 1em;
            line-height:1.5em;
            border-radius:0 0 .5em .5em;

            &__attrs {
                display: grid;
                grid-template-columns: repeat(2,1fr);
                list-style: none;
                padding:0;

                &__attribute {
                width:95%;
                font-size: .8em;
                text-align: left;
                padding:1em 0;
                font-weight:800;

                    &__trait {
                        display: block;
                        background: #0a2201;
                        color: white;
                        padding: 0em 1em;
                        border-radius: 1.5em;
                        margin-bottom: 0.5em;
                    }

                    &__value {
                        display:block;
                        padding-left:1em;
                        color: white;
                        padding:.25em 1em;
                        border-radius:1.5em;
                    }
                }
            }
        }

        @media screen and (min-width: $breakpoint-desktop) {
        
            &__info{
        
                &__attrs{
                    grid-template-columns: repeat(4,1fr);
                    grid-gap:.5em;

                &__attribute{
                    grid-template-columns: 2fr 3fr;
                }
            }
        }
    }
}
  
</style>