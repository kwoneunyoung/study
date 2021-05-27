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