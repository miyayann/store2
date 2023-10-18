import Contact from '@/components/parts/contact'
import Hero from '@/components/template/hero'
import PostBody from '@/components/template/post-body'
import Container from '@/components/view/container'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from '@/components/view/two-column'
import Image from 'next/image'
import React from 'react'
import eyecatch from "@/../public/about.jpg"
import Meta from '@/components/parts/meta'
import Accordion from '@/components/template/accordion'

const About = () => {
  return (
    <Container>
      <Meta pageTitle="About" pageDesc="AboutPage"/>
      <Hero title={"About"} subtitle={"subAbout"}/>

      <figure>
        <Image 
          src={eyecatch}
          alt=""
          style={{
            width: '100%',
            height: 'auto',
          }}
          sizes="(min-width: 1152px) 1152px, 100vw"
          priority
          placeholder="blur"
        />
      </figure>

    <TwoColumn>
      <TwoColumnMain>
      <PostBody>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tempore voluptas, impedit adipisci recusandae velit optio suscipit molestias voluptatum ut aliquam dignissimos mollitia vitae id nesciunt, dolor libero veniam eligendi.</p>

            <h2>Title is Mine</h2>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel aperiam minima quidem adipisci. Alias ipsum libero aperiam officiis aspernatur hic temporibus delectus doloribus est incidunt unde, ipsam, quasi, perspiciatis iste?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempora non, perspiciatis adipisci hic illum ratione provident sunt reprehenderit ipsa. Earum ad recusandae illum minima quae? Tempora laboriosam esse eum.</p>

            <h3>SuginamiMelody</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ratione minus optio ipsam nulla repellendus quisquam error, quae sint, dolores fuga dolore fugiat explicabo omnis obcaecati culpa? Ea, consequuntur obcaecati.</p>

            <h2>Faq</h2>
          <Accordion heading="プログラミングのポイントについて">
            <p>プログラミングのポイントは、作りたいものを作ることです。楽しいことから思いつき。目標とゴールを決め、そこに向かって様々な課題を設定していきながら、プログラムを作っていきます。</p>
          </Accordion>
          <Accordion heading="プログラミングのポイントについて">
            <p>プログラミングのポイントは、作りたいものを作ることです。楽しいことから思いつき。目標とゴールを決め、そこに向かって様々な課題を設定していきながら、プログラムを作っていきます。</p>
          </Accordion>
          <Accordion heading="プログラミングのポイントについて">
            <p>プログラミングのポイントは、作りたいものを作ることです。楽しいことから思いつき。目標とゴールを決め、そこに向かって様々な課題を設定していきながら、プログラムを作っていきます。</p>
          </Accordion>
          </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
              <Contact/>
          </TwoColumnSidebar>
        </TwoColumn>
    </Container>
  )
}

export default About
