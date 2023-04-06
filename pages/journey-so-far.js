import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import BlogPostCard3 from '../components/blog-post-card3'

const JourneySoFar = (props) => {
  return (
    <>
      <div className="journey-so-far-container">
        <Head>
          <title>Journey-So-Far - Kshoonya Inc</title>
          <meta property="og:title" content="Journey-So-Far - Kshoonya Inc" />
        </Head>
        <div data-role="Header" className="journey-so-far-header-container">
          <header className="journey-so-far-header">
            <Link href="/">
              <a className="journey-so-far-link">
                <img
                  alt="image"
                  src="/playground_assets/new_design_full%203-300w.png"
                  className="journey-so-far-image"
                />
              </a>
            </Link>
            <div className="journey-so-far-logo"></div>
            <div className="journey-so-far-menu">
              <Link href="/about-us">
                <a className="journey-so-far-link01">About us</a>
              </Link>
              <span className="journey-so-far-text">Journey So far</span>
              <Link href="/jobs">
                <a className="journey-so-far-link02">Jobs</a>
              </Link>
              <span className="journey-so-far-text01">More</span>
              <svg viewBox="0 0 1024 1024" className="journey-so-far-icon list">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="journey-so-far-container01"></div>
            <div data-role="BurgerMenu" className="journey-so-far-burger-menu">
              <svg viewBox="0 0 1024 1024" className="journey-so-far-menu1">
                <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              </svg>
            </div>
          </header>
          <div data-role="MobileMenu" className="journey-so-far-mobile-menu">
            <div className="journey-so-far-top">
              <div className="journey-so-far-logo1">
                <img
                  alt="image"
                  src="/playground_assets/logotype-dark.svg"
                  className="journey-so-far-image1"
                />
              </div>
              <div
                data-role="CloseMobileMenu"
                className="journey-so-far-close-menu"
              >
                <svg viewBox="0 0 1024 1024" className="journey-so-far-icon05">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="journey-so-far-mid">
              <span className="journey-so-far-text02">About</span>
              <span className="journey-so-far-text03">Products</span>
              <span className="journey-so-far-text04">Pricing</span>
              <span className="journey-so-far-text05">Blog</span>
              <span className="journey-so-far-text06">Jobs</span>
              <span className="journey-so-far-text07">More</span>
            </div>
            <div className="journey-so-far-bot">
              <div className="journey-so-far-container02">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="journey-so-far-link03"
                >
                  <div className="journey-so-far-container03">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="journey-so-far-icon07"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="journey-so-far-link04"
                >
                  <div className="journey-so-far-container04">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="journey-so-far-icon09"
                    >
                      <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="journey-so-far-link05"
                >
                  <div className="journey-so-far-container05">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="journey-so-far-icon11"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="journey-so-far-link06"
                >
                  <div className="journey-so-far-container06">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="journey-so-far-icon13"
                    >
                      <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="journey-so-far-main">
          <div className="journey-so-far-blur-background"></div>
          <div className="journey-so-far-hero">
            <h1 className="journey-so-far-text08">Journey of Kshoonya</h1>
          </div>
          <img
            alt="image"
            src="/playground_assets/turquoise-circle.svg"
            className="journey-so-far-turquoise-cirble"
          />
          <img
            alt="image"
            src="/playground_assets/purple-circle.svg"
            className="journey-so-far-purple-circle"
          />
          <img
            alt="image"
            src="/playground_assets/left.svg"
            className="journey-so-far-left"
          />
          <img
            alt="image"
            src="/playground_assets/right.svg"
            className="journey-so-far-right"
          />
        </div>
        <div className="journey-so-far-container07">
          <div className="journey-so-far-container08"></div>
        </div>
        <div className="journey-so-far-blog">
          <div className="journey-so-far-container09">
            <BlogPostCard3
              label="offseit takeaways"
              title="DOING IT THE KSHOONYA WAY"
              description="Kshoonya is a leading technology company dedicated to creating innovative solutions for businesses of all sizes. We are proud to to take their operations offsite in a secure and efficient manner, doing it the Kshoonya way. Learn more about our projects and how they can help you take your business to the next level!"
              rootClassName="rootClassName1"
            ></BlogPostCard3>
          </div>
          <div className="journey-so-far-container10">
            <BlogPostCard3
              label="Startup"
              title="CHANGING THE GAME"
              image_src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fHdvcmt8ZW58MHx8fHwxNjI2NDUwNzky&amp;ixlib=rb-1.2.1&amp;h=1000"
              description="Kshoonya is a new startup revolutionizing the field of artificial intelligence. By utilizing cutting-edge technology and innovative designs, Kshoonya is creating projects with the potential to greatly enhance the lives of people everywhere. Learn more about our projects and how we are changing the game in AI today!"
              rootClassName="rootClassName2"
            ></BlogPostCard3>
          </div>
          <BlogPostCard3
            label="Accessibility"
            title="KSHOONYA BELIEVES IN ASSISTIVE TECH"
            image_src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHx3b3JrJTIwb2ZmaWNlfGVufDB8fHx8MTYyNjQ1MDgzMQ&amp;ixlib=rb-1.2.1&amp;h=1000"
            description="Kshoonya is on the cutting edge of technology, developing innovative assistive tech and artificial intelligence that is revolutionizing the way people interact with technology. Through their projects, they are making a difference in the lives of many. Come explore Kshoonya's recent projects and see how they are making a positive impact."
            rootClassName="rootClassName"
          ></BlogPostCard3>
          <div className="journey-so-far-steps">
            <h1 className="journey-so-far-text09">Development Stage</h1>
            <div className="journey-so-far-container11">
              <div className="journey-so-far-container12">
                <div className="journey-so-far-step">
                  <h1 className="journey-so-far-text10">
                    <span>1</span>
                  </h1>
                  <h1 className="journey-so-far-text12">Phase</h1>
                  <span className="journey-so-far-text13">
                    <span>
                      Project funding for our technology is an important part of
                      the development process. We are currently in Phase 1 of
                      the project, looking for funding and developing a
                      prototype. We are seeking investors and sponsors who are
                      interested in helping us bring this technology to
                      fruition. We have already completed some preliminary
                      research and development, and we are now ready to take the
                      next step in creating a working prototype. Our goal is to
                      create a product that will revolutionize the technology.
                    </span>
                    <br></br>
                  </span>
                </div>
                <div className="journey-so-far-step1">
                  <h1 className="journey-so-far-text16">
                    <span>2</span>
                  </h1>
                  <h1 className="journey-so-far-text18">Phase</h1>
                  <span className="journey-so-far-text19">
                    <span>Coming soon</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="journey-so-far-container13">
                <div className="journey-so-far-step2">
                  <h1 className="journey-so-far-text22">
                    <span>3</span>
                  </h1>
                  <h1 className="journey-so-far-text24">Phase</h1>
                  <span className="journey-so-far-text25">
                    <span>coming soon</span>
                    <br></br>
                  </span>
                </div>
                <div className="journey-so-far-step3">
                  <h1 className="journey-so-far-text28">
                    <span>4</span>
                  </h1>
                  <h1 className="journey-so-far-text30">Production</h1>
                  <span className="journey-so-far-text31">
                    <span>
                      coming
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>soon</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="journey-so-far-cta">
          <div className="journey-so-far-container14">
            <div className="journey-so-far-container15">
              <img
                alt="image"
                src="/playground_assets/dall%C2%B7e%202023-04-05%2022.21.59%20-%20a%20%20man%20walking%20and%20wearing%20smart%20shoes%20and%20connected%20to%20an%20mobile%20app-300w.png"
                loading="lazy"
                image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
                className="journey-so-far-image2"
              />
              <img
                alt="image"
                src="/playground_assets/dall%C2%B7e%202023-04-05%2022.23.36%20-%20a%20%20man%20walking%20and%20wearing%20smart%20shoes%20and%20connected%20to%20a%20mobile%20app%2C%20and%20helps%20to%20reach%20destination-300h.png"
                className="journey-so-far-image3"
              />
            </div>
            <div className="journey-so-far-container16">
              <img
                alt="image"
                src="/playground_assets/_3a1e396a-8fc7-404a-8251-91dc346d23e4-1200w.jpeg"
                loading="lazy"
                image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
                className="journey-so-far-image4"
              />
              <img
                alt="image"
                src="/playground_assets/_12f666b0-d77f-4988-a2d4-86fdca45e463-300w.jpeg"
                loading="lazy"
                image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
                className="journey-so-far-image5"
              />
            </div>
          </div>
        </div>
        <div className="journey-so-far-footer">
          <footer className="journey-so-far-container17">
            <img
              alt="image"
              src="/playground_assets/new_design_full%203-300w.png"
              loading="lazy"
              className="journey-so-far-image6"
            />
            <div className="journey-so-far-container18">
              <Link href="/jobs">
                <a className="journey-so-far-link07">Careers</a>
              </Link>
              <Link href="/about-us">
                <a className="journey-so-far-link08">Help</a>
              </Link>
              <span className="journey-so-far-text36">Privacy Policy</span>
            </div>
            <div className="journey-so-far-divider"></div>
            <div className="journey-so-far-container19">
              <span className="journey-so-far-text37 Body2">
                © 2023 Kshoonya Inc. All rights reserved
              </span>
              <div className="journey-so-far-container20">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="journey-so-far-link09"
                >
                  <div className="journey-so-far-container21">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="journey-so-far-icon15"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="journey-so-far-link10"
                >
                  <div className="journey-so-far-container22">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="journey-so-far-icon17"
                    >
                      <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="journey-so-far-link11"
                >
                  <div className="journey-so-far-container23">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="journey-so-far-icon19"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="journey-so-far-link12"
                >
                  <div className="journey-so-far-container24">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="journey-so-far-icon21"
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
          .journey-so-far-container {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .journey-so-far-header-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .journey-so-far-header {
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
          .journey-so-far-link {
            display: contents;
          }
          .journey-so-far-image {
            left: 36px;
            width: 222px;
            bottom: -9px;
            height: 55px;
            position: absolute;
            object-fit: cover;
            text-decoration: none;
          }
          .journey-so-far-logo {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .journey-so-far-menu {
            top: 40px;
            left: 295px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: row;
          }
          .journey-so-far-link01 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .journey-so-far-link01:hover {
            color: var(--dl-color-turquoise-default);
          }
          .journey-so-far-text {
            transition: 0.3s;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .journey-so-far-text:hover {
            color: var(--dl-color-turquoise-default);
          }
          .journey-so-far-link02 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .journey-so-far-link02:hover {
            color: var(--dl-color-turquoise-default);
          }
          .journey-so-far-text01 {
            transition: 0.3s;
            text-decoration: none;
          }
          .journey-so-far-text01:hover {
            color: var(--dl-color-turquoise-default);
          }
          .journey-so-far-icon {
            width: 24px;
            height: 24px;
            text-decoration: none;
          }
          .journey-so-far-container01 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .journey-so-far-burger-menu {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .journey-so-far-menu1 {
            width: 24px;
            height: 24px;
            margin-left: var(--dl-space-space-unit);
          }
          .journey-so-far-mobile-menu {
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
          .journey-so-far-top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: space-between;
          }
          .journey-so-far-logo1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .journey-so-far-image1 {
            width: 100px;
            object-fit: cover;
          }
          .journey-so-far-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .journey-so-far-icon05 {
            width: 24px;
            height: 24px;
          }
          .journey-so-far-mid {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .journey-so-far-text02 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .journey-so-far-text02:hover {
            color: var(--dl-color-turquoise-default);
          }
          .journey-so-far-text03 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .journey-so-far-text03:hover {
            color: var(--dl-color-turquoise-default);
          }
          .journey-so-far-text04 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .journey-so-far-text04:hover {
            color: var(--dl-color-turquoise-default);
          }
          .journey-so-far-text05 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .journey-so-far-text05:hover {
            color: var(--dl-color-turquoise-default);
          }
          .journey-so-far-text06 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .journey-so-far-text06:hover {
            color: var(--dl-color-turquoise-default);
          }
          .journey-so-far-text07 {
            transition: 0.3s;
          }
          .journey-so-far-text07:hover {
            color: var(--dl-color-turquoise-default);
          }
          .journey-so-far-bot {
            flex: 0 0 auto;
            display: flex;
            margin-top: auto;
            align-items: flex-start;
            flex-direction: column;
          }
          .journey-so-far-container02 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .journey-so-far-link03 {
            display: contents;
          }
          .journey-so-far-container03 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .journey-so-far-icon07 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .journey-so-far-icon07:hover {
            fill: var(--dl-color-purple-default);
          }
          .journey-so-far-link04 {
            display: contents;
          }
          .journey-so-far-container04 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .journey-so-far-icon09 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .journey-so-far-icon09:hover {
            fill: var(--dl-color-pink-default);
          }
          .journey-so-far-link05 {
            display: contents;
          }
          .journey-so-far-container05 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .journey-so-far-icon11 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .journey-so-far-icon11:hover {
            fill: var(--dl-color-turquoise-default);
          }
          .journey-so-far-link06 {
            display: contents;
          }
          .journey-so-far-container06 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .journey-so-far-icon13 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .journey-so-far-icon13:hover {
            fill: var(--dl-color-orange-default);
          }
          .journey-so-far-main {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .journey-so-far-blur-background {
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
          .journey-so-far-hero {
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
            justify-content: flex-start;
          }

          .journey-so-far-text08 {
            font-size: 72px;
            align-self: flex-end;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .journey-so-far-turquoise-cirble {
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
          .journey-so-far-purple-circle {
            top: -98px;
            right: -68px;
            width: 400px;
            filter: blur(60px);
            opacity: 0.4;
            position: absolute;
            object-fit: cover;
          }
          .journey-so-far-left {
            top: 653px;
            left: 0px;
            right: auto;
            width: 420px;
            bottom: auto;
            position: absolute;
            object-fit: cover;
          }
          .journey-so-far-right {
            top: 441px;
            left: auto;
            right: 0px;
            width: 612px;
            bottom: auto;
            position: absolute;
            object-fit: cover;
          }
          .journey-so-far-container07 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .journey-so-far-container08 {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .journey-so-far-blog {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .journey-so-far-container09 {
            display: flex;
            align-items: center;
            margin-bottom: 32px;
            flex-direction: column;
            justify-content: space-between;
          }
          .journey-so-far-container10 {
            display: flex;
            align-items: center;
            margin-bottom: 32px;
            flex-direction: column;
            justify-content: space-between;
          }
          .journey-so-far-steps {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            align-items: center;
            flex-direction: column;
          }
          .journey-so-far-text09 {
            color: var(--dl-color-gray-black);
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-unit);
          }
          .journey-so-far-container11 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .journey-so-far-container12 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .journey-so-far-step {
            display: flex;
            padding: 24px;
            align-items: center;
            flex-direction: column;
          }
          .journey-so-far-text10 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .journey-so-far-text12 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .journey-so-far-text13 {
            color: rgb(89, 89, 89);
            font-size: 0.75rem;
            margin-top: 24px;
            text-align: center;
          }
          .journey-so-far-step1 {
            display: flex;
            padding: 24px;
            align-items: center;
            flex-direction: column;
          }
          .journey-so-far-text16 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .journey-so-far-text18 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .journey-so-far-text19 {
            color: rgb(89, 89, 89);
            font-size: 0.75rem;
            margin-top: 24px;
            text-align: center;
          }
          .journey-so-far-container13 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .journey-so-far-step2 {
            display: flex;
            padding: 24px;
            align-items: center;
            flex-direction: column;
          }
          .journey-so-far-text22 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .journey-so-far-text24 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .journey-so-far-text25 {
            color: rgb(89, 89, 89);
            font-size: 0.75rem;
            margin-top: 24px;
            text-align: center;
          }
          .journey-so-far-step3 {
            display: flex;
            padding: 24px;
            align-items: center;
            flex-direction: column;
          }
          .journey-so-far-text28 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .journey-so-far-text30 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .journey-so-far-text31 {
            color: rgb(89, 89, 89);
            font-size: 0.75rem;
            margin-top: 24px;
            text-align: center;
          }
          .journey-so-far-cta {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #692e4a;
          }
          .journey-so-far-container14 {
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
          .journey-so-far-container15 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .journey-so-far-image2 {
            width: 232px;
            opacity: 0.8;
            object-fit: cover;
          }
          .journey-so-far-image3 {
            width: 286px;
            height: 237px;
            opacity: 0.8;
            object-fit: cover;
            padding-right: 30px;
            padding-bottom: 19px;
          }
          .journey-so-far-container16 {
            width: 520px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .journey-so-far-image4 {
            top: -100px;
            left: auto;
            right: var(--dl-space-space-doubleunit);
            width: 232px;
            bottom: auto;
            opacity: 0.8;
            position: absolute;
            object-fit: cover;
          }
          .journey-so-far-image5 {
            top: auto;
            left: var(--dl-space-space-doubleunit);
            right: auto;
            width: 232px;
            bottom: -100px;
            opacity: 0.8;
            position: absolute;
            object-fit: cover;
          }
          .journey-so-far-footer {
            flex: 0 0 auto;
            color: var(--dl-color-gray-white);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .journey-so-far-container17 {
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
          .journey-so-far-image6 {
            width: 194px;
            height: 72px;
            object-fit: cover;
          }
          .journey-so-far-container18 {
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .journey-so-far-link07 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .journey-so-far-link07:hover {
            color: var(--dl-color-turquoise-default);
          }
          .journey-so-far-link08 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .journey-so-far-link08:hover {
            color: var(--dl-color-turquoise-default);
          }
          .journey-so-far-text36 {
            transition: 0.3s;
            white-space: nowrap;
          }
          .journey-so-far-text36:hover {
            color: var(--dl-color-turquoise-default);
          }
          .journey-so-far-divider {
            width: 100%;
            height: 1px;
            opacity: 0.2;
            background-color: var(--dl-color-gray-white);
          }
          .journey-so-far-container19 {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .journey-so-far-text37 {
            color: var(--dl-color-gray-300);
            margin-top: var(--dl-space-space-unit);
          }
          .journey-so-far-container20 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .journey-so-far-link09 {
            display: contents;
          }
          .journey-so-far-container21 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .journey-so-far-icon15 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .journey-so-far-icon15:hover {
            fill: var(--dl-color-purple-default);
          }
          .journey-so-far-link10 {
            display: contents;
          }
          .journey-so-far-container22 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .journey-so-far-icon17 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .journey-so-far-icon17:hover {
            fill: var(--dl-color-pink-default);
          }
          .journey-so-far-link11 {
            display: contents;
          }
          .journey-so-far-container23 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .journey-so-far-icon19 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .journey-so-far-icon19:hover {
            fill: var(--dl-color-turquoise-default);
          }
          .journey-so-far-link12 {
            display: contents;
          }
          .journey-so-far-container24 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .journey-so-far-icon21 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .journey-so-far-icon21:hover {
            fill: var(--dl-color-orange-default);
          }
          @media (max-width: 991px) {
            .journey-so-far-container01 {
              display: none;
            }
            .journey-so-far-hero {
              height: auto;
              flex-direction: column;
            }
            .journey-so-far-text08 {
              text-align: center;
            }
            .journey-so-far-text09 {
              text-align: center;
            }
            .journey-so-far-text10 {
              text-align: center;
            }
            .journey-so-far-text12 {
              text-align: center;
            }
            .journey-so-far-text16 {
              text-align: center;
            }
            .journey-so-far-text18 {
              text-align: center;
            }
            .journey-so-far-text22 {
              text-align: center;
            }
            .journey-so-far-text24 {
              text-align: center;
            }
            .journey-so-far-text28 {
              text-align: center;
            }
            .journey-so-far-text30 {
              text-align: center;
            }
            .journey-so-far-container16 {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .journey-so-far-menu {
              display: none;
            }
            .journey-so-far-burger-menu {
              display: block;
            }
            .journey-so-far-text08 {
              font-size: 50px;
              text-align: center;
            }
            .journey-so-far-blog {
              padding-left: 32px;
              padding-right: 32px;
            }
            .journey-so-far-steps {
              padding-left: 32px;
              padding-right: 32px;
            }
            .journey-so-far-container11 {
              flex-direction: column;
            }
            .journey-so-far-step {
              padding: var(--dl-space-space-unit);
            }
            .journey-so-far-step1 {
              padding: var(--dl-space-space-unit);
            }
            .journey-so-far-step2 {
              padding: var(--dl-space-space-unit);
            }
            .journey-so-far-step3 {
              padding: var(--dl-space-space-unit);
            }
            .journey-so-far-container18 {
              flex-wrap: wrap;
              justify-content: center;
            }
            .journey-so-far-container19 {
              flex-direction: column;
            }
            .journey-so-far-text37 {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .journey-so-far-container01 {
              display: none;
            }
            .journey-so-far-bot {
              width: 100%;
            }
            .journey-so-far-blog {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .journey-so-far-steps {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .journey-so-far-container12 {
              flex-direction: column;
            }
            .journey-so-far-container13 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default JourneySoFar
