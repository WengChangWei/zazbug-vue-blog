<template>
    <div>
        <!-- 导航栏 -->
        <nav>
            <div class="logo">
                <img src="../../assets/img/logo.png" alt="" />
            </div>
            <div class="mini-logo">
                <img src="../../assets/img/mini_logo.png" alt="" />
            </div>
            <ul>
                <li>
                    <a href="#1" v-on:click="updateNav('me')"><em>画师介绍</em></a>
                </li>

                <li v-for="item in navList" :key="item.index">
                    <a href="#" v-on:click="item.navSign = !item.navSign"
                        ><em>{{ item.name }}</em></a
                    >
                    <transition name="el-zoom-in-top" v-for="son in item.children" :key="son.index">
                        <a v-show="item.navSign" href="#2" v-on:click="updateNav('images',son.id)"
                            ><em>{{ son.name }}</em></a
                        >
                    </transition>
                </li>
            </ul>
        </nav>

        <!-- 详情 -->
        <div class="slides">
            <!-- 自我介绍 -->
            <div class="slide" id="1">
                <div class="content first-content">
                    <div class="container-fluid">
                        <transition name="el-zoom-in-center">
                            <div v-show="nav == 'me'">
                                <div class="col-md-3">
                                    <div class="author-image">
                                        <img v-if="user.headPic" :src="user.headPic" alt="" />
                                        <img v-else src="../../assets/img/author_image.png" alt="" />
                                    </div>
                                </div>
                                <div class="col-md-9">
                                    <h2>{{user.nickname}}</h2>
                                    <p>{{user.introduce}}</p>
                                    <p v-if="user.weibo"><i class="el-icon-s-promotion"></i> 微博: {{user.weibo}}</p>
                                    <p v-if="user.qq"><i class="el-icon-chat-line-round"></i> QQ:{{user.qq}}</p>
                                    <p v-if="user.email"><i class="el-icon-chat-line-square"></i> Email: {{user.email}}</p>
                                    <!-- <div class="main-btn">Read Images</div> -->
                                    <!-- <div class="fb-btn">GO INDEX</div> -->
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>

            <!-- 相册 -->
            <div class="slide" id="2">
                <div class="content fourth-content">
                    <div class="container-fluid">
                        <transition name="el-zoom-in-center">
                            <div class="row" v-show="nav == 'images'">
                                <div class="col-md-4 col-sm-6" v-for="item in imgList" :key="item.index">
                                    <div class="item">
                                        <div class="thumb">

                                            <div class="image">
                                                <!-- <img src="../../assets/img/first_item.jpg" /> -->
                                                <el-image
                                                    style="max-width: 100%; height: 300px"
                                                    fit="cover"
                                                    :src="item.url"
                                                    :preview-src-list="[item.url]"
                                                ></el-image>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- <div class="col-md-4 col-sm-6">
                                    <div class="item">
                                        <div class="thumb">
                                            <a href="../../assets/img/second_big_item.jpg" data-lightbox="image-1">
                                                <div class="hover-effect">
                                                    <div class="hover-content">
                                                        <h2>Number Two</h2>
                                                        <p>
                                                            Donec eget dictum tellus. Curabitur a interdum diam. Nulla vestibulum porttitor
                                                            porta.
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <div class="image">
                                                <img src="../../assets/img/second_item.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                            </div>
                        </transition>
                    </div>
                </div>
            </div>

            <!-- 联系我 -->
            <div class="slide" id="3">
                <div class="content fifth-content">
                    <div class="container-fluid">
                        <transition name="el-zoom-in-center">
                            <div v-show="nav == 'call'">
                                <div class="col-md-6">
                                    <div id="map">
                                        <iframe
                                            src=""
                                            width="100%"
                                            height="500px"
                                            frameborder="0"
                                            style="border: 0"
                                            allowfullscreen
                                        ></iframe>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <form id="contact" action="" method="post">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <fieldset>
                                                    <input
                                                        name="name"
                                                        type="text"
                                                        class="form-control"
                                                        id="name"
                                                        placeholder="Your name..."
                                                        required=""
                                                    />
                                                </fieldset>
                                            </div>
                                            <div class="col-md-12">
                                                <fieldset>
                                                    <input
                                                        name="email"
                                                        type="email"
                                                        class="form-control"
                                                        id="email"
                                                        placeholder="Your email..."
                                                        required=""
                                                    />
                                                </fieldset>
                                            </div>
                                            <div class="col-md-12">
                                                <fieldset>
                                                    <input
                                                        name="subject"
                                                        type="text"
                                                        class="form-control"
                                                        id="subject"
                                                        placeholder="Subject..."
                                                        required=""
                                                    />
                                                </fieldset>
                                            </div>
                                            <div class="col-md-12">
                                                <fieldset>
                                                    <textarea
                                                        name="message"
                                                        rows="6"
                                                        class="form-control"
                                                        id="message"
                                                        placeholder="Your message..."
                                                        required=""
                                                    ></textarea>
                                                </fieldset>
                                            </div>
                                            <div class="col-md-12">
                                                <fieldset>
                                                    <button type="submit" id="form-submit" class="btn">Send Now</button>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div class="footer">
	  <div class="content">
		  <p>Copyright &copy; 2018.Company name All rights reserved.<a target="_blank" href="http://www.sucaihuo.com/">网站模板</a></p>
	  </div>
	</div> -->
    </div>
