<template>
    <span id="nextDate"> 📰 {{ nextDate }}</span>
  
    <div v-if="$store.state.isLoading" class="loading-spinner">
      <div class="spinner"></div>
      <!-- 로딩 스피너 또는 로딩 표시 -->
    </div>
  
    <div v-if="selectedQuizList" class="crawlingQuiz-container">
      <template v-for="selectedQuiz in paginatedQuizList" :key="selectedQuiz.id">
        <div class="crawlingQuiz-item">
          <div class="clickDiv" data-bs-toggle="collapse" :data-bs-target="`#crawling${selectedQuiz.id}`"
            :aria-controls="`#crawling${selectedQuiz.id}`">
            <div id="news-category" :style="{ backgroundColor: getCategoryColor(selectedQuiz.category.id) }">
              {{ selectedQuiz.category.categoryName }}
            </div>
            <p id="questionSelected"> {{ selectedQuiz.content }} </p>
          </div>
        </div>
  
        <div class="collapse" :id="`crawling${selectedQuiz.id}`">
          <div>
            <p id="content">{{ selectedQuiz.content }}</p>
            <p> <span class="option" :class="{correct : selectedQuiz.answer == 'A'}">A</span> <span> {{selectedQuiz.optionA}} </span> </p>
            <p> <span class="option" :class="{correct : selectedQuiz.answer == 'B'}">B</span> <span> {{selectedQuiz.optionB}} </span> </p>
            <p> <span class="option" :class="{correct : selectedQuiz.answer == 'C'}">C</span> <span> {{selectedQuiz.optionC}} </span> </p>
            <p> <span class="option" :class="{correct : selectedQuiz.answer == 'D'}">D</span> <span> {{selectedQuiz.optionD}} </span> </p>
          </div>
          <hr>
          <div>
            <p> <span><a :href="`${selectedQuiz.newsLink}`">원본 링크</a></span> </p>
            <p>
              {{ selectedQuiz.explanation }}
            </p>
          </div>
        </div>
      </template>
  
      <div class="pagination">
        <button @click="previousPage" :disabled="currentPage === 1">이전</button>
        <span>{{ currentPage }} / {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">다음</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from "vue";
  import axios from 'axios';
  import { useStore } from 'vuex';
  
  const store = useStore();
  
  const nextDate = ref('');
  const selectedQuizList = ref(null);
  const currentPage = ref(1);
  const pageSize = 10; // 한 페이지에 표시할 문제 개수
  
  const paginatedQuizList = computed(() => {
    const startIndex = (currentPage.value - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return selectedQuizList.value ? selectedQuizList.value.slice(startIndex, endIndex) : [];
  });
  
  const totalPages = computed(() => {
    return selectedQuizList.value ? Math.ceil(selectedQuizList.value.length / pageSize) : 0;
  });
  
  onMounted(async () => {
    const getNextDate = () => {
      const today = new Date;
      const year = today.getFullYear();
      const month = ('0' + (today.getMonth() + 1)).slice(-2);
      const day = ('0' + (today.getDate() + 1)).slice(-2);
      return year + "-" + month + "-" + day;
    }
    nextDate.value = getNextDate();
    getSelectedQuizList();
  });
  
  async function getSelectedQuizList() {
    store.commit('setLoading', true);
    try {
      const token = localStorage.getItem('token');
      if (token) {
        axios.defaults.headers.common['Authorization'] = token;
        const response = await axios.get('http://localhost:30001/manage/findSelectedQuiz');
        selectedQuizList.value = response.data;
      } else {
        alert("잘못된 접근입니다.");
      }
    } catch (error) {
      alert("문제 불러오기에 실패했습니다.");
    } finally {
      store.commit('setLoading', false);
    }
  }
  
  function previousPage() {
    if (currentPage.value > 1) {
      currentPage.value--;
    }
  }
  
  function nextPage() {
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
    }
  }
  
  const categoryColors = [
    "#89A9D6", "#93AFD9", "#90ACD9", "#9FB0D4", "#A8B4CC",
    "#A6A6C6", "#A2AACD", "#A3A5CB", "#9EA2D2", "#A5A8CB",
    "#A3A0CD", "#A8B5CF", "#8EABD5", "#808080", "#C0C0C0"
  ];
  
  const getCategoryColor = (categoryId) => {
    return categoryColors[categoryId] || '#D9D9D9';
  };
  </script>
  
  <style scoped>
  @import url('@/styles/manage/QuizList.css');
  </style>