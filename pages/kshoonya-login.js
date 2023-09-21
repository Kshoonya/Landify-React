import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

const KshoonyaLogin = (props) => {
  return (
    <>
      <div className="kshoonya-login-container">
        <Head>
          <title>kshoonya-login - Kshoonya Inc</title>
          <meta
            name="description"
            content="Kshoonya is an innovative technology company, specializes in developing products that focus on the independence and quality of life of those with disabilities."
          />
          <meta property="og:title" content="kshoonya-login - Kshoonya Inc" />
          <meta
            property="og:description"
            content="Kshoonya is revolutionizing the field of artificial intelligence. By utilizing cutting-edge technology and innovative designs."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/2a3336f1-8248-49e6-89b7-0c16b08d546c/f9893b75-1135-4e18-a915-19ab4a0be01b?org_if_sml=1"
          />
        </Head>
        <div data-role="Header" className="kshoonya-login-header-container">
          <header className="kshoonya-login-header">
            <Link href="/">
              <a className="kshoonya-login-link">
                <img
                  alt="image"
                  src="/new_design_full%203-400w.png"
                  className="kshoonya-login-image"
                />
              </a>
            </Link>
            <div className="kshoonya-login-logo"></div>
            <div className="kshoonya-login-menu">
              <Link href="/about-us">
                <a className="kshoonya-login-link01">About us</a>
              </Link>
              <span className="kshoonya-login-text">Journey So far</span>
              <Link href="/jobs">
                <a className="kshoonya-login-link02">Jobs</a>
              </Link>
              <span className="kshoonya-login-text01">MyKshoonya</span>
              <svg viewBox="0 0 1024 1024" className="kshoonya-login-icon list">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
          </header>
          <div data-role="MobileMenu" className="kshoonya-login-mobile-menu">
            <div className="kshoonya-login-top">
              <div className="kshoonya-login-logo1">
                <img
                  alt="image"
                  src="/logotype-dark.svg"
                  className="kshoonya-login-image1"
                />
              </div>
              <div
                data-role="CloseMobileMenu"
                className="kshoonya-login-close-menu"
              >
                <svg viewBox="0 0 1024 1024" className="kshoonya-login-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="kshoonya-login-mid">
              <span className="kshoonya-login-text02">About</span>
              <span className="kshoonya-login-text03">Products</span>
              <span className="kshoonya-login-text04">Pricing</span>
              <span className="kshoonya-login-text05">Blog</span>
              <span className="kshoonya-login-text06">Jobs</span>
              <span className="kshoonya-login-text07">More</span>
            </div>
            <div className="kshoonya-login-bot">
              <div className="kshoonya-login-container01">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="kshoonya-login-link03"
                >
                  <div className="kshoonya-login-container02">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="kshoonya-login-icon04"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="kshoonya-login-link04"
                >
                  <div className="kshoonya-login-container03">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="kshoonya-login-icon06"
                    >
                      <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="kshoonya-login-link05"
                >
                  <div className="kshoonya-login-container04">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="kshoonya-login-icon08"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="kshoonya-login-link06"
                >
                  <div className="kshoonya-login-container05">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="kshoonya-login-icon10"
                    >
                      <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="kshoonya-login-main">
          <div className="kshoonya-login-blur-background">
            <div className="kshoonya-login-div">
              <Script html={``}></Script>
            </div>
            <form className="kshoonya-login-form"></form>
          </div>
          <div className="kshoonya-login-hero">
            <h1 className="kshoonya-login-text08">Access Kshoonya World</h1>
            <img
              alt="An image where a girl rejoicing the journey"
              src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGxvZ2lufGVufDB8fHx8MTY5NTI2NjY2MHww&amp;ixlib=rb-4.0.3&amp;h=1500"
              loading="lazy"
              className="kshoonya-login-image2"
            />
          </div>
          <img
            alt="image"
            src="/turquoise-circle.svg"
            className="kshoonya-login-turquoise-cirble"
          />
        </div>
        <div className="kshoonya-login-container06">
          <div className="kshoonya-login-container07"></div>
        </div>
        <div className="kshoonya-login-hero1"></div>
        <div className="kshoonya-login-cta">
          <div className="kshoonya-login-container08">
            <div className="kshoonya-login-container09">
              <img
                alt="image"
                src="/Pictures/Extras/dall%C2%B7e%202023-04-05%2022.21.59%20-%20a%20%20man%20walking%20and%20wearing%20smart%20shoes%20and%20connected%20to%20an%20mobile%20app-300w.png"
                loading="lazy"
                image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
                className="kshoonya-login-image3"
              />
              <img
                alt="image"
                src="/Pictures/Extras/dall%C2%B7e%202023-04-05%2022.23.36%20-%20a%20%20man%20walking%20and%20wearing%20smart%20shoes%20and%20connected%20to%20a%20mobile%20app%2C%20and%20helps%20to%20reach%20destination-300h.png"
                className="kshoonya-login-image4"
              />
            </div>
            <div className="kshoonya-login-container10">
              <img
                alt="image"
                src="/Pictures/First/_3a1e396a-8fc7-404a-8251-91dc346d23e4-1200w.jpeg"
                loading="lazy"
                image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
                className="kshoonya-login-image5"
              />
              <img
                alt="image"
                src="/Pictures/Extras/_12f666b0-d77f-4988-a2d4-86fdca45e463-300w.jpeg"
                loading="lazy"
                image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
                className="kshoonya-login-image6"
              />
            </div>
          </div>
        </div>
        <div className="kshoonya-login-footer">
          <footer className="kshoonya-login-container11">
            <Link href="/">
              <a className="kshoonya-login-link07">
                <img
                  alt="image"
                  src="/new_design_full%203-400w.png"
                  loading="lazy"
                  className="kshoonya-login-image7"
                />
              </a>
            </Link>
            <div className="kshoonya-login-container12">
              <div className="kshoonya-login-container13">
                <Link href="/jobs">
                  <a className="kshoonya-login-link08">Careers</a>
                </Link>
                <Link href="/about-us">
                  <a className="kshoonya-login-link09">About us</a>
                </Link>
                <Link href="/journey-so-far">
                  <a className="kshoonya-login-link10">Journey</a>
                </Link>
                <Link href="/privacy-policy">
                  <a className="kshoonya-login-link11">Privacy Policy</a>
                </Link>
              </div>
            </div>
            <div className="kshoonya-login-divider"></div>
            <div className="kshoonya-login-container14">
              <span className="kshoonya-login-text09 Body2">
                © 2023 Kshoonya Inc. All rights reserved
              </span>
              <div className="kshoonya-login-container15">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="kshoonya-login-link12"
                >
                  <div className="kshoonya-login-container16">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="kshoonya-login-icon12"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="kshoonya-login-link13"
                >
                  <div className="kshoonya-login-container17">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="kshoonya-login-icon14"
                    >
                      <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="kshoonya-login-link14"
                >
                  <div className="kshoonya-login-container18">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="kshoonya-login-icon16"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="kshoonya-login-link15"
                >
                  <div className="kshoonya-login-container19">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="kshoonya-login-icon18"
                    >
                      <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .kshoonya-login-container {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .kshoonya-login-header-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .kshoonya-login-header {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            position: relative;
            max-width: 1110px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .kshoonya-login-link {
            display: contents;
          }
          .kshoonya-login-image {
            top: -46px;
            left: -19px;
            width: 363px;
            height: 211px;
            position: absolute;
            object-fit: cover;
            text-decoration: none;
          }
          .kshoonya-login-logo {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .kshoonya-login-menu {
            left: 420px;
            bottom: -27px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: row;
          }
          .kshoonya-login-link01 {
            transition: 0.3s;
            font-weight: bold;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .kshoonya-login-link01:hover {
            color: var(--dl-color-turquoise-default);
          }
          .kshoonya-login-text {
            transition: 0.3s;
            font-weight: bold;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .kshoonya-login-text:hover {
            color: var(--dl-color-turquoise-default);
          }
          .kshoonya-login-link02 {
            transition: 0.3s;
            font-weight: bold;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .kshoonya-login-link02:hover {
            color: var(--dl-color-turquoise-default);
          }
          .kshoonya-login-text01 {
            transition: 0.3s;
            font-weight: bold;
            text-decoration: none;
          }
          .kshoonya-login-text01:hover {
            color: var(--dl-color-turquoise-default);
          }
          .kshoonya-login-icon {
            width: 24px;
            height: 24px;
            text-decoration: none;
          }
          .kshoonya-login-mobile-menu {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-doubleunit);
            z-index: 101;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .kshoonya-login-top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: space-between;
          }
          .kshoonya-login-logo1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .kshoonya-login-image1 {
            width: 100px;
            object-fit: cover;
          }
          .kshoonya-login-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .kshoonya-login-icon02 {
            width: 24px;
            height: 24px;
          }
          .kshoonya-login-mid {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .kshoonya-login-text02 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .kshoonya-login-text02:hover {
            color: var(--dl-color-turquoise-default);
          }
          .kshoonya-login-text03 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .kshoonya-login-text03:hover {
            color: var(--dl-color-turquoise-default);
          }
          .kshoonya-login-text04 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .kshoonya-login-text04:hover {
            color: var(--dl-color-turquoise-default);
          }
          .kshoonya-login-text05 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .kshoonya-login-text05:hover {
            color: var(--dl-color-turquoise-default);
          }
          .kshoonya-login-text06 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .kshoonya-login-text06:hover {
            color: var(--dl-color-turquoise-default);
          }
          .kshoonya-login-text07 {
            transition: 0.3s;
          }
          .kshoonya-login-text07:hover {
            color: var(--dl-color-turquoise-default);
          }
          .kshoonya-login-bot {
            flex: 0 0 auto;
            display: flex;
            margin-top: auto;
            align-items: flex-start;
            flex-direction: column;
          }
          .kshoonya-login-container01 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .kshoonya-login-link03 {
            display: contents;
          }
          .kshoonya-login-container02 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .kshoonya-login-icon04 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .kshoonya-login-icon04:hover {
            fill: var(--dl-color-purple-default);
          }
          .kshoonya-login-link04 {
            display: contents;
          }
          .kshoonya-login-container03 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .kshoonya-login-icon06 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .kshoonya-login-icon06:hover {
            fill: var(--dl-color-pink-default);
          }
          .kshoonya-login-link05 {
            display: contents;
          }
          .kshoonya-login-container04 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .kshoonya-login-icon08 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .kshoonya-login-icon08:hover {
            fill: var(--dl-color-turquoise-default);
          }
          .kshoonya-login-link06 {
            display: contents;
          }
          .kshoonya-login-container05 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .kshoonya-login-icon10 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .kshoonya-login-icon10:hover {
            fill: var(--dl-color-orange-default);
          }
          .kshoonya-login-main {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .kshoonya-login-blur-background {
            top: 0px;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: auto;
            filter: blur(60px);
            height: 70vh;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
            background-color: #f2f2f2;
          }
          .kshoonya-login-div {
            display: contents;
          }
          .kshoonya-login-form {
            width: 200px;
            height: 100px;
            display: flex;
          }
          .kshoonya-login-hero {
            flex: 0 0 auto;
            width: 100%;
            height: 80vh;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            max-width: 1110px;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }

          .kshoonya-login-text08 {
            font-size: 72px;
            align-self: center;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .kshoonya-login-image2 {
            width: 465px;
            opacity: 0.8;
            object-fit: cover;
          }
          .kshoonya-login-turquoise-cirble {
            top: 439px;
            left: auto;
            right: 430px;
            width: 170px;
            bottom: auto;
            filter: blur(60px);
            opacity: 0.6;
            position: absolute;
            object-fit: cover;
          }
          .kshoonya-login-container06 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .kshoonya-login-container07 {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .kshoonya-login-hero1 {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            padding: var(--dl-space-space-threeunits);
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
            background-color: #f7f1f1;
          }
          .kshoonya-login-cta {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #692e4a;
          }
          .kshoonya-login-container08 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            flex-wrap: wrap;
            max-width: 1110px;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .kshoonya-login-container09 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .kshoonya-login-image3 {
            width: 232px;
            opacity: 0.8;
            object-fit: cover;
          }
          .kshoonya-login-image4 {
            width: 286px;
            height: 237px;
            opacity: 0.8;
            object-fit: cover;
            padding-right: 30px;
            padding-bottom: 19px;
          }
          .kshoonya-login-container10 {
            width: 520px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .kshoonya-login-image5 {
            top: -100px;
            left: auto;
            right: var(--dl-space-space-doubleunit);
            width: 232px;
            bottom: auto;
            opacity: 0.8;
            position: absolute;
            object-fit: cover;
          }
          .kshoonya-login-image6 {
            top: auto;
            left: var(--dl-space-space-doubleunit);
            right: auto;
            width: 232px;
            bottom: -100px;
            opacity: 0.8;
            position: absolute;
            object-fit: cover;
          }
          .kshoonya-login-footer {
            flex: 0 0 auto;
            color: var(--dl-color-gray-white);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .kshoonya-login-container11 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            flex-wrap: wrap;
            max-width: 1110px;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .kshoonya-login-link07 {
            display: contents;
          }
          .kshoonya-login-image7 {
            width: 194px;
            height: 72px;
            object-fit: cover;
            text-decoration: none;
          }
          .kshoonya-login-container12 {
            flex: 0 0 auto;
            width: auto;
            height: 72px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .kshoonya-login-container13 {
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .kshoonya-login-link08 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .kshoonya-login-link08:hover {
            color: var(--dl-color-turquoise-default);
          }
          .kshoonya-login-link09 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .kshoonya-login-link09:hover {
            color: var(--dl-color-turquoise-default);
          }
          .kshoonya-login-link10 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .kshoonya-login-link10:hover {
            color: var(--dl-color-turquoise-default);
          }
          .kshoonya-login-link11 {
            transition: 0.3s;
            white-space: nowrap;
            text-decoration: none;
          }
          .kshoonya-login-link11:hover {
            color: var(--dl-color-turquoise-default);
          }
          .kshoonya-login-divider {
            width: 100%;
            height: 1px;
            opacity: 0.2;
            background-color: var(--dl-color-gray-white);
          }
          .kshoonya-login-container14 {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .kshoonya-login-text09 {
            color: var(--dl-color-gray-300);
            margin-top: var(--dl-space-space-unit);
          }
          .kshoonya-login-container15 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .kshoonya-login-link12 {
            display: contents;
          }
          .kshoonya-login-container16 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .kshoonya-login-icon12 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .kshoonya-login-icon12:hover {
            fill: var(--dl-color-purple-default);
          }
          .kshoonya-login-link13 {
            display: contents;
          }
          .kshoonya-login-container17 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .kshoonya-login-icon14 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .kshoonya-login-icon14:hover {
            fill: var(--dl-color-pink-default);
          }
          .kshoonya-login-link14 {
            display: contents;
          }
          .kshoonya-login-container18 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .kshoonya-login-icon16 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .kshoonya-login-icon16:hover {
            fill: var(--dl-color-turquoise-default);
          }
          .kshoonya-login-link15 {
            display: contents;
          }
          .kshoonya-login-container19 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .kshoonya-login-icon18 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .kshoonya-login-icon18:hover {
            fill: var(--dl-color-orange-default);
          }
          @media (max-width: 1600px) {
            .kshoonya-login-container {
              background-color: #f7f1f1;
            }
            .kshoonya-login-image {
              top: -50px;
              left: -24px;
              width: 355px;
              height: 211px;
            }
            .kshoonya-login-main {
              background-color: #ffecec;
            }
            .kshoonya-login-blur-background {
              background-color: #ffecec;
            }
            .kshoonya-login-hero1 {
              background-color: #f7f1f1;
            }
          }
          @media (max-width: 1200px) {
            .kshoonya-login-text01 {
              font-weight: bold;
              text-decoration: none;
            }
            .kshoonya-login-form {
              width: 606px;
            }
            .kshoonya-login-hero {
              top: 0px;
              left: 45px;
              width: 1114px;
              height: 520px;
              position: absolute;
            }
            .kshoonya-login-text08 {
              top: 32px;
              left: 137px;
              position: absolute;
              font-size: 72px;
            }
            .kshoonya-login-image2 {
              top: 156px;
              left: 320px;
              position: absolute;
            }
            .kshoonya-login-hero1 {
              height: 547px;
            }
          }
          @media (max-width: 991px) {
            .kshoonya-login-image {
              top: -49px;
              left: 23px;
            }
            .kshoonya-login-hero {
              height: auto;
              flex-direction: column;
            }
            .kshoonya-login-text08 {
              text-align: center;
            }
            .kshoonya-login-hero1 {
              flex-direction: column;
            }
            .kshoonya-login-container10 {
              display: none;
            }
            .kshoonya-login-link09 {
              text-decoration: none;
            }
            .kshoonya-login-link10 {
              text-decoration: none;
            }
          }
          @media (max-width: 767px) {
            .kshoonya-login-image {
              top: -49px;
              left: 181px;
            }
            .kshoonya-login-menu {
              display: none;
            }
            .kshoonya-login-text08 {
              font-size: 50px;
              align-self: center;
              text-align: center;
            }
            .kshoonya-login-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .kshoonya-login-container13 {
              flex-wrap: wrap;
              justify-content: center;
            }
            .kshoonya-login-container14 {
              flex-direction: column;
            }
            .kshoonya-login-text09 {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .kshoonya-login-image {
              top: -9px;
              left: 89px;
              width: 288px;
              height: 119px;
            }
            .kshoonya-login-bot {
              width: 100%;
            }
            .kshoonya-login-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .kshoonya-login-link09 {
              text-decoration: none;
            }
            .kshoonya-login-link10 {
              text-decoration: none;
            }
          }
        `}
      </style>
    </>
  )
}

export default KshoonyaLogin
