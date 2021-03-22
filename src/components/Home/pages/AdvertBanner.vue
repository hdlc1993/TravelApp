<template>
    <div class="activity">
        <div class="activity-item  border-right">
            <a :href="list[0].href">
    
                <div class="section ct-left">
                    <h2>{{list[0].title}}</h2>
                    <p>
                        {{list[0].desc}}
                    </p>
                </div>
                <div class="ct-right">
                    <img :src="list[0].src" alt="">
                </div>
            </a>
        </div>
        <div class="activity-item">
            <a :href="list[1].href">
    
                <div class="section ct-left">
                    <h2>{{list[1].title}}</h2>
                    <p>
                        {{list[1].desc}}
                    </p>
                </div>
                <div class="ct-right">
                    <img :src="list[1].src" alt="">
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    props:{
        list:{
            type: Array,
            required: false,
            default: [
                {
                    title:'活动1',
                    src: '',
                    desc: '未开启',
                    href:'#'
                },
                {
                    title:'活动2',
                    src: '',
                    desc: '未开启',
                    href:'#'
                }
            ]
        }
    }
}
</script>

<style scoped lang="less">
@w:100%;
    .activity{
        width: @w;
        height: 1.4rem;
        display: flex;
        position: relative;
        
        background:#fff;
        .activity-item{
            flex:1;
            font-size: .28rem;
            height: 1.4rem;
            a{
                
                display: flex;
                align-items: center;
                width: @w;
                height: @w;
                
                .ct-left{
                    flex:5;
                    padding-left:10%;
                    height: 1rem;
                    h2{
                        color:red;
                        font-weight: bold;
                        font-size: .3rem;
                        margin-bottom: .2rem;
                    }
                    >p{
                        font-size: .2rem;
                    }
                }
                .ct-right{
                    flex:5;
                    height: 1rem;
                    text-align: left;
                    img{
                        width: auto;
                        height: @w;
                    }
                }
            }
        }
    }

</style>