import Container from '../../components/layout/Container'; 
import Heading from '../../components/ui/heading';       
import Paragraph from '../../components/ui/paragraph';  
import { useState, useEffect } from 'react'; 

const Privacy = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <Container className="max-w-4xl mx-auto bg-slate-50/50 p-6 md:p-10 rounded-3xl border border-slate-200/80 font-['Plus_Jakarta_Sans',sans-serif] my-0 text-center space-y-6">
      
      <Container className="space-y-2 mb-8 bg-transparent p-0 border-0 shadow-none text-center">
        <Heading 
          text="Estatery Technical Support" 
          level="h1" 
          className="text-4xl font-semibold text-[#101828] tracking-tight" 
        />
        <Paragraph 
          text="Our support team helps property agents, buyers, and sellers stay connected, resolve listing issues quickly, and get the most out of the Estatery Marketplace." 
          className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed" 
        />
      </Container>

      {/* 1. Communication Tools */}
      <Container className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-left space-y-3">
        <Heading 
          text="1. Communication Tools in the Real Estate Portal" 
          level="h3" 
          className="text-lg font-semibold text-[#0066cc]" 
        />
        <Paragraph 
          text="The Estatery system provides several tools that facilitate communication between the property consultants and the clients, including:" 
          className="text-slate-600 text-sm leading-relaxed" 
        />
        <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
          <li>
            <Paragraph text="Direct chat messages inside virtual property dashboards and recorded offers." className="inline text-slate-600 text-sm" />
          </li>
          <li>
            <Paragraph text="Automated email alerts for price drops and new property matching parameters." className="inline text-slate-600 text-sm" />
          </li>
          <li>
            <Paragraph text="System news updates regarding structural features and verified listings." className="inline text-slate-600 text-sm" />
          </li>
          <li>
            <Paragraph text="WhatsApp configurations for real-time coordination with official dealers." className="inline text-slate-600 text-sm" />
          </li>
        </ul>
      </Container>

      {/* 2. Beneficiaries */}
      <Container className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-left space-y-3">
        <Heading 
          text="2. Beneficiaries of the Marketplace Service" 
          level="h3" 
          className="text-lg font-semibold text-[#0066cc]" 
        />
        <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
          <li>
            <Paragraph text="Platform Agents & Brokers: Registered on the portal to deliver verified property details." className="inline text-slate-600 text-sm font-normal" />
          </li>
          <li>
            <Paragraph text="All Registered Clients: Buyers, sellers, or renters exploring residential and commercial units." className="inline text-slate-600 text-sm font-normal" />
          </li>
          <li>
            <Paragraph text="Quality Control Teams: Quality controllers monitoring transparent and legal marketplace deals." className="inline text-slate-600 text-sm font-normal" />
          </li>
        </ul>
      </Container>

      {/* 3. Channels */}
      <Container className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-left space-y-4">
        <Heading 
          text="3. Channels for Providing the Property Support Service" 
          level="h3" 
          className="text-lg font-semibold text-[#0066cc]" 
        />
        <Container className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 bg-transparent p-0 border-0 shadow-none">
          <Container 
            onClick={() => setActiveCard("contact-center")}
            className="border border-slate-200 rounded-lg p-4 bg-slate-50/50 space-y-1 shadow-none cursor-pointer hover:border-[#0066cc] hover:bg-blue-50/30 transition-all text-left"
          >
            <Heading 
              text="Direct Contact Center"
              level="h4" 
              className="text-sm font-semibold text-[#101828]" 
            />
            <Paragraph 
              text="Phone number: 00966531495300 available during official working shifts." 
              className="text-xs text-slate-500 leading-relaxed" 
            />
          </Container>

          <Container 
            onClick={() => setActiveCard("email-support")}
            className="border border-slate-200 rounded-lg p-4 bg-slate-50/50 space-y-1 shadow-none cursor-pointer hover:border-[#0066cc] hover:bg-blue-50/30 transition-all text-left"
          >
            <Heading
              text="Email for CRM Help" 
              level="h4"
              className="text-sm font-semibold text-[#101828]" 
            />
            <Paragraph
              text="Submit your data queries or image upload reports to support@estatery.com." 
              className="text-xs text-slate-500 leading-relaxed" 
            />
          </Container>

          <Container 
            onClick={() => setActiveCard("social-apps")}
            className="border border-slate-200 rounded-lg p-4 bg-slate-50/50 space-y-1 shadow-none cursor-pointer hover:border-[#0066cc] hover:bg-blue-50/30 transition-all text-left"
          >
            <Heading
              text="Social Applications"
              level="h4"
              className="text-sm font-semibold text-[#101828]" 
            />
            <Paragraph
              text="Used to deliver rapid, secure updates regarding customer dashboard setups." 
              className="text-xs text-slate-500 leading-relaxed" 
            />
          </Container>
        </Container>
      </Container>

      {/* 4. Services and Systems */}
      <Container className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-left space-y-3">
        <Heading 
          text="4. Services and Systems Offered through the Estatery Service" 
          level="h3" 
          className="text-lg font-semibold text-[#b37400]" 
        />
        <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
          <li>
            <Paragraph text="Assistance in uploading property coordinates, image files, and map locations." className="inline text-slate-600 text-sm" />
          </li>
          <li>
            <Paragraph text="Technical guidance on how to use interactive analytical charts and price filters." className="inline text-slate-600 text-sm" />
          </li>
          <li>
            <Paragraph text="Providing necessary user badges and verification status checks." className="inline text-slate-600 text-sm" />
          </li>
          <li>
            <Paragraph text="Logging technical parameters to solve loading crashes inside the property feeds." className="inline text-slate-600 text-sm" />
          </li>
          <li>
            <Paragraph text="Agency manager access configuration for massive broker networks." className="inline text-slate-600 text-sm" />
          </li>
        </ul>
      </Container>

      {/* 5. Expected Response Time */}
      <Container className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-left space-y-3">
        <Heading 
          text="5. Expected Response Time Windows" 
          level="h3" 
          className="text-lg font-semibold text-[#008080]" 
        />
        <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
          <li>
            <Paragraph text="WhatsApp Connect Modules: Immediate response pathways, whether from an agent or broker." className="inline text-slate-600 text-sm" />
          </li>
          <li>
            <Paragraph text="Email Ticketing System: Technical error updates are processed and dispatched within two to five hours." className="inline text-slate-600 text-sm" />
          </li>
        </ul>
      </Container>

      {/* 6. Roles & Responsibilities */}
      <Container className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-left space-y-4">
        <Heading 
          text="6. Roles, Responsibilities, and Support Authorities" 
          level="h3" 
          className="text-lg font-semibold text-[#800080]" 
        />
        <Paragraph text="Roles are strictly divided into authorization tiers:" className="text-slate-500 text-xs" />
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-transparent p-0 border-0 shadow-none">
          <Container className="border border-slate-200 rounded-lg p-4 bg-slate-50/50 space-y-2 shadow-none text-left">
            <Heading text="Level One: Customer Listing Center" level="h4" className="text-sm font-semibold text-[#101828]" />
            <ul className="list-disc pl-4 text-xs text-slate-600 space-y-1">
              <li><Paragraph text="Receives all initial user calls and property report tickets." className="inline text-xs text-slate-600" /></li>
              <li><Paragraph text="Provides quick guidance based on the standard web interface features." className="inline text-xs text-slate-600" /></li>
            </ul>
          </Container>

          <Container className="border border-slate-200 rounded-lg p-4 bg-slate-50/50 space-y-2 shadow-none text-left">
            <Heading text="Level Two: Advanced Operations Department" level="h4" className="text-sm font-semibold text-[#101828]" />
            <ul className="list-disc pl-4 text-xs text-slate-600 space-y-1">
              <li><Paragraph text="Completes complex mapping database patches and UI layout fixes." className="inline text-xs text-slate-600" /></li>
              <li><Paragraph text="Ensures system stability and platform satisfaction targets are met." className="inline text-xs text-slate-600" /></li>
            </ul>
          </Container>
        </Container>
      </Container>

      {/* 7. Measuring Satisfaction */}
      <Container className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-left space-y-3">
        <Heading 
          text="7. Measuring Marketplace Beneficiary Satisfaction" 
          level="h3" 
          className="text-lg font-semibold text-[#101828]" 
        />
        <Paragraph 
          text="The quality of the technical support and listing management is measured after issue resolution cycles conclude. This is handled via forms sent through registered emails or directly inside the portal management system dashboard." 
          className="text-slate-600 text-sm leading-relaxed" 
        />
      </Container>

      {/* Action Button */}
      
      {/* Dynamic Pop-up Modal System */}
      {activeCard && (
        <Container className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 border-0 rounded-none shadow-none">
          <Container className="bg-white max-w-md w-full p-6 rounded-2xl shadow-xl space-y-4 border border-slate-100 text-left">
            {activeCard === "contact-center" && (
              <Container className="p-0 border-0 shadow-none bg-transparent space-y-2">
                <Heading text="📞 Direct Contact Center" level="h3" className="text-lg font-semibold text-[#101828]" />
                <Paragraph text="Phone Hotline: 00966531495300" className="text-sm font-medium text-[#0066cc]" />
                <Paragraph text="Timing: Monday to Friday (9:00 AM - 6:00 PM PST). Our platform representatives will assist you with urgent panel errors." className="text-xs text-slate-500 leading-relaxed" />
              </Container>
            )}

            {activeCard === "email-support" && (
              <Container className="p-0 border-0 shadow-none bg-transparent space-y-2">
                <Heading text="✉️ CRM Technical Helpdesk" level="h3" className="text-lg font-semibold text-[#101828]" />
                <Paragraph text="Official Email: support@estatery.com" className="text-sm font-medium text-[#0066cc]" />
                <Paragraph text="Response Matrix: Please forward your query with code trace screenshots. High priority dashboard tasks are updated inside 2 business hours." className="text-xs text-slate-500 leading-relaxed" />
              </Container>
            )}

            {activeCard === "social-apps" && (
              <Container className="p-0 border-0 shadow-none bg-transparent space-y-2">
                <Heading text="💬 Integrated Dynamic Apps" level="h3" className="text-lg font-semibold text-[#101828]" />
                <Paragraph text="Channels: WhatsApp Automated Bot Service" className="text-sm font-medium text-[#0066cc]" />
                <Paragraph text="Our system logs notifications across messaging webhooks to update agents automatically when new interface elements are processed." className="text-xs text-slate-500 leading-relaxed" />
              </Container>
            )}

            <Container className="pt-2 flex justify-end p-0 border-0 shadow-none bg-transparent">
              <button 
                onClick={() => setActiveCard(null)} 
                className="bg-slate-900 text-white font-medium text-xs px-4 py-2 rounded-lg hover:bg-slate-800 transition-all"
              >
                Close Window
              </button>
            </Container>
          </Container>
        </Container>
      )}
    </Container>
  );
};

export default Privacy;