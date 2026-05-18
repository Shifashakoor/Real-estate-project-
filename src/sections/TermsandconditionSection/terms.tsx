import Container from '../../components/layout/Container'; 
import Heading from '../../components/ui/heading';       
import Paragraph from '../../components/ui/paragraph';  
import { useEffect } from 'react'; 

const Terms = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container className="max-w-4xl mx-auto bg-slate-50/50 p-6 md:p-10 rounded-3xl border border-slate-200/80 font-['Plus_Jakarta_Sans',sans-serif] my-0 space-y-8 text-left">
      
      {/* Main Header Center Aligned */}
      <Container className="space-y-2 mb-8 bg-transparent p-0 border-0 shadow-none text-center">
        <Heading 
          text="Terms and Conditions" 
          level="h1" 
          className="text-4xl font-semibold text-[#101828] tracking-tight" 
        />
        <Paragraph 
          text="Property Marketplace Regulations & Platform Usage Policies" 
          className="text-[#0066cc] text-sm font-medium" 
        />
      </Container>

      {/* Intro Text */}
      <Paragraph 
        text="By accessing or using the Estatery Platform for Real Estate Marketplace services ('Estatery', 'the Platform', 'we'), you agree to comply with these Terms and Conditions, the Privacy Policy, and all related notices. Your continued use of the Platform constitutes your acceptance of the most updated version of these terms."
        className="text-slate-600 text-sm leading-relaxed"
      />

      {/* 1. Introduction */}
      <Container className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
        <Heading text="1. Introduction" level="h3" className="text-lg font-semibold text-[#101828]" />
        <Paragraph 
          text="Estatery provides property listing management, agent dashboards, and real estate marketing services through digital marketplace systems. Use of the Platform is conditional upon full acceptance of these Terms and Conditions, the Privacy Policy, the Financial Policy, and Property Listing Regulations." 
          className="text-slate-600 text-sm leading-relaxed" 
        />
      </Container>

      {/* 2. Platform Usage Rules */}
      <Container className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
        <Heading text="2. Platform Usage Rules" level="h3" className="text-lg font-semibold text-[#101828]" />
        
        <div className="space-y-2">
          <Heading text="2.1 Account Creation and User Responsibilities" level="h4" className="text-sm font-semibold text-[#0066cc]" />
          <Paragraph text="You agree to:" className="text-slate-600 text-sm font-medium" />
          <ul className="list-disc pl-5 space-y-1 text-slate-600 text-sm">
            <li><Paragraph text="Provide accurate, complete, and up-to-date personal and professional real estate information." className="inline text-slate-600 text-sm" /></li>
            <li><Paragraph text="Maintain a valid email address and verified registration profile." className="inline text-slate-600 text-sm" /></li>
            <li><Paragraph text="Comply with all applicable property laws and local real estate authority regulations." className="inline text-slate-600 text-sm" /></li>
            <li><Paragraph text="Protect your account credentials and dashboards from unauthorized access." className="inline text-slate-600 text-sm" /></li>
          </ul>
        </div>

        <div className="space-y-2 pt-2">
          <Heading text="2.2 Account Ownership" level="h4" className="text-sm font-semibold text-[#0066cc]" />
          <Paragraph text="Your Estatery account is personal, non-transferable, and remains under your full responsibility. You are fully responsible for all listings and property deals conducted under your account." className="text-slate-600 text-sm leading-relaxed" />
        </div>

        <div className="space-y-2 pt-2">
          <Heading text="2.3 Suspension or Refusal of Service" level="h4" className="text-sm font-semibold text-[#0066cc]" />
          <Paragraph text="Estatery reserves the right to suspend, restrict, or terminate any account that violates platform verification policies, provides fake property data, or engages in fraudulent listing behavior." className="text-slate-600 text-sm leading-relaxed" />
        </div>
      </Container>

      {/* 3. Platform Content and Intellectual Property */}
      <Container className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
        <Heading text="3. Platform Content and Intellectual Property" level="h3" className="text-lg font-semibold text-[#101828]" />
        <Paragraph text="All texts, property videos, analytical charts, images, map layouts, software, and marketing data available on Estatery are protected under property and digital intellectual property laws." className="text-slate-600 text-sm leading-relaxed" />
        <Paragraph text="Users are prohibited from copying, reproducing, scraping, or using portal listing content for unauthorized commercial purposes." className="text-slate-600 text-sm leading-relaxed" />
      </Container>

      {/* 4. Privacy and Data Protection */}
      <Container className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
        <Heading text="4. Privacy and Data Protection" level="h3" className="text-lg font-semibold text-[#101828]" />
        <Heading text="4.1 Personal and Property Data" level="h4" className="text-sm font-semibold text-[#0066cc]" />
        <ul className="list-disc pl-5 space-y-1 text-slate-600 text-sm">
          <li><Paragraph text="Delivery of verified property services and consultant authorization checks." className="inline text-slate-600 text-sm" /></li>
          <li><Paragraph text="Listing updates, secure coordinate mapping, and marketplace regulatory compliance." className="inline text-slate-600 text-sm" /></li>
        </ul>
        <Heading text="4.2 Technical and Non-Personal Data" level="h4" className="text-sm font-semibold text-[#0066cc] pt-2" />
        <Paragraph text="Estatery may collect technical data including cookies, browser type, device system, and IP address to enhance portal dashboard security and user experience analytics." className="text-slate-600 text-sm leading-relaxed" />
      </Container>

      {/* 5. Service Availability */}
      <Container className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
        <Heading text="5. Service Availability and Limitations of Liability" level="h3" className="text-lg font-semibold text-[#101828]" />
        <Paragraph text="Estatery is not liable for user-side internet connectivity issues, external analytical system downtime, data sync lag, or loading crashes. The Platform is provided 'as is' and 'as available'." className="text-slate-600 text-sm leading-relaxed" />
      </Container>

      {/* 6. Marketplace Portal Services */}
      <Container className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
        <Heading text="6. Portal Marketplace Services" level="h3" className="text-lg font-semibold text-[#101828]" />
        
        <div className="space-y-1">
          <Heading text="6.1 Verified Listings and Interactive Search" level="h4" className="text-sm font-semibold text-[#0066cc]" />
          <Paragraph text="Updated dynamically on user feeds. Coordinates and image coordinates are verified. Platform badges are issued upon successful legal check cycles." className="text-slate-600 text-sm leading-relaxed" />
        </div>

        <div className="space-y-1 pt-2">
          <Heading text="6.2 Automated Real Estate Alerts" level="h4" className="text-sm font-semibold text-[#0066cc]" />
          <Paragraph text="Dispatched via tracking filters. Direct chat logs, price modifications, and parameter configurations match registered users with property dealer targets automatically." className="text-slate-600 text-sm leading-relaxed" />
        </div>
      </Container>

      {/* 7. Listing Restrictions & Duplicate Policy */}
      <Container className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
        <Heading text="7. Listing Restrictions, Duplicate Postings & Premium Product Policy" level="h3" className="text-lg font-semibold text-[#101828]" />
        <Paragraph text="To preserve marketplace data integrity, prevent duplicate property listings, and ensure transparent user feeds, brokers are not permitted to submit matching property files multiple times." className="text-slate-600 text-sm leading-relaxed" />
        <Heading text="7.3 Portal Matrix Adjustments" level="h4" className="text-sm font-semibold text-[#0066cc]" />
        <Paragraph text="In cases involving identical listings or coordinate duplication, Estatery reserves the right to consolidate profiles, adjust allocations, or modify agency manager access rights." className="text-slate-600 text-sm leading-relaxed" />
      </Container>

      {/* 8. Registration Verification */}
      <Container className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
        <Heading text="8. User Verification & Property Dealer Eligibility Rules" level="h3" className="text-lg font-semibold text-[#101828]" />
        <Heading text="8.3 Incorrect Dashboard Setup" level="h4" className="text-sm font-semibold text-[#0066cc]" />
        <Paragraph text="Users are fully responsible for accurate profile configurations. If premium tags are recorded under wrong or unverified broker names, the verification badges may be permanently forfeited." className="text-slate-600 text-sm leading-relaxed" />
      </Container>

      {/* 9. Fees, Packages, and Refunds */}
      <Container className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
        <Heading text="9. Listing Packages, Payments, and Refunds" level="h3" className="text-lg font-semibold text-[#101828]" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <Heading text="9.1 Subscription Charges" level="h4" className="text-sm font-semibold text-[#0066cc]" />
            <Paragraph text="Portal registration authorizes Estatery to process package fees. Outstanding balances for premium spaces must be settled promptly to ensure listing status." className="text-slate-500 text-xs leading-relaxed" />
          </div>
          <div className="space-y-1">
            <Heading text="9.2 Package Policy" level="h4" className="text-sm font-semibold text-[#0066cc]" />
            <Paragraph text="Active premium packages and banner feature boosts are strictly non-refundable. Support cases apply only under fatal technical database failures." className="text-slate-500 text-xs leading-relaxed" />
          </div>
        </div>
      </Container>

      {/* 10 - 13. Short Dynamic Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-transparent p-0 border-0 shadow-none">
        <Container className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-1">
          <Heading text="10. Cookies & Portal Analytics" level="h4" className="text-sm font-semibold text-[#101828]" />
          <Paragraph text="Estatery uses cookies to keep you logged in. External WhatsApp or developer links remain outside platform liability." className="text-slate-600 text-xs leading-relaxed" />
        </Container>

        <Container className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-1">
          <Heading text="11. Support & Listing Complaints" level="h4" className="text-sm font-semibold text-[#101828]" />
          <Paragraph text="Inquiries regarding fake listings may be submitted through official CRM channels. Resolution timelines vary by case complexity." className="text-slate-600 text-xs leading-relaxed" />
        </Container>

        <Container className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-1">
          <Heading text="12. Website Modifications" level="h4" className="text-sm font-semibold text-[#101828]" />
          <Paragraph text="Estatery may modify portal packages, map layout interfaces, or data structures at any time without uninterrupted service guarantees." className="text-slate-600 text-xs leading-relaxed" />
        </Container>

        <Container className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-1">
          <Heading text="13. Legal Jurisdiction" level="h4" className="text-sm font-semibold text-[#101828]" />
          <Paragraph text="All real estate disputes and dashboard claims fall under the exclusive legal jurisdiction of the official regional courts." className="text-slate-600 text-xs leading-relaxed" />
        </Container>
      </div>

    </Container>
  );
};

export default Terms;