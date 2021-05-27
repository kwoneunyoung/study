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