</template>

<script>
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/templatemo-main.css';
import { getUserInfo, getCateList, getImagesList } from '@/api/index';
export default {
    name: 'dashboard',
    data() {
        return {
            user: [],
            page: 1,
            size: 20,
            nav: 'me',
            navList: [],
            imgList: [
                // 'https://ak.hypergryph.com/upload/images/20190228/118078295785f64dac736c6ade50bb76.jpg',
                // 'https://ak.hypergryph.com/upload/images/20190228/5ab924ca70fdd333874412454cf79a93.jpg',
                // 'https://ak.hypergryph.com/upload/images/20190228/b7c130198e0e97f03aa9b3fa7f153d5e.jpg',
                // 'https://ak.hypergryph.com/upload/images/20190228/b18b912d69fa0b3d571054c8f5fda5cf.jpg',
                // 'https://ak.hypergryph.com/upload/images/20190228/2429173247490fcf217ca6f0a95ab00d.png',
                // 'https://ak.hypergryph.com/upload/images/20190228/118078295785f64dac736c6ade50bb76.jpg',
                // 'https://ak.hypergryph.com/upload/images/20190228/5ab924ca70fdd333874412454cf79a93.jpg',
                // 'https://ak.hypergryph.com/upload/images/20190228/b7c130198e0e97f03aa9b3fa7f153d5e.jpg',
                // 'https://ak.hypergryph.com/upload/images/20190228/b18b912d69fa0b3d571054c8f5fda5cf.jpg',
                // 'https://ak.hypergryph.com/upload/images/20190228/2429173247490fcf217ca6f0a95ab00d.png',
                // 'https://ak.hypergryph.com/upload/images/20190228/118078295785f64dac736c6ade50bb76.jpg',
                // 'https://ak.hypergryph.com/upload/images/20190228/5ab924ca70fdd333874412454cf79a93.jpg',
                // 'https://ak.hypergryph.com/upload/images/20190228/b7c130198e0e97f03aa9b3fa7f153d5e.jpg',
                // 'https://ak.hypergryph.com/upload/images/20190228/b18b912d69fa0b3d571054c8f5fda5cf.jpg',
                // 'https://ak.hypergryph.com/upload/images/20190228/2429173247490fcf217ca6f0a95ab00d.png',
                // 'https://ak.hypergryph.com/upload/images/20190228/118078295785f64dac736c6ade50bb76.jpg',
                // 'https://ak.hypergryph.com/upload/images/20190228/5ab924ca70fdd333874412454cf79a93.jpg',
                // 'https://ak.hypergryph.com/upload/images/20190228/b7c130198e0e97f03aa9b3fa7f153d5e.jpg',
                // 'https://ak.hypergryph.com/upload/images/20190228/b18b912d69fa0b3d571054c8f5fda5cf.jpg',
                // 'https://ak.hypergryph.com/upload/images/20190228/2429173247490fcf217ca6f0a95ab00d.png'
            ],
            navImageList: []
        };
    },
    created() {
        this.getData();
    },
    methods: {
        updateNav(navName,cateId = 0) {
            this.nav = navName;
            let list = this.navImageList;
            if(cateId != 0){
                // console.log(list[cateId])
                this.imgList = list[cateId]
            }
        },
        getData() {
            // 获取博主信息
            getUserInfo().then((res) => {
                if (res.data.flag) {
                    this.user = res.data.data;
                }
            });

            // 获取分类
            getCateList().then((res) => {
                if (res.data.flag) {
                    var list = res.data.data.list;
                    list.forEach((element) => {
                        element.navSign = false;
                    });
                    this.navList = list;
                    this.getNavImagesList();
                }
            });
        },
        getNavImagesList() {
            this.navList.forEach((element) => {
                element.children.forEach((el) => {
                    if(el.parentId > 0){
                        this.getImages(el.id, this.page, this.size);
                    }
                });
                // console.log(this.navImageList);
            });
        },
        // 获取图片
        getImages(cateId, page, size) {
            let params = {
                cateId: cateId,
                page: page,
                size: size
            };
            let array = [];
            getImagesList(params).then((res) => {
                if (res.data.flag) {
                    array = res.data.data.list;
                    this.navImageList[cateId] = array;
                }
            });
        }
    }
};
</script>

<style>
.slides .slide {
    background-image: url(../../assets/img/bg.jpg);
}
.slides .slide img {
    width: 100%;
}
</style>