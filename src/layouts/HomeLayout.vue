<template>
    <q-layout view="lhh LpR lff" >
        <q-header elevated v-if="$q.platform.is.desktop" >
            <q-toolbar>          
                <q-toolbar-title>
                    <div class="py-2 px-28">

                        <div class="flex flex-row" style="justify-content: space-between;">
                            <div class="flex">
                                <img style="max-height:50px; max-height:50px" src="../assets/hyperhire-logo.svg"/>
                                <span class="q-ml-xs font-medium">hyperhire</span>
                            </div>
                            <div class="flex text-base font-extrabold items-center">
                                <q-btn-dropdown no-caps flat rounded label="채용">
                                    <q-list>
                                        <q-item clickable v-close-popup @click="onItemClick">
                                            <q-item-section>
                                                <q-item-label>해외 개발자 원격 채용</q-item-label>
                                            </q-item-section>
                                        </q-item>
                                        <q-item clickable v-close-popup @click="onItemClick">
                                            <q-item-section>
                                                <q-item-label>외국인 원격 채용 (비개발 직군)</q-item-label>
                                            </q-item-section>
                                        </q-item>
                                        <q-item clickable v-close-popup @click="onItemClick">
                                            <q-item-section>
                                                <q-item-label>한국어 가능 외국인 채용</q-item-label>
                                            </q-item-section>
                                        </q-item>
                                    </q-list>
                                </q-btn-dropdown>
                                <div class="q-ml-lg text-base ">해외 개발자 활용 서비스</div>
                            </div>
                            <q-btn class="font-extrabold text-[#4A77FF] bg-white" label="문의하기"/>
                        </div>
                    </div>
                </q-toolbar-title>
            </q-toolbar>
            <div style="background-color: #79b5f1;">
                <div class="pt-20 px-32 grid grid-cols-2 gap-4">
                    <!--grid 1-->
                    <div class="font-extrabold">
                        <div class="text-[3rem]">
                            <p ref="subtitle" style="width: 20%;border-radius: 0.5rem;" class="mb-3 text-center bg-white fade-in p-2 text-[#40E2E8] text-lg font-extrabold">풀타임, 파트타임</p>
                            <span ref="title" class="fade-in-up">최고의 실력을 가진 <br>외국인 인재를 찾고 계신가요?</span>
                        </div>
                        <div ref="title" class="pt-5 text-[#FFFFFFE5] text-[1.5rem] fade-in-up">
                            <span>법률 및 인사관리 부담없이 <br>1주일 이내에 원격으로 채용해보세요.</span>
                            <div class="pt-5 text-lg">개발자가 필요하신가요?</div>
                        </div>
                        <div class="fade-in grid grid-cols-3 gap-6 mt-10 text-[#FFFFFFE5] text-[1.5rem]">
                            <div>
                                <div style="border-top: 2px solid white;" class="text-lg pt-2">
                                    평균 월 120만원
                                </div>
                                <span class="text-base text-[#FFFFFFCC]">임금을 해당 국가를 기준 으로 계산합니다.</span>
                            </div>
                            <div>
                                <div style="border-top: 2px solid white;" class="text-lg pt-2">
                                    최대 3회 인력교체
                                </div>
                                <span class="text-base text-[#FFFFFFCC]">막상 채용해보니 맞지 않아도 걱정하지 마세요.</span>
                            </div>
                            <div>
                                <div style="border-top: 2px solid white;" class="text-lg pt-2">
                                    평균 3일, 최대 10일
                                </div>
                                <span class="text-base text-[#FFFFFFCC]">급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.</span>
                            </div>
                        </div>
                    </div>
                    <!--grid 2-->
                    <div class="flex justify-end" >
                        <div style="width:70%">
                            <div class="flex justify-center">
                                <div style="border-radius: 0.5rem;" class="flex mb-3 text-center bg-white fade-in px-3 py-2 text-[#00C696] text-lg font-extrabold">
                                    <!-- <q-img class="width:10px" src="../assets/dollar-icon.svg"/> -->
                                    <img src="../assets/dollar-icon.svg" />
                                    <div class="pl-2">월 100만원</div> 
                                </div>
                            </div>
                            <q-carousel
                                animated
                                v-model="slide"
                                arrows
                                navigation
                                infinite
                                style="border-radius: 2rem;"
                            >
                                <q-carousel-slide :name="1">
                                    <div class="rounded items-center">
                                        <div class="pt-2 flex justify-center">
                                            <img src="../assets/girl.svg" alt="Person" class="card__image">
                                        </div>
                                        <div class="text-center font-extrabold text-[#24252F] text-2xl pt-3">Sonakshi Sinha</div>
                                        <div class="pt-2 text-center font-extrabold text-[#4A77FF]">마케팅 · 2y+</div>
                                        <div class="pt-5 flex justify-center">
                                            <div class="rounded p-2 text-[#5E626F]" style="border: 1px solid #C1C5CF">
                                                <span>마케팅 콘텐츠 제작</span>
                                            </div>
                                        </div>
                                        <div class="pt-1 flex justify-center">
                                            <div class="rounded p-1 text-[#5E626F]" style="border: 1px solid #C1C5CF">
                                                <span>인스타그램 관리</span>
                                            </div>
                                        </div>
                                        <div class="pt-1 flex justify-center">
                                            <div class="rounded p-1 text-[#5E626F]" style="border: 1px solid #C1C5CF">
                                                <span>트위터 관리</span>
                                            </div>
                                            <div class="rounded p-1 text-[#5E626F]" style="border: 1px solid #C1C5CF">
                                                <span>블로그 글 작성</span>
                                            </div>
                                        </div>
                                    </div>
                            </q-carousel-slide>
                            <q-carousel-slide :name="2">
                                <div class="rounded items-center">
                                    <div class="pt-2 flex justify-center">
                                        <img src="../assets/man2.jpg" alt="Person" class="card__image">
                                    </div>
                                    <div class="text-center font-extrabold text-[#24252F] text-2xl pt-3">Akash Vadhwani</div>
                                    <div class="pt-2 text-center font-extrabold text-[#4A77FF]">마케팅 · 2y+</div>
                                    <div class="pt-5 flex justify-center">
                                        <div class="rounded p-2 text-[#5E626F]" style="border: 1px solid #C1C5CF">
                                            <span>마케팅 콘텐츠 제작</span>
                                        </div>
                                    </div>
                                    <div class="pt-1 flex justify-center">
                                        <div class="rounded p-1 text-[#5E626F]" style="border: 1px solid #C1C5CF">
                                            <span>인스타그램 관리</span>
                                        </div>
                                    </div>
                                    <div class="pt-1 flex justify-center">
                                        <div class="rounded p-1 text-[#5E626F]" style="border: 1px solid #C1C5CF">
                                            <span>트위터 관리</span>
                                        </div>
                                        <div class="rounded p-1 text-[#5E626F]" style="border: 1px solid #C1C5CF">
                                            <span>블로그 글 작성</span>
                                        </div>
                                    </div>
                                </div>
                                </q-carousel-slide>
                                <q-carousel-slide :name="3">
                                    <div class="rounded items-center">
                                        <div class="pt-2 flex justify-center">
                                            <img src="../assets/man.jpg" alt="Person" class="card__image">
                                        </div>
                                        <div class="text-center font-extrabold text-[#24252F] text-2xl pt-3">Abhishek Gupta</div>
                                        <div class="pt-2 text-center font-extrabold text-[#4A77FF]">마케팅 · 2y+</div>
                                        <div class="pt-5 flex justify-center">
                                            <div class="rounded p-2 text-[#5E626F]" style="border: 1px solid #C1C5CF">
                                                <span>마케팅 콘텐츠 제작</span>
                                            </div>
                                        </div>
                                        <div class="pt-1 flex justify-center">
                                            <div class="rounded p-1 text-[#5E626F]" style="border: 1px solid #C1C5CF">
                                                <span>인스타그램 관리</span>
                                            </div>
                                        </div>
                                        <div class="pt-1 flex justify-center">
                                            <div class="rounded p-1 text-[#5E626F]" style="border: 1px solid #C1C5CF">
                                                <span>트위터 관리</span>
                                            </div>
                                            <div class="rounded p-1 text-[#5E626F]" style="border: 1px solid #C1C5CF">
                                                <span>블로그 글 작성</span>
                                            </div>
                                        </div>
                                    </div>
                                </q-carousel-slide>
                            </q-carousel>
                        </div>
                    </div>
                </div>
                <div class=" px-32 py-20">
                    <div style="overflow:hidden">
                        <div class="slider-content" :style="{ transform: `translateX(-${currentIndex * 20}%)` }">
                            <div v-for="(item, index) in cardItems" :key="index" style="border-radius: 0.5rem;gap:1rem" class="fade-in fade-div flex mb-3 text-center px-3 py-2 text-[#FFFFFF] text-2xl font-extrabold">
                                <!-- <q-img class="width:10px" src="../assets/dollar-icon.svg"/> -->
                                <img :src="require(`../assets/${item.icon}`)"/>
                                <div class="pl-2 flex items-center">{{item.desc}}</div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </q-header>
        <q-page-container v-if="$q.platform.is.desktop">
            <div class="font-extrabold">
                <div class="px-32 py-20 bg-white">
                <div class="gap-2 grid grid-cols-6">
                    <div class="col-span-2 text-[#343741]">
                        <div>
                            <img src="../assets/comp_logo.svg"/>
                        </div>
                        <div class="py-3 text-sm text-[#343741]">
                            <span>우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.</span>
                        </div>
                        <div class="pt-3">
                            <span class="text-[13px] text-[#5E626F]">010-0000-0000</span>
                        </div>
                        <div class="pt-2">
                            <span class="text-[13px] text-[#5E626F]">aaaaa@naver.com</span>
                        </div>
                    </div>
                    <div style="border:1px solid rgb(243,243,243); border-radius: 0.5rem" v-for="itm in details" class="p-3 text-[#343741]">
                        <div><img :src="require(`../assets/${itm.icon}`)"/></div>
                        <div class="pt-2 text-sm">{{itm.desc}}</div>
                        <div class=" pt-4 flex items-center gap-2">
                            <span class="text-sm text-[#5E626F]">바로가기</span>
                            <img style="height:16px" src="../assets/arrow.svg">
                        </div>
                    </div>
                </div>
                <div class="pt-8 gap-2 grid grid-cols-6 text-extrabold">
                    <div>
                        <div class="text-xs text-[#343741]">상호명</div>
                        <div class="pt-2 text-[13px] text-[#5E626F]">하이퍼하이어</div>
                        <div class="pt-2 text-[13px]">Hyperhire India Private Limited</div>
                    </div>
                    <div>
                        <div class="text-xs text-[#343741]">대표 CEO</div>
                        <div class="pt-2 text-[13px] text-[#5E626F]">김주현</div>
                        <div class="pt-2 text-[13px]">Juhyun Kim</div>
                    </div>
                    <div>
                        <div class="text-xs text-[#343741]">사업자등록번호 CIN</div>
                        <div class="pt-2 text-[13px] text-[#5E626F]">427-86-01187</div>
                        <div class="pt-2 text-[13px]">U74110DL2016PTC290812 </div>
                    </div>
                    <div class="col-span-3">
                        <div class="text-xs text-[#343741]">주소 ADDRESS</div>
                        <div class="pt-2 text-[13px] text-[#5E626F]">서울특별시 강남대로 479, 지하 1층 238호 </div>
                        <div class="pt-2 text-[13px]">D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, <br>110053 India</div>
                    </div>
                </div>
                <div class="font-extrabold text-[13px] pt-6 text-[#5E626F]">
                    <span>ⓒ 2023 Hyperhire</span>
                </div>

                </div>
            </div>
        </q-page-container>
        <!--mobile-->
        <q-header elevated v-if="$q.platform.is.mobile">
            <q-toolbar>          
                <q-toolbar-title>
                    <div class="p-3 flex items-center justify-between">
                        <div class="flex">
                            <img style="max-height:24px; max-height:24px" src="../assets/hyperhire-logo.svg"/>
                            <span class="q-ml-xs font-medium">hyperhire</span>
                        </div>
                    </div>
                </q-toolbar-title>
            </q-toolbar>
            <div style="background-color: #79b5f1;" class="py-8 px-4">
                <div class="font-extrabold">
                        <div class="text-[2.25rem]">
                            <p ref="subtitle" style="width: 45%;border-radius: 0.5rem;" class="mb-4 text-center bg-[#8BC4FF] fade-in p-2 text-white text-lg font-extrabold">풀타임, 파트타임</p>
                            <span ref="title" class="fade-in-up">최고의 실력을 가진 외국인 인재를 찾고 계신가요?</span>
                        </div>
                        <div class="text-[#FFFFFFCC] text-lg pt-3">
                            법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.
                        </div>
                </div>
                <div class="flex justify-center">
                    <div style="border-radius: 0.5rem;width: 45%;" class="flex mt-5 mb-5 text-center bg-white fade-in px-3 py-2 text-[#00C696] text-lg font-extrabold">
                        <img src="../assets/dollar-icon.svg" />
                        <div class="pl-2">월 100만원</div> 
                    </div>
                </div>
                <q-carousel
                    animated
                    v-model="slide"
                    arrows
                    navigation
                    infinite
                    style="border-radius: 2rem;"
                >
                    <q-carousel-slide :name="1">
                        <div class="rounded items-center">
                            <div class="pt-2 flex justify-center">
                                <img src="../assets/girl.svg" alt="Person" class="card__image">
                            </div>
                            <div class="text-center font-extrabold text-[#24252F] text-lg pt-3">Sonakshi Sinha</div>
                            <div class="pt-2 text-center font-extrabold text-[#4A77FF]">마케팅 · 2y+</div>
                            <div class="pt-5 flex justify-center">
                                <div class="rounded p-2 text-[#5E626F]" style="border: 1px solid #C1C5CF">
                                    <span>마케팅 콘텐츠 제작</span>
                                </div>
                            </div>
                            <div class="pt-1 flex justify-center">
                                <div class="rounded p-1 text-[#5E626F]" style="border: 1px solid #C1C5CF">
                                    <span>인스타그램 관리</span>
                                </div>
                            </div>
                            <div class="pt-1 flex justify-center">
                                <div class="rounded p-1 text-[#5E626F]" style="border: 1px solid #C1C5CF">
                                    <span>트위터 관리</span>
                                </div>
                                <div class="rounded p-1 text-[#5E626F]" style="border: 1px solid #C1C5CF">
                                    <span>블로그 글 작성</span>
                                </div>
                            </div>
                        </div>
                </q-carousel-slide>
                <q-carousel-slide :name="2">
                    <div class="rounded items-center">
                        <div class="pt-2 flex justify-center">
                            <img src="../assets/man2.jpg" alt="Person" class="card__image">
                        </div>
                        <div class="text-center font-extrabold text-[#24252F] text-lg pt-3">Akash Vadhwani</div>
                        <div class="pt-2 text-center font-extrabold text-[#4A77FF]">마케팅 · 2y+</div>
                        <div class="pt-5 flex justify-center">
                            <div class="rounded p-2 text-[#5E626F]" style="border: 1px solid #C1C5CF">
                                <span>마케팅 콘텐츠 제작</span>
                            </div>
                        </div>
                        <div class="pt-1 flex justify-center">
                            <div class="rounded p-1 text-[#5E626F]" style="border: 1px solid #C1C5CF">
                                <span>인스타그램 관리</span>
                            </div>
                        </div>
                        <div class="pt-1 flex justify-center">
                            <div class="rounded p-1 text-[#5E626F]" style="border: 1px solid #C1C5CF">
                                <span>트위터 관리</span>
                            </div>
                            <div class="rounded p-1 text-[#5E626F]" style="border: 1px solid #C1C5CF">
                                <span>블로그 글 작성</span>
                            </div>
                        </div>
                    </div>
                    </q-carousel-slide>
                    <q-carousel-slide :name="3">
                        <div class="rounded items-center">
                            <div class="pt-2 flex justify-center">
                                <img src="../assets/man.jpg" alt="Person" class="card__image">
                            </div>
                            <div class="text-center font-extrabold text-[#24252F] text-lg pt-3">Abhishek Gupta</div>
                            <div class="pt-2 text-center font-extrabold text-[#4A77FF]">마케팅 · 2y+</div>
                            <div class="pt-5 flex justify-center">
                                <div class="rounded p-2 text-[#5E626F]" style="border: 1px solid #C1C5CF">
                                    <span>마케팅 콘텐츠 제작</span>
                                </div>
                            </div>
                            <div class="pt-1 flex justify-center">
                                <div class="rounded p-1 text-[#5E626F]" style="border: 1px solid #C1C5CF">
                                    <span>인스타그램 관리</span>
                                </div>
                            </div>
                            <div class="pt-1 flex justify-center">
                                <div class="rounded p-1 text-[#5E626F]" style="border: 1px solid #C1C5CF">
                                    <span>트위터 관리</span>
                                </div>
                                <div class="rounded p-1 text-[#5E626F]" style="border: 1px solid #C1C5CF">
                                    <span>블로그 글 작성</span>
                                </div>
                            </div>
                        </div>
                    </q-carousel-slide>
                </q-carousel>
                <div class="mt-5 grid grid-cols-2 text-base">
                    <div class="flex">
                        <q-checkbox v-model="check1" label="한국어 능력" color="white"/>
                        <q-checkbox v-model="check2" label="업무 수행 능력" color="white"/>
                    </div>
                    <div class="flex">
                        <q-checkbox v-model="check3" label="겸업 여부" color="white"/>
                        <q-checkbox v-model="check4" label="평판 조회" color="white"/>
                    </div>
                </div>
                <div class="pt-2">
                    <span class="text-base text-[#FBFF23]">개발자가 필요하신가요?</span>
                </div>
            </div>
        </q-header>
        <q-page-container v-if="$q.platform.is.mobile">
            <div class="py-8 px-4 font-extrabold">
                <div class="text-[#343741]">
                    <div>
                        <img src="../assets/comp_logo.svg"/>
                    </div>
                    <div class="py-3 text-sm text-[#343741]">
                        <span>우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.</span>
                    </div>
                    <div class="pt-3">
                        <span class="text-[13px] text-[#5E626F]">010-0000-0000</span>
                    </div>
                    <div class="pt-2">
                        <span class="text-[13px] text-[#5E626F]">aaaaa@naver.com</span>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-3 pt-4">
                    <div style="border:1px solid rgb(243,243,243); border-radius: 0.5rem" v-for="itm in details" class="p-3 text-[#343741]">
                        <div><img :src="require(`../assets/${itm.icon}`)"/></div>
                        <div class="pt-2 text-sm">{{itm.desc}}</div>
                        <div class=" pt-4 flex items-center gap-2">
                            <span class="text-sm text-[#5E626F]">바로가기</span>
                            <img style="height:16px" src="../assets/arrow.svg">
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-2 py-5">
                    <div>
                        <div class="text-xs text-[#343741]">상호명</div>
                        <div class="pt-2 text-[13px] text-[#5E626F]">하이퍼하이어</div>
                        <div class="pt-2 text-[13px] text-[#5E626F]">Hyperhire India Private Limited</div>
                    </div>
                    <div>
                        <div class="text-xs text-[#343741]">대표 CEO</div>
                        <div class="pt-2 text-[13px] text-[#5E626F]">김주현</div>
                        <div class="pt-2 text-[13px] text-[#5E626F]">Juhyun Kim</div>
                    </div>
                </div>
                <div class="py-3">
                    <div class="text-xs text-[#343741]">사업자등록번호 CIN</div>
                    <div class="pt-2 text-[13px] text-[#5E626F]">427-86-01187</div>
                    <div class="pt-2 text-[13px] text-[#5E626F]">U74110DL2016PTC290812 </div>
                </div>
                <div class="py-3">
                    <div class="text-xs text-[#343741]">주소 ADDRESS</div>
                    <div class="pt-2 text-[13px] text-[#5E626F]">서울특별시 강남대로 479, 지하 1층 238호 </div>
                    <div class="pt-2 text-[13px]">D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, <br>110053 India</div>
                </div>
                <div class="font-extrabold text-[13px] py-4 text-[#5E626F]">
                    <span>ⓒ 2023 Hyperhire</span>
                </div>
            </div>
        </q-page-container>
        <!-- <q-page-container>
            <router-view />
        </q-page-container> -->
    </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { useQuasar } from 'quasar'
