<!-- <template>
    <h1>企業登録画面</h1>
</template>
  
<script  setup lang="ts">

</script>
  
<style scoped></style> -->
<template>
    <div class="box" id="userInfo">
        <h3>基本情報</h3>
        <div>
            <table class="basicInformation">
                <tr>
                    <td class="firstTd"><span class="label">名前</span></td>
                    <td class="firstTd"><input class="input" readonly=true :value="userData.data.userName" /></td>
                    <td class="secondTd"><span class="label">性別</span></td>
                    <td class="firstTd"><input class="input" readonly=true :value="gender" /></td>
                    <td rowspan="6">
                        <span style="float:none;margin-left: 100px;" class="icon">
                            <span class="image">
                                <el-image style="width: 123px; height: 140px" :src="userData.data.icon" fit="fill">
                                    <template #error>
                                        <div class="image-slot">
                                            <el-icon><icon-picture /></el-icon>
                                        </div>
                                    </template>
                                </el-image>
                            </span>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td class="thirdTd"><span class="label">生年月日</span></td>
                    <td class="thirdTd"><input class="input" readonly=true :value="userData.data.birthday" /></td>
                    <td class="fourthTd"><span class="label">国籍</span></td>
                    <td class="thirdTd"><input class="input" readonly=true :value="userData.data.countryKbn" /></td>
                </tr>

                <tr>
                    <td class="thirdTd"><span class="label">電話番号</span></td>
                    <td class="thirdTd"><input class="input" readonly=true :value="userData.data.mobilePhone" /></td>

                    <td class="fourthTd"><span class="label">住所</span></td>
                    <td class="thirdTd"><input class="input" readonly=true :value="userData.data.address" />
                    </td>
                </tr>

                <tr>
                    <td class="thirdTd"><span class="label">メールアドレス</span></td>
                    <td colspan="3" class="thirdTd"><input class="input" readonly=true :value="userData.data.email" /></td>
                </tr>
            </table>
        </div>

        <h3 style="margin-top: 30px;">最終教育学歴</h3>
        <div>
            <table style="width: 53%" class="basicInformation">
                <tr>
                    <td class="educationTd"><span class="label">学校</span></td>
                    <td class="educationTd"><input class="input" readonly=true :value="userData.data.school" /></td>
                    <td class="secondTd"><span class="label">学位</span></td>
                    <td class="educationTd"><input class="input" readonly=true :value="userData.data.educationKbn" /></td>
                </tr>
                <tr>
                    <td class="thirdTd"><span class="label">専攻</span></td>
                    <td class="thirdTd"><input class="input" readonly=true :value="userData.data.specialty" /></td>
                    <td class="fourthTd"><span class="label">在学期間</span></td>
                    <td class="thirdTd"><input class="input" readonly=true :value="period" /></td>
                </tr>
            </table>
        </div>
        <h3 style="margin-top: 30px;">習得能力</h3>
        <div style="width: 60%;">
            <p class="tableTitle">スキル</p>
            <el-table :data="userData.data.skills" border :header-cell-style="{ background: '#eef1f4', color: '#606266' }"
                empty-text="データなし">
                <el-table-column prop="skillName" label="スキル名" width="120" />
                <el-table-column prop="useDuration" label="経験期間" width="120" />
                <el-table-column prop="level" label="レベル" width="120" />
                <el-table-column prop="credentials" label="証書/資格" />
            </el-table>
        </div>

        <div style="width: 60%;">
            <p class="tableTitle">言語能力</p>
            <el-table :data="userData.data.languages" border
                :header-cell-style="{ background: '#eef1f4', color: '#606266' }" empty-text="データなし">
                <el-table-column prop="language" label="語種" width="120" />
                <el-table-column prop="conversationLevel" label="会話能力" width="120" />
                <el-table-column prop="readingLevel" label="読解力" width="120" />
                <el-table-column prop="credentials" label="証書/資格" />
            </el-table>
        </div>

        <div style="width: 60%;">
            <p class="tableTitle">自己PR</p>
            <el-input :value="userData.data.description" type="textarea" readonly />
        </div>

        <h3 style="margin-top: 30px;">職務経験</h3>
        <div style="width: 60%;">
            <p class="tableTitle">職務経歴</p>
            <el-table :data="workData" border :header-cell-style="{ background: '#eef1f4', color: '#606266' }"
                empty-text="データなし">
                <el-table-column prop="careerName" label="職務" width="140" />
                <el-table-column prop="duration" label="時間" width="210" />
                <el-table-column prop="description" label="職務経歴説明" />
            </el-table>
        </div>

        <div style="width: 60%;">
            <p class="tableTitle">項目経歴</p>
            <el-table :data="projectData" border :header-cell-style="{ background: '#eef1f4', color: '#606266' }"
                empty-text="データなし">
                <el-table-column prop="projectName" label="項目名" width="140" />
                <el-table-column prop="duration" label="時間" width="210" />
                <el-table-column prop="description" label="項目経歴説明" />
                <el-table-column prop="media" label="作品" />
            </el-table>
        </div>

        <div style="width: 60%;">
            <p class="tableTitle">研修履歴</p>
            <el-table :data="userData.data.courses" border :header-cell-style="{ background: '#eef1f4', color: '#606266' }"
                empty-text="データなし">
                <el-table-column prop="courseName" label="研修内容" width="140" />
                <el-table-column prop="attendance" label="受講状況" width="140" />
                <el-table-column prop="startDate" label="受講日" width="200" />
                <el-table-column prop="pass" label="受講結果" />
            </el-table>
        </div>
    </div>
    <div style="margin-left: 80%;margin-top: 40px;">
        <el-button type="primary" @click="() => htmlToPDF('userInfo', '人材プロフィール')" size="large"
            style="font-size: 16px;">PDF</el-button>
        <el-button type="primary" @click="updateUser" size="large" style="margin-left: 30px;font-size: 16px">変更</el-button>
    </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { Picture as IconPicture } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import useUserStore from '@/store/modules/user'
