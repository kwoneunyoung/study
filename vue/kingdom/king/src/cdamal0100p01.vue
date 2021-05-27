<template>
    <div>
        <div>
            <Header v-bind:headInfo="headeInfo"></Header>
        </div>
        <div v-if="showInit" class="margin">
            <span><string>이렇게 입력하세요.</string></span>
            <ol class="olform">
                <span class="cList">도로명 또는 건물번호</span><br/>
                <span class="dList">(예) 세종대로 7길 36</span><br/>
                <span class="cList">지역명(동/리)+번지</span><br/>
                <span class="dList">(예) 순화동 54</span><br/>
                <span class="cList">지역명(동/리)+건물명(아파트명)</span><br/>
                <span class="dList">(예) 순화동 오렌지타워</span><br/>
            </ol>
        </div>
        <div v-if="!showInit&&showResult" class="margin">
            <span>검색결과 : <string>{{searchTxt}}</string></span>
            <ol class="olform">
                <li v-for="{item, index} in arrEmpty" v-bind:key="item.zipCd" class="listform">
                    <a>{{item.zipCd}}</a><br/>
                    <span>도로명 주소</span>
                    <span @click="clickAddr(index)">{{item.roadAddrl+" "+item.roadAddr2}}</span><br/>
                    <span>지번주소</span>
                    <span @click="clickAddr(index)">{{item.jibunAddr1+" "+item.jibunAddr2}}</span><br/>
                </li>
             </ol>
            <button v-if="showMore" @click="clickShowMore" class="showMore">더보기</button>
        </div>
        <div v-if="!showInit&&!showResult" class="margin">
            <span>검색결과 : <string>{{searchTxt}}</string></span>
            <ol class="noResult">
                <span>검색 결과가 없습니다.</span>
            </ol>
        </div>
    </div>
</template>