import HomePage from 'src/pages/HomePage.vue'

const $q = useQuasar()

export default defineComponent({
  name: 'HomeLayout',

  components: {
    EssentialLink,
    HomePage
  },

  setup () {
    return {
      show: ref(true),
      slide: ref(1),
      cardItems: ref([
        {icon:'logo1.svg', desc:'해외 마케팅'},
        {icon:'logo2.svg', desc:'퍼블리셔'},
        {icon:'logo3.svg', desc:'캐드원(제도사)'},
        {icon:'logo4.svg', desc:'해외 세일즈'},
        {icon:'logo5.svg', desc:'해외 CS'}
        ]
      ),
      details: ref([
        {icon:'frame1.svg', desc: '해외 개발자 원격 채용'},
        {icon:'frame2.svg', desc: '외국인 원격 채용 (비개발)'},
        {icon:'frame3.svg', desc: '한국어 가능 외국인 채용'},
        {icon:'frame4.svg', desc: '해외 개발자 활용 서비스'},
      ]),
      currentIndex: ref(0),
      check1: ref(true),
      check2: ref(true),
      check3: ref(true),
      check4: ref(true),
    }
  },
  mounted() {
    this.show=true;
    this.startSlideShow();
    // Add delay before triggering fade-in effect
    this.$refs.title.classList.add('fade-in-up');
    setTimeout(() => {
        this.$refs.subtitle.classList.add('fade-in');

    }, 300);

  },
  methods:{
    onItemClick(){
        console.log('')
    },
    startSlideShow() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.cardItems.length;
      }, 5000); // Change slide every 5 seconds
    },
  }
})
</script>