import { htmlToPDF } from '@/utils/html2pdf'
import emitter from '@/utils/event-bus'
import type { User } from '@/api/user/type'

interface Project {
    projectName: string,
    duration: string,
    description: string,
    media: string[]
}
interface Work {
    careerName: string,
    duration: string,
    description: string
}

let $router = useRouter()
let useStore = useUserStore();
let projectData: Project[] = reactive([])
let workData: Work[] = reactive([])
let period = ""
const url = 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
let gender = ""
const assignIfKeysEqual = (obj1: any, obj2: any) => {
    const obj1keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    if (obj1keys.every(key => obj2Keys.includes(key))) {
        Object.assign(obj1, obj2);
    }
}
onMounted(async () => {
    // const userId = $router.currentRoute.value.params.userId
    const result = await useStore.getDesignatedUserInfo("3");
    responseData = result.data
    console.log(responseData)
    assignIfKeysEqual(userData.data, result.data)
    if (result.data.genderKbn === 1) { gender = "男" } else { gender = "女" }
    if (result.data.projectHistories !== null) {
        for (var i = 0; i < result.data.projectHistories.length; i++) {
            projectData.push({
                projectName: result.data.projectHistories[i].projectName,
                duration: result.data.projectHistories[i].startDate + ' — ' + result.data.projectHistories[i].endDate,
                description: result.data.projectHistories[i].description,
                media: result.data.projectHistories[i].media
            })
        }
        // userData.data.projectHistories = projectData
    }
    if (result.data.workHistories !== null) {
        for (var i = 0; i < result.data.workHistories.length; i++) {
            workData.push({
                careerName: result.data.workHistories[i].careerName,
                duration: result.data.workHistories[i].startDate + ' — ' + result.data.workHistories[i].endDate,
                description: result.data.workHistories[i].description
            })
        }
        // userData.data.workHistories = workData
    }
    if (result.data.icon == null) { userData.data.icon = url }
    if (result.data.admissionDate !== null && result.data.graduationDate !== null) { period = userData.data.admissionDate + ' — ' + userData.data.graduationDate }
})
let responseData = reactive({})

let userData: { data: User } = reactive({
    data: {
        icon: "",
        userName: "",
        email: "",
        birthday: "",
        genderKbn: 1,
        mobilePhone: "",
        countryKbn: "",
        address: "",
        educationKbn: "",
        specialty: "",
        admissionDate: "",
        graduationDate: "",
        school: "",
        skills: [],
        languages: [],
        description: "",
        workHistories: [],
        projectHistories: [],
        courses: []
    }
})

let updateUser = () => {
    $router.push({ name: "talentUpdate", params: { userId: 3 } });
    emitter.emit('sendUserData', responseData)
}
</script>

<style scoped>
.box {
    padding-left: 7%;
    padding-top: 8px;
}

.icon {
    display: inline-block;
}

.image {
    display: flex;
    color: var(--el-text-color-secondary);
    border: 1px dashed var(--el-border-color);
    width: 123px;
    height: 140px;
    align-items: center;
    font-size: 120px;
}

.image-slot {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: var(--el-fill-color-light);
    color: var(--el-text-color-secondary);
    font-size: 30px;
}

.label {
    font: 16px 'Arial';
}

.input {
    outline: none;
    border-bottom: 1px solid #dbdbdb;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    font: 16px 'Arial';
}

.firstTd {
    width: 120px;
}

.secondTd {
    width: 70px;
    padding-left: 85px;
}

.thirdTd {
    padding-top: 20px;
}

.fourthTd {
    width: 80px;
    padding-left: 85px;
    padding-top: 20px;
}

.educationTd {
    width: 80px;
}

.tableTitle {
    font: 16px 'Arial';
    margin-bottom: 20px;
    margin-top: 30px;
}
</style>

