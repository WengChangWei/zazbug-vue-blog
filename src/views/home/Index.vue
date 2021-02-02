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
                    <a href="#1" v-on:click="updateNav('index')"><i class="fa fa-image"></i> <em>主页</em></a>
                </li>

                <li>
                    <a href="#2" v-on:click="updateNav('images')"><i class="fa fa-image"></i> <em>相册</em></a>
                </li>

                <li>
                    <a href="#3" v-on:click="updateNav('me')"><i class="fa fa-home"></i> <em>画师介绍</em></a>
                </li>

                <li>
                    <a href="#4" v-on:click="updateNav('call')"><i class="fa fa-envelope"></i> <em>联系我</em></a>
                </li>
            </ul>
        </nav>

        <!-- 详情 -->
        <div class="slides">
            <!-- 首页 -->
            <div class="slide" id="1">

            </div>

            <!-- 相册 -->
            
                <div class="slide" id="2">
                    <div class="content fourth-content">
                        <div class="container-fluid">
                            <transition name="el-zoom-in-center">
                                <div class="row" v-show="nav == 'images'">

                                    <div class="col-md-4 col-sm-6">
                                        <div class="item">
                                            <div class="thumb">
                                                <a href="#" data-lightbox="image-1">
                                                    <div class="hover-effect">
                                                        <div class="hover-content">
                                                            <h2>Number One</h2>
                                                            <p>Quisque sit amet lacus in diam pretium faucibus. Cras vel justo lorem.</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div class="image">
                                                    <img src="../../assets/img/first_item.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-4 col-sm-6">
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
                                    </div>
                                    <div class="col-md-4 col-sm-6">
                                        <div class="item">
                                            <div class="thumb">
                                                <a href="../../assets/img/third_big_item.jpg" data-lightbox="image-1">
                                                    <div class="hover-effect">
                                                        <div class="hover-content">
                                                            <h2>Number Three</h2>
                                                            <p>Cras varius dolor et augue fringilla, eu commodo sapien iaculis.</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div class="image">
                                                    <img src="../../assets/img/third_item.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-6">
                                        <div class="item">
                                            <div class="thumb">
                                                <a href="../../assets/img/fourth_big_item.jpg" data-lightbox="image-1">
                                                    <div class="hover-effect">
                                                        <div class="hover-content">
                                                            <h2>Number Four</h2>
                                                            <p>Vestibulum augue ex, finibus sit amet nisi id, maximus ultrices ipsum.</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div class="image">
                                                    <img src="../../assets/img/fourth_item.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-6">
                                        <div class="item">
                                            <div class="thumb">
                                                <a href="../../assets/img/fifth_big_item.jpg" data-lightbox="image-1">
                                                    <div class="hover-effect">
                                                        <div class="hover-content">
                                                            <h2>Fifth Item</h2>
                                                            <p>Donec commodo, ex nec rutrum venenatis, nisi nisl malesuada magna.</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div class="image">
                                                    <img src="../../assets/img/fifth_item.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-6">
                                        <div class="item">
                                            <div class="thumb">
                                                <a href="../../assets/img/sixth_big_item.jpg" data-lightbox="image-1">
                                                    <div class="hover-effect">
                                                        <div class="hover-content">
                                                            <h2>Sixth Item</h2>
                                                            <p>Maecenas dapibus neque sed nisl consectetur, id semper nisi egestas.</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div class="image">
                                                    <img src="../../assets/img/sixth_item.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-6">
                                        <div class="item">
                                            <div class="thumb">
                                                <a href="../../assets/img/seventh_big_item.jpg" data-lightbox="image-1">
                                                    <div class="hover-effect">
                                                        <div class="hover-content">
                                                            <h2>Number Seven</h2>
                                                            <p>Etiam aliquet, est id varius fringilla, eros libero pellentesque lectus.</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div class="image">
                                                    <img src="../../assets/img/seventh_item.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-6">
                                        <div class="item">
                                            <div class="thumb">
                                                <a href="../../assets/img/eight_big_item.jpg" data-lightbox="image-1">
                                                    <div class="hover-effect">
                                                        <div class="hover-content">
                                                            <h2>Number Eight</h2>
                                                            <p>Vestibulum augue ex, finibus sit amet nisi id, maximus ultrices ipsum.</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div class="image">
                                                    <img src="../../assets/img/eight_item.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-6">
                                        <div class="item">
                                            <div class="thumb">
                                                <a href="../../assets/img/ninth_big_item.jpg" data-lightbox="image-1">
                                                    <div class="hover-effect">
                                                        <div class="hover-content">
                                                            <h2>Number Nine</h2>
                                                            <p>Orci varius natoque penatibus et magnis dis parturient montes.</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div class="image">
                                                    <img src="../../assets/img/ninth_item.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-6">
                                        <div class="item">
                                            <div class="thumb">
                                                <a href="../../assets/img/fifth_big_item.jpg" data-lightbox="image-1">
                                                    <div class="hover-effect">
                                                        <div class="hover-content">
                                                            <h2>Number Ten</h2>
                                                            <p>Vestibulum augue ex, finibus sit amet nisi id, maximus ultrices ipsum.</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div class="image">
                                                    <img src="../../assets/img/fifth_item.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-6">
                                        <div class="item">
                                            <div class="thumb">
                                                <a href="../../assets/img/first_big_item.jpg" data-lightbox="image-1">
                                                    <div class="hover-effect">
                                                        <div class="hover-content">
                                                            <h2>Eleventh Item</h2>
                                                            <p>Cras varius dolor et augue fringilla, eu commodo sapien iaculis.</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div class="image">
                                                    <img src="../../assets/img/first_item.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-6">
                                        <div class="item">
                                            <div class="thumb">
                                                <a href="../../assets/img/second_big_item.jpg" data-lightbox="image-1">
                                                    <div class="hover-effect">
                                                        <div class="hover-content">
                                                            <h2>Twelvth Item</h2>
                                                            <p>Etiam tincidunt magna ex, sit amet lobortis felis bibendum id.</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div class="image">
                                                    <img src="../../assets/img/second_item.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </transition>
                        </div>
                    </div>
                </div>
            


            <!-- 自我介绍 -->
            <div class="slide" id="3">
                <div class="content first-content">
                    <div class="container-fluid">

                        <transition name="el-zoom-in-center">
                            <div v-show="nav == 'me'">
                                <div class="col-md-3">
                                    <div class="author-image"><img src="../../assets/img/author_image.png" alt="" /></div>
                                </div>
                                <div class="col-md-9">
                                    <h2>ZAZ</h2>
                                    <p>
                                        一只胖胖的老母猪
                                    </p>
                                    <div class="main-btn"><a href="#2">Read Images</a></div>
                                    <div class="fb-btn"><a href="#4">GO INDEX</a></div>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>

            <!-- 联系我 -->
            <div class="slide" id="4">
                <div class="content fifth-content">
                    <div class="container-fluid">
                        <transition name="el-zoom-in-center">
                            <div v-show="nav == 'call'">
                                <div class="col-md-6">
                                    <div id="map">
                                        <iframe src="" width="100%" height="500px" frameborder="0" style="border: 0" allowfullscreen></iframe>
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
export default {
    name: 'dashboard',
    data() {
        return {
            user: [],
            nav: 'me'
        };
    },
    created() {},
    methods: {
        updateNav(navName) {
            this.nav = navName
            console.log(this.nav)
        }
    }
};
</script>

<style>
.slides .slide {
    background-image: url(../../assets/img/bg.jpg);
}
/* .slides .slide:nth-child(1) {
    background-image: url(../../assets/img/first_bg.jpg);
}
.slides .slide:nth-child(2) {
    background-image: url(../../assets/img/second_bg.jpg);
}
.slides .slide:nth-child(3) {
    background-image: url(../../assets/img/third_bg.jpg);
}
.slides .slide:nth-child(4) {
    background-image: url(../../assets/img/fourth_bg.jpg);
}
.slides .slide:nth-child(5) {
    background-image: url(../../assets/img/fifth_bg.jpg);
} */
.slides .slide img {
    width: 100%;
}
</style>