<style>
/* CSS for fade-in animation */
.fade-in {
  animation: fadeInAnimation 1s ease forwards;
}
.fade-in-up {
  animation: fadeInUpAnimation 0.5s ease forwards;
  opacity: 0; /* Start with opacity 0 to hide initially */
  transform: translateY(20px); /* Start slightly below to animate upwards */
}

@keyframes fadeInAnimation {
  from {
    opacity: 0;
    transform: translateY(-20px); /* Optional: slide down effect */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeInUpAnimation {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.card__image {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 1px solid #ffffffc0;
  margin-top: 20px;
  box-shadow: 0 6px 18px rgba(235, 25, 110, 1);
}
/* .q-btn__content{
    color: #ffa800;
} */
.q-carousel__arrow .q-icon{
    color: #ffa800;
}
.q-carousel__navigation--buttons{
    display: none;
}
/*  */
.fade-div {
  flex: 0 0 auto;
  width: 20%;
  background-color: #FFFFFF33;
  border-radius: 0.5rem;
  /* 5 divs with equal width */
  /* animation: fadeInAnimation 5s ease forwards; */
  /* transition: opacity 500ms ease-in-out; */

}
.slider-content {
  display: flex;
  transition: transform 500ms ease-in-out;
  gap: 1rem;
}
.q-layout__section--marginal{
    background-color: #79b5f1;
}
.q-checkbox__svg{
    color: #2C599B;
}
</style>