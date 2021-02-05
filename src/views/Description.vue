<template>
  <div class="descr-wrapper">
    <div class="contacts-lib">
      <div class="contacts-item">
        <router-link to="/">
        <img src="@/assets/images/house.png" alt="">
        На главную</router-link> 
      </div>
      <div class="contacts-item" v-if="showPhone">
        <a :href="phone">
          <img src="@/assets/images/phone.png" alt=""> {{ showPhone }}
        </a>
      </div>
      <div class="contacts-item" v-if="showEmail">
        <a :href="email">
          <img src="@/assets/images/email.png" alt=""> {{ showEmail }}
        </a>
      </div>
      <div class="contacts-item" v-if="siteURL">
        <a :href="siteURL" target="_blank">
          <img src="@/assets/images/website.png" alt=""> {{ siteURL }}
        </a>
      </div>
    </div>
    <div class="descr-text" v-html="descrItem ? descrItem.description : ''"></div>
    <div class="descr-gallery" v-if="descrItem && descrItem.gallery">
      <div class="descr-gallery-item" 
        v-for="item in descrItem.gallery"
        :key="item.title">
        <img :src="item.url" alt="Библиотека">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Description',
  computed: {
    ...mapState([
        'descrItem',
    ]),
    siteURL() {
      return this.descrItem ? this.descrItem.contacts.website : '';
    },
    phone() {
      return (this.descrItem && this.descrItem.contacts.phones.length) ?
       'tel:+' + this.descrItem.contacts.phones[0].value : '';
    },
    email() {
      return this.descrItem ? 'mailto:' + this.descrItem.contacts.email : '';
    },
    showPhone() {
      return (this.descrItem && this.descrItem.contacts.phones.length) ?
       '+' + this.descrItem.contacts.phones[0].value : '';
    },
    showEmail() {
      return this.descrItem ? this.descrItem.contacts.email : '';
    },
  },
}
</script>

<style scoped>
  .descr-wrapper {
    position: relative;
    display: flex;
    flex-flow: column;
    overflow-y: auto;
    flex: 1;
  }
  .contacts-lib {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 10px;
    padding: 10px;
  }
  .contacts-item {
    margin: 10px;
  }
  .contacts-item img {
    margin-right: 5px;
  }
  .contacts-item a:hover {
    color: darkred;
  }
  .contacts-item a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: darkcyan;
  }
  .descr-text {
    position: relative;
    padding: 10px;
    color: slategrey;
  }
  .descr-gallery {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
  }
  .descr-gallery-item {
    width: 310px;
    height: 200px;
    margin: 10px;
  }
  .descr-gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 680px) {
    .descr-gallery {
      flex-direction: column;
      align-items: center;;
    }
  }
  @media screen and (max-width: 320px) {
    .descr-gallery-item {
      margin: 10px 0;
    }
  }
</style>
