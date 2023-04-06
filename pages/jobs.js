import React from 'react'
import Head from 'next/head'

import FeatureCard from '../components/feature-card'

const Jobs = (props) => {
  return (
    <>
      <div className="jobs-container">
        <Head>
          <title>Jobs - Kshoonya Inc</title>
          <meta property="og:title" content="Jobs - Kshoonya Inc" />
        </Head>
        <div data-role="Header" className="jobs-header-container">
          <header className="jobs-header">
            <img
              alt="image"
              src="/playground_assets/new_design_full%203-300w.png"
              className="jobs-image"
            />
            <div className="jobs-logo"></div>
            <div className="jobs-menu">
              <span className="jobs-text">About us</span>
              <span className="jobs-text01">Journey So far</span>
              <span className="jobs-text02">Supporters</span>
              <span className="jobs-text03">Blog</span>
              <span className="jobs-text04">Jobs</span>
              <span className="jobs-text05">More</span>
              <svg viewBox="0 0 1024 1024" className="jobs-icon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="jobs-container01"></div>
            <div data-role="BurgerMenu" className="jobs-burger-menu">
              <svg viewBox="0 0 1024 1024" className="jobs-menu1">
                <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              </svg>
            </div>
          </header>
          <div data-role="MobileMenu" className="jobs-mobile-menu">
            <div className="jobs-top">
              <div className="jobs-logo1">
                <img
                  alt="image"
                  src="/playground_assets/logotype-dark.svg"
                  className="jobs-image1"
                />
              </div>
              <div data-role="CloseMobileMenu" className="jobs-close-menu">
                <svg viewBox="0 0 1024 1024" className="jobs-icon05">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="jobs-mid">
              <span className="jobs-text06">About</span>
              <span className="jobs-text07">Products</span>
              <span className="jobs-text08">Pricing</span>
              <span className="jobs-text09">Blog</span>
              <span className="jobs-text10">Jobs</span>
              <span className="jobs-text11">More</span>
            </div>
            <div className="jobs-bot">
              <div className="jobs-container02">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="jobs-link"
                >
                  <div className="jobs-container03">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="jobs-icon07"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="jobs-link1"
                >
                  <div className="jobs-container04">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="jobs-icon09"
                    >
                      <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="jobs-link2"
                >
                  <div className="jobs-container05">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="jobs-icon11"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="jobs-link3"
                >
                  <div className="jobs-container06">
                    <svg viewBox="0 0 1024 1024" className="jobs-icon13">
                      <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="jobs-main">
          <div className="jobs-blur-background"></div>
          <div className="jobs-hero"></div>
          <img
            alt="image"
            src="/playground_assets/turquoise-circle.svg"
            className="jobs-turquoise-cirble"
          />
          <img
            alt="image"
            src="/playground_assets/purple-circle.svg"
            className="jobs-purple-circle"
          />
          <img
            alt="image"
            src="/playground_assets/left.svg"
            className="jobs-left"
          />
          <img
            alt="image"
            src="/playground_assets/right.svg"
            className="jobs-right"
          />
        </div>
        <div className="jobs-features">
          <h2 className="jobs-text12">Introducing Kshoonya Technologies</h2>
          <span className="jobs-text13">Learn more about us</span>
          <div className="jobs-features1">
            <FeatureCard
              text="We build for customers."
              card_title="Robust Designs"
            ></FeatureCard>
            <FeatureCard
              text="Grow with the need."
              image_src="/playground_assets/02.svg"
              card_title="Flexibility"
            ></FeatureCard>
            <FeatureCard
              text="Designed to be simple, intuitive, and powerful."
              image_src="/playground_assets/03.svg"
              card_title="User friendly"
            ></FeatureCard>
            <FeatureCard
              image_src="/playground_assets/04.svg"
              card_title="Community Focus"
            ></FeatureCard>
            <FeatureCard
              text="Pushing the boundaries of what’s possible."
              image_src="/playground_assets/05.svg"
              card_title="Collaboration"
            ></FeatureCard>
            <FeatureCard
              text="We believe in structure with simplicity and all our products are results of it."
              image_src="/playground_assets/06.svg"
              card_title="Well organized"
            ></FeatureCard>
          </div>
          <div className="jobs-banner">
            <h1 className="jobs-text14">Our Mission</h1>
            <span className="jobs-text15">
              <span>
                Dedicate its efforts towards adding limitless value to everyday
                lives of the masses. Through Kshoonya, we want to create
                technologies &amp; products that fill the gaps in lives of
                people who have the potential &amp; means, but lack the tools.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <button className="jobs-button button">Read More</button>
          </div>
        </div>
        <div className="jobs-container07">
          <div className="jobs-container08"></div>
        </div>
        <div className="jobs-steps">
          <h1 className="jobs-text18">Discover the Process</h1>
          <span className="jobs-text19">
            <span>Unveiling the Journey from Concept to Reality</span>
            <br></br>
          </span>
          <div className="jobs-container09">
            <div className="jobs-step">
              <div className="jobs-container10">
                <div className="jobs-line"></div>
                <div className="jobs-container11">
                  <svg viewBox="0 0 1024 1024" className="jobs-icon15">
                    <path d="M634 558q92-64 92-174 0-88-63-151t-151-63-151 63-63 151q0 46 27 96t65 78l36 26v98h172v-98zM512 86q124 0 211 87t87 211q0 156-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"></path>
                  </svg>
                </div>
                <div className="jobs-line1"></div>
              </div>
              <div className="jobs-container12">
                <h1 className="jobs-text22">
                  <span>Ideate</span>
                </h1>
                <span className="jobs-text24">
                  Embodies the process of generating, developing, and
                  communicating innovative ideas
                </span>
              </div>
            </div>
            <div className="jobs-step1">
              <div className="jobs-container13">
                <div className="jobs-line2"></div>
                <div className="jobs-container14">
                  <svg viewBox="0 0 1024 1024" className="jobs-icon17">
                    <path d="M746 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM618 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM406 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM512 128q158 0 271 100t113 242q0 88-63 150t-151 62h-74q-28 0-46 19t-18 45q0 22 16 42t16 44q0 28-18 46t-46 18q-160 0-272-112t-112-272 112-272 272-112z"></path>
                  </svg>
                </div>
                <div className="jobs-line3"></div>
              </div>
              <div className="jobs-container15">
                <h1 className="jobs-text25">Design</h1>
                <span className="jobs-text26">
                  <span>
                    Effective solutions tailored to meet the unique needs of
                    individuals, communities, and industries
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="jobs-step2">
              <div className="jobs-container16">
                <div className="jobs-line4"></div>
                <div className="jobs-container17">
                  <svg viewBox="0 0 1024 1024" className="jobs-icon19">
                    <path d="M576 736l96 96 320-320-320-320-96 96 224 224z"></path>
                    <path d="M448 288l-96-96-320 320 320 320 96-96-224-224z"></path>
                  </svg>
                </div>
                <div className="jobs-line5"></div>
              </div>
              <div className="jobs-container18">
                <h1 className="jobs-text29">
                  <span>Develop</span>
                </h1>
                <span className="jobs-text31">
                  <span>
                    Planning, expertise, and dedication converge to bring forth
                    tangible results that address challenges and improve lives
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="jobs-step3">
              <div className="jobs-container19">
                <div className="jobs-line6"></div>
                <div className="jobs-container20">
                  <svg viewBox="0 0 1024 1024" className="jobs-icon22">
                    <path d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM751.59 704c8.58-40.454 13.996-83.392 15.758-128h127.446c-3.336 44.196-13.624 87.114-30.68 128h-112.524zM208.41 384c-8.58 40.454-13.996 83.392-15.758 128h-127.444c3.336-44.194 13.622-87.114 30.678-128h112.524zM686.036 384c9.614 40.962 15.398 83.854 17.28 128h-191.316v-128h174.036zM512 320v-187.338c14.59 4.246 29.044 11.37 43.228 21.37 26.582 18.74 52.012 47.608 73.54 83.486 14.882 24.802 27.752 52.416 38.496 82.484h-155.264zM331.232 237.516c21.528-35.878 46.956-64.748 73.54-83.486 14.182-10 28.638-17.124 43.228-21.37v187.34h-155.264c10.746-30.066 23.616-57.68 38.496-82.484zM448 384v128h-191.314c1.88-44.146 7.666-87.038 17.278-128h174.036zM95.888 704c-17.056-40.886-27.342-83.804-30.678-128h127.444c1.762 44.608 7.178 87.546 15.758 128h-112.524zM256.686 576h191.314v128h-174.036c-9.612-40.96-15.398-83.854-17.278-128zM448 768v187.34c-14.588-4.246-29.044-11.372-43.228-21.37-26.584-18.74-52.014-47.61-73.54-83.486-14.882-24.804-27.75-52.418-38.498-82.484h155.266zM628.768 850.484c-21.528 35.876-46.958 64.746-73.54 83.486-14.184 9.998-28.638 17.124-43.228 21.37v-187.34h155.266c-10.746 30.066-23.616 57.68-38.498 82.484zM512 704v-128h191.314c-1.88 44.146-7.666 87.040-17.28 128h-174.034zM767.348 512c-1.762-44.608-7.178-87.546-15.758-128h112.524c17.056 40.886 27.344 83.806 30.68 128h-127.446zM830.658 320h-95.9c-18.638-58.762-44.376-110.294-75.316-151.428 42.536 20.34 81.058 47.616 114.714 81.272 21.48 21.478 40.362 44.938 56.502 70.156zM185.844 249.844c33.658-33.658 72.18-60.932 114.714-81.272-30.942 41.134-56.676 92.666-75.316 151.428h-95.898c16.138-25.218 35.022-48.678 56.5-70.156zM129.344 768h95.898c18.64 58.762 44.376 110.294 75.318 151.43-42.536-20.34-81.058-47.616-114.714-81.274-21.48-21.478-40.364-44.938-56.502-70.156zM774.156 838.156c-33.656 33.658-72.18 60.934-114.714 81.274 30.942-41.134 56.678-92.668 75.316-151.43h95.9c-16.14 25.218-35.022 48.678-56.502 70.156z"></path>
                  </svg>
                </div>
                <div className="jobs-line7"></div>
              </div>
              <div className="jobs-container21">
                <h1 className="jobs-text34">
                  <span>Deploy</span>
                </h1>
                <span className="jobs-text36">
                  <span>
                    Ensuring that they effectively fulfill their purpose and add
                    value to their intended audience
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div className="jobs-banner1">
            <span className="jobs-text39">Kshoonya with us</span>
            <h1 className="jobs-text40">Learn to keep it simple</h1>
            <span className="jobs-text41">
              <span>
                {' '}
                Dive into the enriching world of knowledge acquisition, where
                curiosity and passion fuel the quest for understanding,
                empowering you to master new skills, broaden your horizons, and
                make a lasting impact
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <div className="jobs-container22">
              <input
                type="email"
                autoFocus
                placeholder="Email here..."
                autoComplete="on"
                className="jobs-textinput input"
              />
              <button className="jobs-button1 button">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="jobs-cta">
          <div className="jobs-container23">
            <div className="jobs-container24">
              <img
                alt="image"
                src="/playground_assets/dall%C2%B7e%202023-04-05%2022.21.59%20-%20a%20%20man%20walking%20and%20wearing%20smart%20shoes%20and%20connected%20to%20an%20mobile%20app-300w.png"
                loading="lazy"
                image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
                className="jobs-image2"
              />
              <img
                alt="image"
                src="/playground_assets/dall%C2%B7e%202023-04-05%2022.23.36%20-%20a%20%20man%20walking%20and%20wearing%20smart%20shoes%20and%20connected%20to%20a%20mobile%20app%2C%20and%20helps%20to%20reach%20destination-300h.png"
                className="jobs-image3"
              />
            </div>
            <div className="jobs-container25">
              <img
                alt="image"
                src="/playground_assets/_3a1e396a-8fc7-404a-8251-91dc346d23e4-1200w.jpeg"
                loading="lazy"
                image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
                className="jobs-image4"
              />
              <img
                alt="image"
                src="/playground_assets/_12f666b0-d77f-4988-a2d4-86fdca45e463-300w.jpeg"
                loading="lazy"
                image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
                className="jobs-image5"
              />
            </div>
          </div>
        </div>
        <div className="jobs-footer">
          <footer className="jobs-container26">
            <img
              alt="image"
              src="/playground_assets/new_design_full%203-300w.png"
              loading="lazy"
              className="jobs-image6"
            />
            <div className="jobs-container27">
              <span className="jobs-text45">Careers</span>
              <span className="jobs-text46">Help</span>
              <span className="jobs-text47">Privacy Policy</span>
            </div>
            <div className="jobs-divider"></div>
            <div className="jobs-container28">
              <span className="jobs-text48 Body2">
                © 2023 Kshoonya Inc. All rights reserved
              </span>
              <div className="jobs-container29">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="jobs-link4"
                >
                  <div className="jobs-container30">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="jobs-icon24"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="jobs-link5"
                >
                  <div className="jobs-container31">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="jobs-icon26"
                    >
                      <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="jobs-link6"
                >
                  <div className="jobs-container32">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="jobs-icon28"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="jobs-link7"
                >
                  <div className="jobs-container33">
                    <svg viewBox="0 0 1024 1024" className="jobs-icon30">
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
          .jobs-container {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .jobs-header-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .jobs-header {
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
          .jobs-image {
            left: 36px;
            width: 222px;
            bottom: -9px;
            height: 55px;
            position: absolute;
            object-fit: cover;
          }
          .jobs-logo {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .jobs-menu {
            top: 40px;
            left: 295px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: row;
          }
          .jobs-text {
            transition: 0.3s;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .jobs-text:hover {
            color: var(--dl-color-turquoise-default);
          }
          .jobs-text01 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .jobs-text01:hover {
            color: var(--dl-color-turquoise-default);
          }
          .jobs-text02 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .jobs-text02:hover {
            color: var(--dl-color-turquoise-default);
          }
          .jobs-text03 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .jobs-text03:hover {
            color: var(--dl-color-turquoise-default);
          }
          .jobs-text04 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .jobs-text04:hover {
            color: var(--dl-color-turquoise-default);
          }
          .jobs-text05 {
            transition: 0.3s;
          }
          .jobs-text05:hover {
            color: var(--dl-color-turquoise-default);
          }
          .jobs-icon {
            width: 24px;
            height: 24px;
          }
          .jobs-container01 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .jobs-burger-menu {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .jobs-menu1 {
            width: 24px;
            height: 24px;
            margin-left: var(--dl-space-space-unit);
          }
          .jobs-mobile-menu {
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
          .jobs-top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: space-between;
          }
          .jobs-logo1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .jobs-image1 {
            width: 100px;
            object-fit: cover;
          }
          .jobs-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .jobs-icon05 {
            width: 24px;
            height: 24px;
          }
          .jobs-mid {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .jobs-text06 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .jobs-text06:hover {
            color: var(--dl-color-turquoise-default);
          }
          .jobs-text07 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .jobs-text07:hover {
            color: var(--dl-color-turquoise-default);
          }
          .jobs-text08 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .jobs-text08:hover {
            color: var(--dl-color-turquoise-default);
          }
          .jobs-text09 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .jobs-text09:hover {
            color: var(--dl-color-turquoise-default);
          }
          .jobs-text10 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .jobs-text10:hover {
            color: var(--dl-color-turquoise-default);
          }
          .jobs-text11 {
            transition: 0.3s;
          }
          .jobs-text11:hover {
            color: var(--dl-color-turquoise-default);
          }
          .jobs-bot {
            flex: 0 0 auto;
            display: flex;
            margin-top: auto;
            align-items: flex-start;
            flex-direction: column;
          }
          .jobs-container02 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .jobs-link {
            display: contents;
          }
          .jobs-container03 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .jobs-icon07 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .jobs-icon07:hover {
            fill: var(--dl-color-purple-default);
          }
          .jobs-link1 {
            display: contents;
          }
          .jobs-container04 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .jobs-icon09 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .jobs-icon09:hover {
            fill: var(--dl-color-pink-default);
          }
          .jobs-link2 {
            display: contents;
          }
          .jobs-container05 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .jobs-icon11 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .jobs-icon11:hover {
            fill: var(--dl-color-turquoise-default);
          }
          .jobs-link3 {
            display: contents;
          }
          .jobs-container06 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .jobs-icon13 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .jobs-icon13:hover {
            fill: var(--dl-color-orange-default);
          }
          .jobs-main {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .jobs-blur-background {
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
            background-color: #f2f2f2;
          }
          .jobs-hero {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 80vh;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            max-width: 1110px;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }

          .jobs-turquoise-cirble {
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
          .jobs-purple-circle {
            top: -98px;
            right: -68px;
            width: 400px;
            filter: blur(60px);
            opacity: 0.4;
            position: absolute;
            object-fit: cover;
          }
          .jobs-left {
            top: 653px;
            left: 0px;
            right: auto;
            width: 420px;
            bottom: auto;
            position: absolute;
            object-fit: cover;
          }
          .jobs-right {
            top: 441px;
            left: auto;
            right: 0px;
            width: 612px;
            bottom: auto;
            position: absolute;
            object-fit: cover;
          }
          .jobs-features {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            max-width: 1110px;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .jobs-text12 {
            color: var(--dl-color-gray-900);
            font-size: 48px;
            font-family: Inter;
            font-weight: 800;
            text-transform: none;
            text-decoration: none;
          }
          .jobs-text13 {
            max-width: 500px;
            text-align: center;
          }
          .jobs-features1 {
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .jobs-banner {
            width: 100%;
            display: flex;
            padding: 48px;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .jobs-text14 {
            font-size: 3rem;
            text-align: center;
          }
          .jobs-text15 {
            max-width: 1400px;
            margin-top: 32px;
            text-align: center;
            margin-bottom: 32px;
          }
          .jobs-button {
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: 32px;
            padding-right: 32px;
            padding-bottom: var(--dl-space-space-unit);
          }
          .jobs-button:hover {
            transform: scale(1.02);
          }
          .jobs-container07 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .jobs-container08 {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .jobs-steps {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            align-items: center;
            flex-direction: column;
          }
          .jobs-text18 {
            color: var(--dl-color-gray-black);
            font-size: 3rem;
          }
          .jobs-text19 {
            color: var(--dl-color-gray-700);
            font-size: 1.15rem;
            max-width: 600px;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .jobs-container09 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .jobs-step {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .jobs-container10 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .jobs-line {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: transparent;
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .jobs-container11 {
            flex: 0 0 auto;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .jobs-icon15 {
            fill: #595959;
            width: 24px;
            height: 24px;
          }
          .jobs-line1 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .jobs-container12 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 32px;
            padding-right: 32px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .jobs-text22 {
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .jobs-text24 {
            color: rgb(89, 89, 89);
            font-size: 0.75rem;
            text-align: center;
          }
          .jobs-step1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .jobs-container13 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .jobs-line2 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .jobs-container14 {
            flex: 0 0 auto;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .jobs-icon17 {
            fill: #595959;
            width: 24px;
            height: 24px;
          }
          .jobs-line3 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .jobs-container15 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 32px;
            padding-right: 32px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .jobs-text25 {
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .jobs-text26 {
            color: rgb(89, 89, 89);
            font-size: 0.75rem;
            text-align: center;
          }
          .jobs-step2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .jobs-container16 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .jobs-line4 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .jobs-container17 {
            flex: 0 0 auto;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .jobs-icon19 {
            fill: #595959;
            width: 24px;
            height: 24px;
          }
          .jobs-line5 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .jobs-container18 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 32px;
            padding-right: 32px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .jobs-text29 {
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .jobs-text31 {
            color: rgb(89, 89, 89);
            font-size: 0.75rem;
            text-align: center;
          }
          .jobs-step3 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .jobs-container19 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .jobs-line6 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .jobs-container20 {
            flex: 0 0 auto;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .jobs-icon22 {
            fill: #595959;
            width: 24px;
            height: 24px;
          }
          .jobs-line7 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: transparent;
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .jobs-container21 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 32px;
            padding-right: 32px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .jobs-text34 {
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .jobs-text36 {
            color: rgb(89, 89, 89);
            font-size: 0.75rem;
            text-align: center;
          }
          .jobs-banner1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 64px;
            padding-left: 48px;
            padding-right: 48px;
            flex-direction: column;
            padding-bottom: 64px;
            background-size: cover;
            justify-content: space-between;
            background-image: url('https://images.unsplash.com/photo-1485628390555-1a7bd503f9fe?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxhcmNoaXRlY3R1cmUlMjBtaW5pbWFsfGVufDB8fHx8MTYyNjE4NDA0Mg&ixlib=rb-1.2.1&w=1400');
            background-position: center;
          }
          .jobs-text39 {
            font-size: 0.75rem;
            text-align: center;
            font-weight: 600;
            margin-bottom: 32px;
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          .jobs-text40 {
            font-size: 3rem;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .jobs-text41 {
            max-width: 1400px;
            text-align: center;
            margin-bottom: 32px;
          }
          .jobs-container22 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .jobs-textinput {
            font-size: 0.75rem;
            transition: 0.3s;
            border-color: #595959;
          }
          .jobs-textinput:hover {
            animation-fill-mode: var(--dl-color-pink-default);
          }
          .jobs-button1 {
            color: var(--dl-color-gray-white);
            font-size: 0.75rem;
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .jobs-button1:hover {
            color: var(--dl-color-gray-black);
            background-color: transparent;
          }
          .jobs-cta {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-turquoise-default);
          }
          .jobs-container23 {
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
          .jobs-container24 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .jobs-image2 {
            width: 232px;
            opacity: 0.8;
            object-fit: cover;
          }
          .jobs-image3 {
            width: 286px;
            height: 237px;
            opacity: 0.8;
            object-fit: cover;
            padding-right: 30px;
            padding-bottom: 19px;
          }
          .jobs-container25 {
            width: 520px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .jobs-image4 {
            top: -100px;
            left: auto;
            right: var(--dl-space-space-doubleunit);
            width: 232px;
            bottom: auto;
            opacity: 0.8;
            position: absolute;
            object-fit: cover;
          }
          .jobs-image5 {
            top: auto;
            left: var(--dl-space-space-doubleunit);
            right: auto;
            width: 232px;
            bottom: -100px;
            opacity: 0.8;
            position: absolute;
            object-fit: cover;
          }
          .jobs-footer {
            flex: 0 0 auto;
            color: var(--dl-color-gray-white);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .jobs-container26 {
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
          .jobs-image6 {
            width: 194px;
            height: 72px;
            object-fit: cover;
          }
          .jobs-container27 {
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .jobs-text45 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
          }
          .jobs-text45:hover {
            color: var(--dl-color-turquoise-default);
          }
          .jobs-text46 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
          }
          .jobs-text46:hover {
            color: var(--dl-color-turquoise-default);
          }
          .jobs-text47 {
            transition: 0.3s;
            white-space: nowrap;
          }
          .jobs-text47:hover {
            color: var(--dl-color-turquoise-default);
          }
          .jobs-divider {
            width: 100%;
            height: 1px;
            opacity: 0.2;
            background-color: var(--dl-color-gray-white);
          }
          .jobs-container28 {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .jobs-text48 {
            color: var(--dl-color-gray-300);
            margin-top: var(--dl-space-space-unit);
          }
          .jobs-container29 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .jobs-link4 {
            display: contents;
          }
          .jobs-container30 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .jobs-icon24 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .jobs-icon24:hover {
            fill: var(--dl-color-purple-default);
          }
          .jobs-link5 {
            display: contents;
          }
          .jobs-container31 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .jobs-icon26 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .jobs-icon26:hover {
            fill: var(--dl-color-pink-default);
          }
          .jobs-link6 {
            display: contents;
          }
          .jobs-container32 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .jobs-icon28 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .jobs-icon28:hover {
            fill: var(--dl-color-turquoise-default);
          }
          .jobs-link7 {
            display: contents;
          }
          .jobs-container33 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .jobs-icon30 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .jobs-icon30:hover {
            fill: var(--dl-color-orange-default);
          }
          @media (max-width: 991px) {
            .jobs-container01 {
              display: none;
            }
            .jobs-hero {
              height: auto;
              flex-direction: column;
            }
            .jobs-text15 {
              max-width: 100%;
            }
            .jobs-text18 {
              text-align: center;
            }
            .jobs-text19 {
              text-align: center;
            }
            .jobs-text41 {
              width: 100%;
            }
            .jobs-container25 {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .jobs-menu {
              display: none;
            }
            .jobs-burger-menu {
              display: block;
            }
            .jobs-text12 {
              font-size: 40px;
            }
            .jobs-banner {
              padding-left: 32px;
              padding-right: 32px;
            }
            .jobs-text15 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .jobs-steps {
              padding-left: 32px;
              padding-right: 32px;
            }
            .jobs-container09 {
              align-items: flex-start;
              padding-left: 80px;
              flex-direction: column;
            }
            .jobs-step {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .jobs-container10 {
              width: 48px;
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .jobs-line1 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .jobs-container12 {
              width: 100%;
              align-items: flex-start;
              padding-top: 32px;
              flex-direction: column;
              padding-bottom: 32px;
              justify-content: space-between;
            }
            .jobs-text22 {
              margin-top: 32px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .jobs-text24 {
              text-align: left;
            }
            .jobs-step1 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .jobs-container13 {
              width: 48px;
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .jobs-line2 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .jobs-line3 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .jobs-container15 {
              width: 100%;
              align-items: flex-start;
              padding-top: 32px;
              flex-direction: column;
              padding-bottom: 32px;
              justify-content: space-between;
            }
            .jobs-text25 {
              margin-top: 32px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .jobs-text26 {
              text-align: left;
            }
            .jobs-step2 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .jobs-container16 {
              width: 48px;
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .jobs-line4 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .jobs-line5 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .jobs-container18 {
              width: 100%;
              align-items: flex-start;
              padding-top: 32px;
              flex-direction: column;
              padding-bottom: 32px;
              justify-content: space-between;
            }
            .jobs-text29 {
              margin-top: 32px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .jobs-text31 {
              text-align: left;
            }
            .jobs-step3 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .jobs-container19 {
              width: 48px;
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .jobs-line6 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .jobs-line7 {
              border-color: transparent;
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .jobs-container21 {
              width: 100%;
              align-items: flex-start;
              padding-top: 32px;
              flex-direction: column;
              padding-bottom: 32px;
              justify-content: space-between;
            }
            .jobs-text34 {
              margin-top: 32px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .jobs-text36 {
              text-align: left;
            }
            .jobs-banner1 {
              padding-left: 32px;
              padding-right: 32px;
            }
            .jobs-text41 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .jobs-container27 {
              flex-wrap: wrap;
              justify-content: center;
            }
            .jobs-container28 {
              flex-direction: column;
            }
            .jobs-text48 {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .jobs-container01 {
              display: none;
            }
            .jobs-bot {
              width: 100%;
            }
            .jobs-text12 {
              text-align: center;
            }
            .jobs-text13 {
              text-align: center;
            }
            .jobs-banner {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .jobs-steps {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .jobs-container09 {
              padding-left: 0px;
            }
            .jobs-container12 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: 32px;
            }
            .jobs-text22 {
              margin-left: 0px;
              margin-right: 32px;
            }
            .jobs-container15 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: 32px;
            }
            .jobs-text25 {
              margin-left: 0px;
              margin-right: 32px;
            }
            .jobs-container18 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: 32px;
            }
            .jobs-text29 {
              margin-left: 0px;
              margin-right: 32px;
            }
            .jobs-container21 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: 32px;
            }
            .jobs-text34 {
              margin-left: 0px;
              margin-right: 32px;
            }
            .jobs-banner1 {
              padding-top: 48px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 48px;
            }
            .jobs-container22 {
              align-items: center;
              flex-direction: column;
            }
            .jobs-button1 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Jobs
