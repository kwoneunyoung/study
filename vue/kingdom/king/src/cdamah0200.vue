<template>
    <div>
        <div>
            <Header v-bind:headerInfo="headInfo"></Header>
        </div>
        <div class="settingDiv">
            <div>
                <h3>고객 알림 설정</h3>
            </div>
            <div>
                <span>
                    고객님을 위한 다양한 혜택알림을<br>
                    받아보실 수 있습니다.
                </span>
                <div><br/>
                    <div>
                        <div>
                            <span>계약 관리 안내</span>
                        </div>
                        <div>
                            <label for="toggle_button">
                                <span v-if="isActive">On</span>
                                <span v-if="!isActive">Off</span>
                                <input id="checkRegist" type="checkbox" v-model="checkedRegistValue">
                            </label>
                        </div>
                    </div><br/>
                    <div>
                        <div>
                            <span>보험거래내역</span>
                        </div>
                        <div>
                            <label for="toggle_button">
                                <span v-if="isInsurenceActive">On</span>
                                <span v-if="!isInsurenceActive">Off</span>
                                <input type="checkbox" v-model="checkedInsurenceValue">
                            </label>
                        </div>
                    </div><br/>
                    <div>
                        <div>
                            <span>혜택/이벤트</span>
                        </div>
                        <div>
                            <label for="toggle_button">
                                <span v-if="isEventActive">On</span>
                                <span v-if="!isEventActive">Off</span>
                                <input type="checkbox" v-model="checkedEventValue">
                            </label>
                        </div>
                    </div>
                    <div id="toast">Push 수신이 허용 되었습니다.</div>
                    <div id="toastReject">Push 수신이 거부 되었습니다.</div>
                </div>
            </div>   
        </div>
    </div>
</template>

<script lang="ts">
//import Base from "@/core/SHLBase.vue"
//import Header from "@/biz/components/header.vue"

    export default {
        mixins : [Base],
        components : {
                Header
        },
        data() {
            return {
                headeInfo : {},
                currentState : false,
                currentInsurenceState : false,
                currentEventState : false
            }
        },
        mounted() {
            console.log("---mounted---")
        },
        computed : {
            isActive() {
                return this.currentState
            },
            isInsurenceActive() {
                return this.currentInsurenceState
            },
            isEventActive() {
                return this.currentEventState
            },
            checkedRegistValue() {
                get() {
                    return this.currentState
                },
                set(newValue:boolean){
                    if(newValue) {
                        this.toastAllow()
                    }
                    else {
                        this.toastReject()
                    }
                }
                this.currentState = newValue
            }
        },
        checkedInsurenceValue() {
            get() {
                return this.currentEventState
            },
            set(newValue:boolean) {
                if(newValue) {
                    this.toastAllow()
                }
                else{
                    this.toastReject()
                }
                this.currentEventState = newValue
            }
        }
    },
    methods : {
        vueCreated(parameters:any) {
            console.log("cdamaj0300p01 => ", JSON.stringify(parameters))
            this.headInfo.title="설정"
            this.headInfo.navigationBarStyle ="pop"
            this.headInfo.showBackPressButton = true
            this.headInfo.showFinishButton = true
        },
        vueResult(results:any) {

        },
        toastAllow() {
            const toast:any = document.getElementById('toast')
            let isToastShown:boolean = false
            if(isToastShown) return
            isToastShown = true;
            toast.classList.add('show')
            setTimeout(function() {
                //2700ms 후에 show 클래스를 제거함
                toast.classList.remove('show')
                isToastShown = false
            }, 2700)
        },
        toastReject() {
            const toastReject:any = document.getElementById('toastReject')
            let isToastShown:boolean = false
            if(isToastShown) return;
            isToastShown = true
            toastReject.classList.add('show')
            setTimeout(function(){
                toastReject.classList.remove('show')
                isToastShown=false
            }, 2700)
        }

    }

</script>