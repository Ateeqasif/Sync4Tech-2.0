import Navigation from '@/components/Navigation'
import Hero from '@/components/sections/Hero'
import ExecutionGap from '@/components/sections/ExecutionGap'
import TransformationOS from '@/components/sections/TransformationOS'
import BusinessOutcomes from '@/components/sections/BusinessOutcomes'
import Industries from '@/components/sections/Industries'
import TransformationJourney from '@/components/sections/TransformationJourney'
import CaseStudies from '@/components/sections/CaseStudies'
import InfinityLoop from '@/components/sections/InfinityLoop'
import IntelligentBusiness from '@/components/sections/IntelligentBusiness'
import WhySync4Tech from '@/components/sections/WhySync4Tech'
import TrustSection from '@/components/sections/TrustSection'
import Insights from '@/components/sections/Insights'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'
import Footer from '@/components/Footer'
import PageLoader from '@/components/PageLoader'
import CustomCursor from '@/components/CustomCursor'
import ScrollProgress from '@/components/ScrollProgress'
import ClickEffect from '@/components/ClickEffect'
import ExpertPopup from '@/components/ExpertPopup'
import AIChatBot from '@/components/AIChatBot'
import ScrollToTop from '@/components/ScrollToTop'
import AccessibilityPanel from '@/components/AccessibilityPanel'

export default function Home() {
  return (
    <>
      <PageLoader />
      <CustomCursor />
      <ScrollProgress />
      <ClickEffect />
      <ExpertPopup />
      <ScrollToTop />
      <AIChatBot />
      <AccessibilityPanel />
      <Navigation />
      <main>
        <Hero />
        <TransformationOS />
        <BusinessOutcomes />
        <ExecutionGap />
        <Industries />
        <IntelligentBusiness />
        <TransformationJourney />
        <CaseStudies />
        <InfinityLoop />
        <WhySync4Tech />
        <TrustSection />
        <Insights />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
