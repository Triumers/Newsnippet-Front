<template>
  <div>
    <Header :isLoggedIn="true"></Header>
    <div class="edit-my-password">
      <h2>비밀번호 변경</h2>
      <div class="form-group">
        <label for="oldPassword">이전 비밀번호</label>
        <div class="input-wrapper">
          <input type="password" id="oldPassword" v-model="oldPassword"style="display: inline-block; width: 81%;" class="form-password"/>
        </div>
      </div>
      <div class="form-group">
        <label for="newPassword">새 비밀번호</label>
        <div class="input-wrapper">
          <input type="password" id="newPassword" v-model="newPassword" style="display: inline-block; width: 81%;" class="form-password"/>
          <span v-if="isPasswordValid" class="valid-icon">✓</span>
          <span v-else class="invalid-icon">X</span>
        </div>
        <div class="description">
          8-12자, 숫자, 대문자, 소문자 각각 1개 이상 포함(이외 문자 불가)
          </div>
      </div>
      
      <div class="form-group">
        <label for="password">새 비밀번호 확인</label>
        <div class="input-wrapper">
          <input type="password" id="checkNewPassword" v-model="checkNewPassword" style="display: inline-block; width: 81%;" class="form-password"/>
          <span v-if="isPasswordMached" class="valid-icon">✓</span>
          <span v-else class="invalid-icon">X</span>
        </div>
      </div>
      <button @click="updatePassword" :disabled="!isFormValid">변경</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Header from '@/views/Header.vue';
import axios from 'axios';

const router = useRouter();
const oldPassword = ref('');
const newPassword = ref('');
const checkNewPassword = ref('');

// 로그인 검증
async function fetchUserData() {
  try {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = token;
      await axios.get('http://localhost:30001/user/my-page');
    } else {
      // 토큰이 없을 경우 로그아웃 처리
      handleLogout();
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    // 에러 발생 시 로그아웃 처리
    handleLogout();
  }
}

const handleLogout = () => {
  localStorage.removeItem('token');
  router.push('/login');
};

const isPasswordValid = computed(() => {
  return checkPasswordValidity(newPassword.value);
});

const isPasswordMached = computed(() => {
  return machedPassword(newPassword.value, checkNewPassword.value);
});

const isFormValid = computed(() => {
  return isPasswordValid.value && isPasswordMached.value;
});

async function updatePassword() {
  if (isFormValid.value) {
    try {
      const requestData = {
        oldPassword: oldPassword.value,
        newPassword: newPassword.value
      };
      
      const response = await fetch('http://localhost:30001/auth/modify/password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify(requestData)
      });
      // 회원 정보 업데이트 성공
      const responseData = await response.json();
      alert(responseData.message);
      router.push('/my-page');
      
    } catch (error) {
      console.error('Error updating user information:', error);
      alert(error.message);
    }
  } else {
    alert('입력한 정보를 다시 확인해 주세요.');
  }
}

// 비밀번호 유효성 검사 함수
function checkPasswordValidity(password) {
  const pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,12}$/;
  return pattern.test(password) && password !== '';
}

function machedPassword(password, check) {
  return password === check && checkPasswordValidity(check);
}

onMounted(() => {
  fetchUserData();
});
</script>

<style scoped>
.edit-my-password {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

.input-wrapper {
  display: flex;
  align-items: center;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.valid-icon,
.invalid-icon {
  margin-left: 5px;
  width: 15%;
  display: inline-block;
}

.valid-icon {
  color: green;
}

.invalid-icon {
  color: red;
}

button {
  padding: 10px 20px;
  background-color: #393B63;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #727896;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
.description {
  color: #666;
  font-size: 12px;
  margin-top: 5px;
}

.form-group input::placeholder {
    color: #666; /* placeholder 색상 설정 */
    font-family: 'ONE-Mobile-Title', sans-serif;
    font-weight: normal;
    font-style: normal;
  }

  .form-password input::placeholder {
    color: #666;
    font-family: 'ONE-Mobile-Title', sans-serif;
  }

  .form-password {
    width: 100%;
    margin-bottom: 1px;
    font-family: "Roboto", sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    font-weight: 1000;
    font-style: normal;
  }
</style>