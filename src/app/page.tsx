import Navigation from '@/components/Navigation'
import Hero from '@/components/sections/Hero'
import ExecutionGap from '@/components/sections/ExecutionGap'
import TransformationOS from '@/components/sections/TransformationOS'
import BusinessOutcomes from '@/components/sections/BusinessOutcomes'
import Industries from '@/components/sections/Industries'
import TransformationJourney from '@/components/sections/TransformationJourney'
import CaseStudies from '@/components/sections/CaseStudies'
import IntelligentBusiness from '@/components/sections/IntelligentBusiness'
import WhySync4Tech from '@/components/sections/WhySync4Tech'
import TrustSection from '@/components/sections/TrustSection'
import Insights from '@/components/sections/Insights'
import FinalCTA from '@/components/sections/FinalCTA'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <ExecutionGap />
      <TransformationOS />
      <BusinessOutcomes />
      <Industries />
      <TransformationJourney />
      <CaseStudies />
      <IntelligentBusiness />
      <WhySync4Tech />
      <TrustSection />
      <Insights />
      <FinalCTA />
      <Footer />
    </main>
  )
}
