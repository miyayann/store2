import Meta from "@/components/parts/meta";
import Hero from "@/components/template/hero";
import Container from "@/components/view/container";


export default function Custom404() {
  return (
    <Container>
      <Meta pageTitle={'404 - Page not found'}/>
      <Hero title={"404"} subtitle={"ページが見つかりません"}/>
    </Container>
  )
}