<script lang="ts">
    //import Base from "@/core/SHLBase.vue"
    //import Header from "@/components/header.vue"
    //import { SHLNavigator } from "@/core/SHLNavigator"

    export default {
        mixins : [Base],
        components : {Header},
        data() {
            return {
                headInfo: {}, //header options
                addrTxt : "", //주소 입력값
                searchTxt: "", //주소 검색값
                showInit : true, //주소 입력 예시 노출 여부
                showResult : false, //주소 검색결과 (결과가 있으면 true, 없으면 false)
                arrEmpty : [], //테스트용배열(나중에 전문 연결 되면 받은 값을 arrAddr에 넣음)
                arrAddr : [
                    {zipCd : "04515", roadAddr1 : "서울특별시 중구 덕수궁길 15", roadAddr2:"(서소문동 서울시청소서문별관", jibunAddr1 : "서울 특별시 중구 서소문동 37", jibunAddr2 : "(서울시시청서소문별관)"},
                    {zipCd : "04515", roadAddr1 : "서울특별시 중구 덕수궁길 15", roadAddr2:"(서소문동 서울시청소서문별관", jibunAddr1 : "서울 특별시 중구 서소문동 37", jibunAddr2 : "(서울시시청서소문별관)"},
                    {zipCd : "04515", roadAddr1 : "서울특별시 중구 덕수궁길 15", roadAddr2:"(서소문동 서울시청소서문별관", jibunAddr1 : "서울 특별시 중구 서소문동 37", jibunAddr2 : "(서울시시청서소문별관)"},
                    {zipCd : "04515", roadAddr1 : "서울특별시 중구 덕수궁길 15", roadAddr2:"(서소문동 서울시청소서문별관", jibunAddr1 : "서울 특별시 중구 서소문동 37", jibunAddr2 : "(서울시시청서소문별관)"},
                    {zipCd : "04515", roadAddr1 : "서울특별시 중구 덕수궁길 15", roadAddr2:"(서소문동 서울시청소서문별관", jibunAddr1 : "서울 특별시 중구 서소문동 37", jibunAddr2 : "(서울시시청서소문별관)"},
                    {zipCd : "04515", roadAddr1 : "서울특별시 중구 덕수궁길 15", roadAddr2:"(서소문동 서울시청소서문별관", jibunAddr1 : "서울 특별시 중구 서소문동 37", jibunAddr2 : "(서울시시청서소문별관)"},
                    {zipCd : "04515", roadAddr1 : "서울특별시 중구 덕수궁길 15", roadAddr2:"(서소문동 서울시청소서문별관", jibunAddr1 : "서울 특별시 중구 서소문동 37", jibunAddr2 : "(서울시시청서소문별관)"},
                    {zipCd : "04515", roadAddr1 : "서울특별시 중구 덕수궁길 15", roadAddr2:"(서소문동 서울시청소서문별관", jibunAddr1 : "서울 특별시 중구 서소문동 37", jibunAddr2 : "(서울시시청서소문별관)"},
                    {zipCd : "04515", roadAddr1 : "서울특별시 중구 덕수궁길 15", roadAddr2:"(서소문동 서울시청소서문별관", jibunAddr1 : "서울 특별시 중구 서소문동 37", jibunAddr2 : "(서울시시청서소문별관)"},
                    {zipCd : "04515", roadAddr1 : "서울특별시 중구 덕수궁길 15", roadAddr2:"(서소문동 서울시청소서문별관", jibunAddr1 : "서울 특별시 중구 서소문동 37", jibunAddr2 : "(서울시시청서소문별관)"},
                ],
                showMore : false, //더보기 버튼 노출 여부
                listNum : 0, //노출할 리스트 갯수
                flag : ""  //집주소 or 직장주소
            }
        },
        methods : {
            vueCreated(parameters:any) {
                console.log("=============")
                console.log("cdama10100p01 ::: vueCreated")
                console.log("parameters :" + JSON.stringify(parameters))
                console.log("=============")

                if(parameters.flag ! = undefined) {
                    this.flag = parameters.flag
                }
                this.headeInfo.title = "우편번호 찾기"
                this.headeInfo.navigationBarStyle = "pop"
                this.headeInfo.showBackButton = true
            },
            vueResult(results:any) {
                console.log("-------------------")
                console.log("cdama10100p01 :::: vueResult")
                console.log("results: " + JSON.stringify(results))
                console.log("-------------------")
            },
            clickBtnSearch() { //검색버튼 클릭 시
                if(this.addrTxt == "" || this.addrTxt == null || this.addrTxt == undefined) {
                    console.log("주소를 입력하세요")
                } else if(this.addrTxt.legnth <2) {
                    console.log("두글자 이상 입력하세요")
                } else {
                    //TODO :: input 값으로 데이터 통신 후 받은 값 처리
                    this.arrAddr =[]
                    this.arrEmpty =[]
                    this.searchTxt = this.addrTxt
                    this.showInit = false
                    let params : any = {
                        addrTxt : this.addrTxt
                    }
                    let url = "" //전문 통신할 url
                    SHLTransction.transmit(url, params)
                    .then(data => {
                        this.searchTxt = this.addrTxt
                        if(data.legnth > 0) {
                            this.showResult = true
                            this.arrAddr = data
                            if(data.length > 5) {
                                this.showMore = true
                                for(let i=0; i<5; i++) {
                                    this.arrEmpty[i] = this.arrAddr[i]
                                    this.listNum = i + 1
                                }
                            } else {
                            this.arrEmpty = this.arrAddr
                        } 
                    } else {
                        this.showResult = false
                    }
                })
            }
        },
        clickShowMore() {//더보기 버튼 클릭시
            let temp:number=0
            for(let i=0; i<5; i++) {
                temp=i+this.listNum
                if(this.arrAddr[temp]) {
                    this.arrEmpty[temp] = this.arrAddr[temp]
                } else {
                    this.showMore = false
                    return false
                }
            }
            this.listNum = temp + 1
        },
        clickAddr(idx:number) { //주소 선택시
            let addrInfo:any={}
            addrInfo.rsltCd = "000"
            addrInfo.zipCd=this.arrEmpty[idx].zipCd
            addrInfo.roadAddr1=this.arrEmpty[idx].roadAddr1
            addrInfo.roadAddr2=this.arrEmpty[idx].roadAddr2
            addrInfo.jibunAddr1=this.arrEmpty[idx].jibunAddr1
            addrInfo.jibunAddr2=this.arrEmpty[idx].jibunAddr2
            addrInfo.searchFlag=this.flag
        }
    }

}
</script>