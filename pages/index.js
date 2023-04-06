import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import PrimaryButton from '../components/primary-button'
import FeatureCard from '../components/feature-card'
import TestimonialsCard from '../components/testimonials-card'
import StatsCard from '../components/stats-card'
import FeatureCard4 from '../components/feature-card4'
import GalleryCard11 from '../components/gallery-card11'
import BlogPostCard1 from '../components/blog-post-card1'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Kshoonya Inc</title>
          <meta property="og:title" content="Kshoonya Inc" />
        </Head>
        <div data-role="Header" className="home-header-container">
          <header className="home-header">
            <Link href="/">
              <a className="home-link">
                <img
                  alt="image"
                  src="/playground_assets/new_design_full%203-300w.png"
                  className="home-image"
                />
              </a>
            </Link>
            <div className="home-logo"></div>
            <div className="home-menu">
              <Link href="/about-us">
                <a className="home-link01">About us</a>
              </Link>
              <Link href="/journey-so-far">
                <a className="home-link02">Journey So far</a>
              </Link>
              <Link href="/jobs">
                <a className="home-link03">Jobs</a>
              </Link>
              <span className="home-text">More</span>
              <svg viewBox="0 0 1024 1024" className="home-icon list">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="home-container01"></div>
            <div data-role="BurgerMenu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-menu1">
                <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              </svg>
            </div>
          </header>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-top">
              <div className="home-logo1">
                <img
                  alt="image"
                  src="/playground_assets/logotype-dark.svg"
                  className="home-image01"
                />
              </div>
              <div data-role="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon05">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-mid">
              <span className="home-text01">About</span>
              <span className="home-text02">Products</span>
              <span className="home-text03">Pricing</span>
              <span className="home-text04">Blog</span>
              <span className="home-text05">Jobs</span>
              <span className="home-text06">More</span>
            </div>
            <div className="home-bot">
              <div className="home-container02">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link04"
                >
                  <div className="home-container03">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon07"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link05"
                >
                  <div className="home-container04">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon09"
                    >
                      <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link06"
                >
                  <div className="home-container05">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="home-icon11"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link07"
                >
                  <div className="home-container06">
                    <svg viewBox="0 0 1024 1024" className="home-icon13">
                      <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="home-main">
          <div className="home-blur-background"></div>
          <div className="home-hero">
            <div className="home-container07">
              <h1 className="home-text07">
                <span>
                  Dream. Innovate.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>Support.</span>
              </h1>
              <Link href="/journey-so-far">
                <a className="home-link08">
                  <PrimaryButton
                    button="Dream with Kshoonya – unleash your potential"
                    className="home-component"
                  ></PrimaryButton>
                </a>
              </Link>
            </div>
            <img
              alt="image"
              src="/playground_assets/_ca4a1961-f5eb-4cb5-a9a4-621c4ceda0f3-600h.jpeg"
              loading="lazy"
              className="home-image02"
            />
          </div>
          <img
            alt="image"
            src="/playground_assets/turquoise-circle.svg"
            className="home-turquoise-cirble"
          />
          <img
            alt="image"
            src="/playground_assets/purple-circle.svg"
            className="home-purple-circle"
          />
          <img
            alt="image"
            src="/playground_assets/left.svg"
            className="home-left"
          />
          <img
            alt="image"
            src="/playground_assets/right.svg"
            className="home-right"
          />
        </div>
        <div className="home-features">
          <h2 className="home-text11">Introducing Kshoonya Technologies</h2>
          <Link href="/about-us">
            <a className="home-link09">Learn more about us</a>
          </Link>
          <div className="home-features1">
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
          <div className="home-banner">
            <h1 className="home-text12">Our Mission</h1>
            <span className="home-text13">
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
            <Link href="/about-us">
              <a className="home-link10 button">Read More</a>
            </Link>
          </div>
        </div>
        <div className="home-testimonials">
          <div className="home-container08">
            <div className="home-container09">
              <h1 className="home-text16 Headline2">
                Our Innovative Technology
              </h1>
              <span>Works to bring independence and inclusiveness</span>
              <div className="home-container10">
                <TestimonialsCard
                  text="Kshoonya’s revolutionary technology leverages a combination of AI and sensors to provide an unparalleled level of mobility and navigation."
                  text1="Mobility and Navigation"
                  text2="Coming Soon"
                  image_src="/playground_assets/logo-4.svg"
                  rootClassName="testimonials-card-root-class-name"
                ></TestimonialsCard>
              </div>
            </div>
            <div className="home-container11">
              <div className="home-container12">
                <TestimonialsCard
                  src="/playground_assets/logo-1.svg"
                  text="Kshoonya is an innovative technology company that specializes in developing products that focus on the independence and quality of life of those with disabilities."
                  text1="AI-powered support"
                  text2="User friendly UI"
                  image_src="/playground_assets/logo-1.svg"
                ></TestimonialsCard>
              </div>
              <div className="home-container13">
                <TestimonialsCard
                  text="Kshoonya is a technology company dedicated to creating groundbreaking, innovative solutions that aim to make the world a better place. "
                  text1="Automation &amp; Integration"
                  text2="Data-driven"
                  image_src="/playground_assets/logo-2.svg"
                ></TestimonialsCard>
              </div>
            </div>
          </div>
        </div>
        <div className="home-achievements">
          <div className="home-container14">
            <h2 className="home-text18">
              <span>
                Innovate with
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>Kshoonya - Unleash your Potential</span>
            </h2>
            <span className="home-text22">
              <span>
                Learn more about our technology and practices
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>and upcoming products</span>
            </span>
          </div>
          <div className="home-container15">
            <div className="home-container16">
              <StatsCard
                number="Simple Analytics"
                image_src="/playground_assets/01.svg"
                description="from complex analysis"
                rootClassName="stats-card-root-class-name"
              ></StatsCard>
              <StatsCard
                number="Collaboration"
                image_src="/playground_assets/04.svg"
                description="with the resources"
                rootClassName="stats-card-root-class-name1"
              ></StatsCard>
            </div>
            <div className="home-container17">
              <StatsCard
                number="Customizable"
                description="more inclusive"
                rootClassName="stats-card-root-class-name2"
              ></StatsCard>
              <StatsCard
                number="Calibration"
                image_src="/playground_assets/07.svg"
                description="for companies"
              ></StatsCard>
            </div>
          </div>
        </div>
        <div className="home-features2">
          <h1 className="home-text26">Features and Benefits</h1>
          <div className="home-separator"></div>
          <div className="home-container18">
            <img
              alt="image"
              src="/playground_assets/_a44f30b0-445a-4963-8d0e-b5d74b59a155-500h.jpeg"
              className="home-image03"
            />
            <div className="home-container19">
              <FeatureCard4
                title="Accessibility"
                description="Breaking barriers and fostering inclusivity by designing user-friendly technology that adapts to the diverse needs of individuals."
                rootClassName="rootClassName1"
              ></FeatureCard4>
              <FeatureCard4
                title="Empowerment"
                description="Enabling independence and boosting confidence by providing cutting-edge solutions that amplify the capabilities of community members and people with disabilities."
                rootClassName="rootClassName4"
              ></FeatureCard4>
              <FeatureCard4
                title="Innovation"
                description="Pioneering transformative technologies that reimagine everyday life, driving positive change and enhancing the experiences of individuals across the spectrum."
                rootClassName="rootClassName3"
              ></FeatureCard4>
              <FeatureCard4
                title="Inclusivity"
                description="Embrace a design philosophy that caters to diverse needs, promoting a sense of belonging for all. Our cutting-edge technology prioritizes inclusivity, enriching the lives of community members and disabled people alike.."
                rootClassName="rootClassName2"
              ></FeatureCard4>
            </div>
          </div>
          <img
            alt="image"
            src="/playground_assets/purple-circle.svg"
            className="home-purple-circle1"
          />
          <img
            alt="image"
            src="/playground_assets/purple-circle.svg"
            className="home-purple-circle2"
          />
        </div>
        <div className="home-hero1">
          <div className="home-container20">
            <h1 className="home-text27">Possibilities are endless</h1>
            <span className="home-text28">
              <span>
                Kshoonya is creating projects with the potential to greatly
                enhance the lives of people everywhere. Learn more about our
                projects and how we are changing the game in AI today!
              </span>
              <br></br>
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
          </div>
          <img
            alt="image"
            src="/playground_assets/_3a1e396a-8fc7-404a-8251-91dc346d23e4-1200w.jpeg"
            className="home-image04"
          />
          <img
            alt="image"
            src="/playground_assets/left.svg"
            className="home-left1"
          />
        </div>
        <div className="home-container21">
          <div className="home-container22"></div>
        </div>
        <div className="home-gallery">
          <GalleryCard11
            title="Dream"
            subtitle="We dream of a world where every disabled individual has same level of access to opportunities &amp; the world around them as any other able person."
            image_src="/playground_assets/_2c7cb96e-7c41-4972-8046-9594a3e1e62a-1500h.jpeg"
            rootClassName="rootClassName"
          ></GalleryCard11>
          <GalleryCard11
            title="Innovate"
            subtitle="Kshoonya’s revolutionary technology leverages a combination of AI and sensors to provide an unparalleled level of mobility and navigation."
            image_src="/playground_assets/_1f13f0ed-a9f1-48d0-8b5e-324b7b7fb17e-1500h.jpeg"
            rootClassName="rootClassName1"
          ></GalleryCard11>
          <GalleryCard11
            title="Support"
            subtitle="By pushing boundaries of what’s possible &amp; striving to build the most advance technologies, we support disabled individuals in accessing their maximum potential."
            image_src="/playground_assets/_e94549ba-5630-4a66-854b-3652db50d574-1500h.jpeg"
            rootClassName="rootClassName5"
          ></GalleryCard11>
        </div>
        <div className="home-steps">
          <h1 className="home-text33">Discover the Process</h1>
          <span className="home-text34">
            <span>Unveiling the Journey from Concept to Reality</span>
            <br></br>
          </span>
          <div className="home-container23">
            <div className="home-step">
              <div className="home-container24">
                <div className="home-line"></div>
                <div className="home-container25">
                  <svg viewBox="0 0 1024 1024" className="home-icon15">
                    <path d="M634 558q92-64 92-174 0-88-63-151t-151-63-151 63-63 151q0 46 27 96t65 78l36 26v98h172v-98zM512 86q124 0 211 87t87 211q0 156-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"></path>
                  </svg>
                </div>
                <div className="home-line1"></div>
              </div>
              <div className="home-container26">
                <h1 className="home-text37">
                  <span>Ideate</span>
                </h1>
                <span className="home-text39">
                  Embodies the process of generating, developing, and
                  communicating innovative ideas
                </span>
              </div>
            </div>
            <div className="home-step1">
              <div className="home-container27">
                <div className="home-line2"></div>
                <div className="home-container28">
                  <svg viewBox="0 0 1024 1024" className="home-icon17">
                    <path d="M746 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM618 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM406 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM512 128q158 0 271 100t113 242q0 88-63 150t-151 62h-74q-28 0-46 19t-18 45q0 22 16 42t16 44q0 28-18 46t-46 18q-160 0-272-112t-112-272 112-272 272-112z"></path>
                  </svg>
                </div>
                <div className="home-line3"></div>
              </div>
              <div className="home-container29">
                <h1 className="home-text40">Design</h1>
                <span className="home-text41">
                  <span>
                    Effective solutions tailored to meet the unique needs of
                    individuals, communities, and industries
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-step2">
              <div className="home-container30">
                <div className="home-line4"></div>
                <div className="home-container31">
                  <svg viewBox="0 0 1024 1024" className="home-icon19">
                    <path d="M576 736l96 96 320-320-320-320-96 96 224 224z"></path>
                    <path d="M448 288l-96-96-320 320 320 320 96-96-224-224z"></path>
                  </svg>
                </div>
                <div className="home-line5"></div>
              </div>
              <div className="home-container32">
                <h1 className="home-text44">
                  <span>Develop</span>
                </h1>
                <span className="home-text46">
                  <span>
                    Planning, expertise, and dedication converge to bring forth
                    tangible results that address challenges and improve lives
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-step3">
              <div className="home-container33">
                <div className="home-line6"></div>
                <div className="home-container34">
                  <svg viewBox="0 0 1024 1024" className="home-icon22">
                    <path d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM751.59 704c8.58-40.454 13.996-83.392 15.758-128h127.446c-3.336 44.196-13.624 87.114-30.68 128h-112.524zM208.41 384c-8.58 40.454-13.996 83.392-15.758 128h-127.444c3.336-44.194 13.622-87.114 30.678-128h112.524zM686.036 384c9.614 40.962 15.398 83.854 17.28 128h-191.316v-128h174.036zM512 320v-187.338c14.59 4.246 29.044 11.37 43.228 21.37 26.582 18.74 52.012 47.608 73.54 83.486 14.882 24.802 27.752 52.416 38.496 82.484h-155.264zM331.232 237.516c21.528-35.878 46.956-64.748 73.54-83.486 14.182-10 28.638-17.124 43.228-21.37v187.34h-155.264c10.746-30.066 23.616-57.68 38.496-82.484zM448 384v128h-191.314c1.88-44.146 7.666-87.038 17.278-128h174.036zM95.888 704c-17.056-40.886-27.342-83.804-30.678-128h127.444c1.762 44.608 7.178 87.546 15.758 128h-112.524zM256.686 576h191.314v128h-174.036c-9.612-40.96-15.398-83.854-17.278-128zM448 768v187.34c-14.588-4.246-29.044-11.372-43.228-21.37-26.584-18.74-52.014-47.61-73.54-83.486-14.882-24.804-27.75-52.418-38.498-82.484h155.266zM628.768 850.484c-21.528 35.876-46.958 64.746-73.54 83.486-14.184 9.998-28.638 17.124-43.228 21.37v-187.34h155.266c-10.746 30.066-23.616 57.68-38.498 82.484zM512 704v-128h191.314c-1.88 44.146-7.666 87.040-17.28 128h-174.034zM767.348 512c-1.762-44.608-7.178-87.546-15.758-128h112.524c17.056 40.886 27.344 83.806 30.68 128h-127.446zM830.658 320h-95.9c-18.638-58.762-44.376-110.294-75.316-151.428 42.536 20.34 81.058 47.616 114.714 81.272 21.48 21.478 40.362 44.938 56.502 70.156zM185.844 249.844c33.658-33.658 72.18-60.932 114.714-81.272-30.942 41.134-56.676 92.666-75.316 151.428h-95.898c16.138-25.218 35.022-48.678 56.5-70.156zM129.344 768h95.898c18.64 58.762 44.376 110.294 75.318 151.43-42.536-20.34-81.058-47.616-114.714-81.274-21.48-21.478-40.364-44.938-56.502-70.156zM774.156 838.156c-33.656 33.658-72.18 60.934-114.714 81.274 30.942-41.134 56.678-92.668 75.316-151.43h95.9c-16.14 25.218-35.022 48.678-56.502 70.156z"></path>
                  </svg>
                </div>
                <div className="home-line7"></div>
              </div>
              <div className="home-container35">
                <h1 className="home-text49">
                  <span>Deploy</span>
                </h1>
                <span className="home-text51">
                  <span>
                    Ensuring that they effectively fulfill their purpose and add
                    value to their intended audience
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div className="home-blog">
            <div className="home-container36">
              <BlogPostCard1
                label="WHY"
                title="What inspired us?"
                description="While the tech industry moves towards unimaginable &amp; invaluable solutions, there are still billions of people around the world unable to access something as basic as independent mobility."
                rootClassName="rootClassName3"
              ></BlogPostCard1>
            </div>
            <div className="home-container37">
              <BlogPostCard1
                label="WHAT"
                title="What do we want?"
                image_src="https://images.unsplash.com/photo-1465925508512-1e7052bb62e6?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxjaXR5JTIwY2FifGVufDB8fHx8MTYyNjQ1MDMwNA&amp;ixlib=rb-1.2.1&amp;h=1200"
                description="We want to employ the boundless potential of technology to improve lives. Building AI-based innovative &amp; revolutionary solutions in the form of wearable devices which have the capacity to learn, evolve &amp; guide."
                profile_src="https://images.unsplash.com/photo-1632169486919-f8d993a936c4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGJsaW5kfGVufDB8fHx8MTY4MDc0NTg2Nw&amp;ixlib=rb-4.0.3&amp;h=200"
                rootClassName="rootClassName2"
              ></BlogPostCard1>
            </div>
            <div className="home-container38">
              <BlogPostCard1
                label="HOW"
                title="How YOU can contribute?"
                image_src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxjaXR5fGVufDB8fHx8MTYyNjQ1MDI4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
                description="By writing to us at careers@kshoonya.com if you want to share your time &amp; expertise, and reaching out via contact@kshoonya.com if you’d like to fund the project or have any suggestions for us!"
                profile_src="https://images.unsplash.com/photo-1622231300439-9f4b1099afb3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fGNvbnRyaWJ1dGV8ZW58MHx8fHwxNjgwNzQ1OTQx&amp;ixlib=rb-4.0.3&amp;h=200"
                rootClassName="rootClassName1"
              ></BlogPostCard1>
            </div>
          </div>
        </div>
        <div className="home-hero2">
          <h1 className="home-text54">Let&apos;s keep things organized</h1>
          <span className="home-text55">connect with us</span>
          <div className="home-btn-group">
            <Link href="/about-us">
              <a className="home-link11 button">Learn More</a>
            </Link>
          </div>
        </div>
        <div className="home-cta">
          <div className="home-container39">
            <div className="home-container40">
              <img
                alt="image"
                src="/playground_assets/dall%C2%B7e%202023-04-05%2022.21.59%20-%20a%20%20man%20walking%20and%20wearing%20smart%20shoes%20and%20connected%20to%20an%20mobile%20app-300w.png"
                loading="lazy"
                image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
                className="home-image05"
              />
              <img
                alt="image"
                src="/playground_assets/dall%C2%B7e%202023-04-05%2022.23.36%20-%20a%20%20man%20walking%20and%20wearing%20smart%20shoes%20and%20connected%20to%20a%20mobile%20app%2C%20and%20helps%20to%20reach%20destination-300h.png"
                className="home-image06"
              />
            </div>
            <div className="home-container41">
              <img
                alt="image"
                src="/playground_assets/_3a1e396a-8fc7-404a-8251-91dc346d23e4-1200w.jpeg"
                loading="lazy"
                image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
                className="home-image07"
              />
              <img
                alt="image"
                src="/playground_assets/_12f666b0-d77f-4988-a2d4-86fdca45e463-300w.jpeg"
                loading="lazy"
                image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
                className="home-image08"
              />
            </div>
          </div>
        </div>
        <div className="home-footer">
          <footer className="home-container42">
            <img
              alt="image"
              src="/playground_assets/new_design_full%203-300w.png"
              loading="lazy"
              className="home-image09"
            />
            <div className="home-container43">
              <Link href="/jobs">
                <a className="home-link12">Careers</a>
              </Link>
              <Link href="/supporters">
                <a className="home-link13">Help</a>
              </Link>
              <Link href="/about-us">
                <a className="home-link14">Privacy Policy</a>
              </Link>
            </div>
            <div className="home-divider"></div>
            <div className="home-container44">
              <span className="home-text56 Body2">
                © 2023 Kshoonya Inc. All rights reserved
              </span>
              <div className="home-container45">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link15"
                >
                  <div className="home-container46">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon24"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link16"
                >
                  <div className="home-container47">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon26"
                    >
                      <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link17"
                >
                  <div className="home-container48">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="home-icon28"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link18"
                >
                  <div className="home-container49">
                    <svg viewBox="0 0 1024 1024" className="home-icon30">
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
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-header-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-header {
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
          .home-link {
            display: contents;
          }
          .home-image {
            left: 36px;
            width: 222px;
            bottom: -9px;
            height: 55px;
            position: absolute;
            object-fit: cover;
            text-decoration: none;
          }
          .home-logo {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-menu {
            top: 40px;
            left: 295px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-link01 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .home-link01:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-link02 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .home-link02:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-link03 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }

          .home-text {
            transition: 0.3s;
          }
          .home-text:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-icon {
            width: 24px;
            height: 24px;
            text-decoration: none;
          }
          .home-container01 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-menu1 {
            width: 24px;
            height: 24px;
            margin-left: var(--dl-space-space-unit);
          }
          .home-mobile-menu {
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
          .home-top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-logo1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image01 {
            width: 100px;
            object-fit: cover;
          }
          .home-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-icon05 {
            width: 24px;
            height: 24px;
          }
          .home-mid {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text01 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text01:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-text02 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text02:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-text03 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text03:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-text04 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text04:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-text05 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text05:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-text06 {
            transition: 0.3s;
          }
          .home-text06:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-bot {
            flex: 0 0 auto;
            display: flex;
            margin-top: auto;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container02 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-link04 {
            display: contents;
          }
          .home-container03 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon07 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .home-icon07:hover {
            fill: var(--dl-color-purple-default);
          }
          .home-link05 {
            display: contents;
          }
          .home-container04 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon09 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .home-icon09:hover {
            fill: var(--dl-color-pink-default);
          }
          .home-link06 {
            display: contents;
          }
          .home-container05 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon11 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .home-icon11:hover {
            fill: var(--dl-color-turquoise-default);
          }
          .home-link07 {
            display: contents;
          }
          .home-container06 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon13 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .home-icon13:hover {
            fill: var(--dl-color-orange-default);
          }
          .home-main {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .home-blur-background {
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
          .home-hero {
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
            justify-content: space-between;
          }

          .home-container07 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text07 {
            font-size: 72px;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .home-link08 {
            display: contents;
          }
          .home-component {
            text-decoration: none;
          }
          .home-image02 {
            width: 431px;
            height: 565px;
            opacity: 0.85;
            align-self: flex-end;
            object-fit: cover;
            transition: 0.3s;
          }
          .home-image02:hover {
            animation: inherit;
            animation-fill-mode: initial;
          }
          .home-turquoise-cirble {
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
          .home-purple-circle {
            top: -98px;
            right: -68px;
            width: 400px;
            filter: blur(60px);
            opacity: 0.4;
            position: absolute;
            object-fit: cover;
          }
          .home-left {
            top: 653px;
            left: 0px;
            right: auto;
            width: 420px;
            bottom: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-right {
            top: 441px;
            left: auto;
            right: 0px;
            width: 612px;
            bottom: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-features {
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
          .home-text11 {
            color: var(--dl-color-gray-900);
            font-size: 48px;
            font-family: Inter;
            font-weight: 800;
            text-transform: none;
            text-decoration: none;
          }
          .home-link09 {
            max-width: 500px;
            text-align: center;
            text-decoration: none;
          }
          .home-features1 {
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-banner {
            width: 100%;
            display: flex;
            padding: 48px;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text12 {
            font-size: 3rem;
            text-align: center;
          }
          .home-text13 {
            max-width: 1400px;
            margin-top: 32px;
            text-align: center;
            margin-bottom: 32px;
          }
          .home-link10 {
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: 32px;
            padding-right: 32px;
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link10:hover {
            transform: scale(1.02);
          }
          .home-testimonials {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: center;
            background-color: var(--dl-color-turquoise-100);
          }
          .home-container08 {
            display: flex;
            flex-wrap: wrap;
            max-width: 1100px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-container09 {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text16 {
            z-index: 100;
            max-width: 500px;
          }
          .home-container10 {
            flex: 0 0 auto;
            width: 350px;
            display: flex;
            align-self: flex-end;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container11 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-doubleunit);
            flex-direction: column;
          }
          .home-container12 {
            width: 350px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container13 {
            width: 300px;
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-achievements {
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
          .home-container14 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-container15 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container16 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-container17 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-features2 {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            flex-direction: column;
          }
          .home-text26 {
            font-size: 3rem;
            margin-bottom: 32px;
          }
          .home-separator {
            width: 100px;
            height: 2px;
            background-color: #595959;
          }
          .home-container18 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 32px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image03 {
            width: 360px;
            height: 450px;
            opacity: 0.8;
            object-fit: cover;
            transition: 0.3s;
            flex-shrink: 0;
            margin-left: 64px;
            border-radius: var(--dl-radius-radius-radius2);
            object-position: left;
          }

          .home-container19 {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .home-purple-circle1 {
            top: 3518px;
            right: 70px;
            width: 531px;
            filter: blur(60px);
            height: 564px;
            opacity: 0.2;
            position: absolute;
            object-fit: cover;
          }
          .home-purple-circle2 {
            top: 2877px;
            left: 260px;
            width: 554px;
            filter: blur(60px);
            height: 540px;
            opacity: 0.2;
            position: absolute;
            object-fit: cover;
          }
          .home-hero1 {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            min-height: 80vh;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container20 {
            display: flex;
            margin-right: 48px;
            padding-right: 48px;
            flex-direction: column;
          }
          .home-text27 {
            font-size: 3rem;
            max-width: 450px;
          }
          .home-text28 {
            margin-top: 32px;
            margin-bottom: 32px;
          }
          .home-image04 {
            width: 400px;
            height: 497px;
            object-fit: cover;
            transition: 0.3s;
          }

          .home-left1 {
            top: 4151px;
            left: 21px;
            width: 420px;
            position: absolute;
            object-fit: cover;
          }
          .home-container21 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-container22 {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-gallery {
            width: 100%;
            display: grid;
            padding: 48px;
            grid-gap: var(--dl-space-space-unit);
            max-width: 1400px;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .home-steps {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            align-items: center;
            flex-direction: column;
          }
          .home-text33 {
            color: var(--dl-color-gray-black);
            font-size: 3rem;
          }
          .home-text34 {
            color: var(--dl-color-gray-700);
            font-size: 1.15rem;
            max-width: 600px;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-container23 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-step {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container24 {
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
          .home-line {
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
          .home-container25 {
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
          .home-icon15 {
            fill: #595959;
            width: 24px;
            height: 24px;
            transition: 0.3s;
          }

          .home-line1 {
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
          .home-container26 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 32px;
            padding-right: 32px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text37 {
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text39 {
            color: rgb(89, 89, 89);
            font-size: 0.75rem;
            text-align: center;
          }
          .home-step1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container27 {
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
          .home-line2 {
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
          .home-container28 {
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
          .home-icon17 {
            fill: #595959;
            width: 24px;
            height: 24px;
            transition: 0.3s;
          }

          .home-line3 {
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
          .home-container29 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 32px;
            padding-right: 32px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text40 {
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text41 {
            color: rgb(89, 89, 89);
            font-size: 0.75rem;
            text-align: center;
          }
          .home-step2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container30 {
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
          .home-line4 {
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
          .home-container31 {
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
          .home-icon19 {
            fill: #595959;
            width: 24px;
            height: 24px;
            transition: 0.3s;
          }

          .home-line5 {
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
          .home-container32 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 32px;
            padding-right: 32px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text44 {
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text46 {
            color: rgb(89, 89, 89);
            font-size: 0.75rem;
            text-align: center;
          }
          .home-step3 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container33 {
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
          .home-line6 {
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
          .home-container34 {
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
          .home-icon22 {
            fill: #595959;
            width: 24px;
            height: 24px;
            transition: 0.3s;
          }

          .home-line7 {
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
          .home-container35 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 32px;
            padding-right: 32px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text49 {
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text51 {
            color: rgb(89, 89, 89);
            font-size: 0.75rem;
            text-align: center;
          }
          .home-blog {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            align-items: center;
            justify-content: space-between;
          }
          .home-container36 {
            display: flex;
            align-items: center;
            margin-right: 32px;
            justify-content: space-between;
          }
          .home-container37 {
            display: flex;
            align-items: center;
            margin-right: 32px;
            justify-content: space-between;
          }
          .home-container38 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-hero2 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            min-height: 25;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: linear-gradient(
                270deg,
                rgba(255, 76, 92, 0.8) 15%,
                rgba(70, 229, 255, 0.2) 82%
              ),
              url('https://images.unsplash.com/photo-1513127971914-6a8656fc9718?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQwfHxvcmdhbml6ZWQlMjBvZmZpY2V8ZW58MHx8fHwxNjgwODIxMTc4&ixlib=rb-4.0.3&w=1500');
            background-position: top left, bottom right;
          }
          .home-text54 {
            color: var(--dl-color-gray-white);
            font-size: 3rem;
          }
          .home-text55 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-link11 {
            color: var(--dl-color-gray-white);
            font-size: 0.75rem;
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-white);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            text-decoration: none;
            background-color: transparent;
          }
          .home-link11:hover {
            transform: scale(1.02);
          }
          .home-cta {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #692e4a;
          }
          .home-container39 {
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
          .home-container40 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-image05 {
            top: -100;
            left: auto;
            width: 232px;
            bottom: auto;
            opacity: 0.8;
            object-fit: cover;
          }
          .home-image06 {
            top: auto;
            width: 286px;
            bottom: -100;
            height: 237px;
            opacity: 0.8;
            object-fit: cover;
            padding-right: 30px;
            padding-bottom: 19px;
          }
          .home-container41 {
            width: 520px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-image07 {
            top: -100px;
            left: auto;
            right: var(--dl-space-space-doubleunit);
            width: 232px;
            bottom: auto;
            opacity: 0.8;
            position: absolute;
            object-fit: cover;
          }
          .home-image08 {
            top: auto;
            left: var(--dl-space-space-doubleunit);
            right: auto;
            width: 232px;
            bottom: -100px;
            opacity: 0.8;
            position: absolute;
            object-fit: cover;
          }
          .home-footer {
            flex: 0 0 auto;
            color: var(--dl-color-gray-white);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .home-container42 {
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
          .home-image09 {
            width: 194px;
            height: 72px;
            object-fit: cover;
          }
          .home-container43 {
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-link12 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link12:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-link13 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link13:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-link14 {
            transition: 0.3s;
            white-space: nowrap;
            text-decoration: none;
          }
          .home-link14:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-divider {
            width: 100%;
            height: 1px;
            opacity: 0.2;
            background-color: var(--dl-color-gray-white);
          }
          .home-container44 {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text56 {
            color: var(--dl-color-gray-300);
            margin-top: var(--dl-space-space-unit);
          }
          .home-container45 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-link15 {
            display: contents;
          }
          .home-container46 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon24 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .home-icon24:hover {
            fill: var(--dl-color-purple-default);
          }
          .home-link16 {
            display: contents;
          }
          .home-container47 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon26 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .home-icon26:hover {
            fill: var(--dl-color-pink-default);
          }
          .home-link17 {
            display: contents;
          }
          .home-container48 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon28 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .home-icon28:hover {
            fill: var(--dl-color-turquoise-default);
          }
          .home-link18 {
            display: contents;
          }
          .home-container49 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon30 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .home-icon30:hover {
            fill: var(--dl-color-orange-default);
          }
          @media (max-width: 991px) {
            .home-container01 {
              display: none;
            }
            .home-hero {
              height: auto;
              flex-direction: column;
            }
            .home-container07 {
              align-items: center;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .home-text07 {
              text-align: center;
            }
            .home-text13 {
              max-width: 100%;
            }
            .home-container08 {
              flex-direction: column;
            }
            .home-container10 {
              align-self: center;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .home-container11 {
              align-items: center;
              margin-left: 0px;
            }
            .home-container13 {
              width: 350px;
            }
            .home-achievements {
              flex-direction: column;
            }
            .home-container15 {
              margin-top: var(--dl-space-space-doubleunit);
            }
            .home-features2 {
              align-items: center;
            }
            .home-container18 {
              flex-direction: column;
            }
            .home-image03 {
              width: 300px;
              height: 300px;
              margin-top: 32px;
              margin-left: 0px;
            }
            .home-hero1 {
              flex-direction: column;
            }
            .home-container20 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: 32px;
              padding-right: 0px;
            }
            .home-text27 {
              text-align: center;
            }
            .home-text28 {
              text-align: center;
              padding-left: 48px;
              padding-right: 48px;
            }
            .home-gallery {
              grid-template-columns: 1fr 1fr;
            }
            .home-text33 {
              text-align: center;
            }
            .home-text34 {
              text-align: center;
            }
            .home-blog {
              flex-direction: column;
            }
            .home-container36 {
              margin-right: 0px;
              margin-bottom: 48px;
            }
            .home-container37 {
              margin-right: 0px;
              margin-bottom: 48px;
            }
            .home-hero2 {
              flex-direction: column;
            }
            .home-text54 {
              text-align: center;
            }
            .home-text55 {
              text-align: center;
            }
            .home-container41 {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .home-menu {
              display: none;
            }
            .home-burger-menu {
              display: block;
            }
            .home-text07 {
              font-size: 50px;
              text-align: center;
            }
            .home-text11 {
              font-size: 40px;
            }
            .home-banner {
              padding-left: 32px;
              padding-right: 32px;
            }
            .home-text13 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container09 {
              align-items: center;
            }
            .home-text16 {
              font-size: 40px;
              text-align: center;
            }
            .home-text18 {
              font-size: 40px;
            }
            .home-features2 {
              padding-left: 32px;
              padding-right: 32px;
            }
            .home-text26 {
              text-align: center;
            }
            .home-container18 {
              flex-direction: column;
            }
            .home-hero1 {
              padding-left: 32px;
              padding-right: 32px;
            }
            .home-text28 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-image04 {
              width: 80%;
            }
            .home-gallery {
              padding-left: 32px;
              padding-right: 32px;
            }
            .home-steps {
              padding-left: 32px;
              padding-right: 32px;
            }
            .home-container23 {
              align-items: flex-start;
              padding-left: 80px;
              flex-direction: column;
            }
            .home-step {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .home-container24 {
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
            .home-line1 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-container26 {
              width: 100%;
              align-items: flex-start;
              padding-top: 32px;
              flex-direction: column;
              padding-bottom: 32px;
              justify-content: space-between;
            }
            .home-text37 {
              margin-top: 32px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text39 {
              text-align: left;
            }
            .home-step1 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .home-container27 {
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
            .home-line2 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-line3 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-container29 {
              width: 100%;
              align-items: flex-start;
              padding-top: 32px;
              flex-direction: column;
              padding-bottom: 32px;
              justify-content: space-between;
            }
            .home-text40 {
              margin-top: 32px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text41 {
              text-align: left;
            }
            .home-step2 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .home-container30 {
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
            .home-line4 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-line5 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-container32 {
              width: 100%;
              align-items: flex-start;
              padding-top: 32px;
              flex-direction: column;
              padding-bottom: 32px;
              justify-content: space-between;
            }
            .home-text44 {
              margin-top: 32px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text46 {
              text-align: left;
            }
            .home-step3 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .home-container33 {
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
            .home-line6 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-line7 {
              border-color: transparent;
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-container35 {
              width: 100%;
              align-items: flex-start;
              padding-top: 32px;
              flex-direction: column;
              padding-bottom: 32px;
              justify-content: space-between;
            }
            .home-text49 {
              margin-top: 32px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text51 {
              text-align: left;
            }
            .home-blog {
              padding-left: 32px;
              padding-right: 32px;
            }
            .home-hero2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container43 {
              flex-wrap: wrap;
              justify-content: center;
            }
            .home-container44 {
              flex-direction: column;
            }
            .home-text56 {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .home-container01 {
              display: none;
            }
            .home-bot {
              width: 100%;
            }
            .home-text11 {
              text-align: center;
            }
            .home-link09 {
              text-align: center;
            }
            .home-banner {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .home-container14 {
              align-items: center;
            }
            .home-text18 {
              text-align: center;
            }
            .home-text22 {
              text-align: center;
            }
            .home-container16 {
              flex-direction: column;
            }
            .home-container17 {
              flex-direction: column;
            }
            .home-features2 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .home-image03 {
              width: 250px;
              height: 250px;
            }
            .home-container19 {
              grid-template-columns: 1fr;
            }
            .home-hero1 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .home-container20 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-gallery {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .home-steps {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .home-container23 {
              padding-left: 0px;
            }
            .home-container26 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: 32px;
            }
            .home-text37 {
              margin-left: 0px;
              margin-right: 32px;
            }
            .home-container29 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: 32px;
            }
            .home-text40 {
              margin-left: 0px;
              margin-right: 32px;
            }
            .home-container32 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: 32px;
            }
            .home-text44 {
              margin-left: 0px;
              margin-right: 32px;
            }
            .home-container35 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: 32px;
            }
            .home-text49 {
              margin-left: 0px;
              margin-right: 32px;
            }
            .home-blog {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .home-hero2 {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-btn-group {
              flex-direction: column;
            }
            .home-link11 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
