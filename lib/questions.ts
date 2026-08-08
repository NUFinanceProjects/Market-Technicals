import type { InterviewQuestion } from "@/lib/types";

export const questions: InterviewQuestion[] = [
  {
    id: "acct-001",
    question:
      "A company buys $100 of equipment using cash. Walk me through the impact on the three financial statements at purchase and over the first year assuming straight-line depreciation.",
    category: "Accounting",
    difficulty: "Beginner",
    mode: "Technical Questions",
    expectedConcepts: [
      "Cash decreases and PP&E increases at purchase",
      "No immediate income statement impact at purchase",
      "Depreciation reduces operating income and net income over time",
      "Depreciation is added back on the cash flow statement",
      "PP&E declines by accumulated depreciation and retained earnings falls through net income",
    ],
    referenceAnswer:
      "At purchase, cash goes down by $100 and PP&E goes up by $100, so total assets are unchanged and there is no immediate income statement impact. Over the first year, depreciation reduces operating income, pre-tax income, and net income. On the cash flow statement, net income starts lower, but depreciation is added back because it is non-cash. On the balance sheet, PP&E is reduced by accumulated depreciation and retained earnings is lower by the after-tax depreciation expense.",
    followUpConcept:
      "If the company financed the equipment with debt instead of cash, how would the statements differ?",
    sourceType: "local",
  },
  {
    id: "acct-002",
    question:
      "EBITDA increases year over year, but free cash flow decreases. What could explain the divergence?",
    category: "Accounting",
    difficulty: "Intermediate",
    mode: "Market Scenarios",
    marketScenario:
      "A company reports strong adjusted EBITDA growth in earnings, but management also discloses a sharp decline in free cash flow.",
    expectedConcepts: [
      "Working capital investment can consume cash",
      "Higher CapEx can reduce free cash flow",
      "Cash taxes can rise even if EBITDA improves",
      "Cash interest can increase from higher debt or rates",
      "EBITDA excludes several real cash costs and timing effects",
    ],
    referenceAnswer:
      "EBITDA can grow while free cash flow falls because EBITDA excludes several cash uses. The company may have invested more in working capital, such as inventory or receivables, or increased CapEx. Cash taxes or cash interest could also rise. So the key is that EBITDA is a profitability proxy before many operating and financing cash drains, while free cash flow captures the actual cash left after those uses.",
    followUpConcept:
      "Which of those drivers would you view as most concerning for valuation quality?",
    sourceType: "local",
  },
  {
    id: "ev-001",
    question:
      "Why do we subtract cash when calculating enterprise value from equity value?",
    category: "Enterprise Value and Equity Value",
    difficulty: "Beginner",
    mode: "Technical Questions",
    expectedConcepts: [
      "Enterprise value measures value of operating assets to all capital providers",
      "Cash is generally a non-operating asset",
      "A buyer effectively receives the target's cash at close",
      "Excess cash can be used to reduce purchase price or repay debt",
    ],
    referenceAnswer:
      "Enterprise value is intended to reflect the value of the operating business available to all capital providers. Cash is usually treated as a non-operating asset, and in an acquisition the buyer effectively gets that cash on the balance sheet. So we subtract cash from equity value plus debt-like claims to avoid paying for operating assets and then also counting cash as part of those assets.",
    followUpConcept:
      "Would you subtract all cash or only excess cash in a real transaction analysis?",
    sourceType: "local",
  },
  {
    id: "ev-002",
    question:
      "A company announces a large debt-funded share repurchase. How could enterprise value and equity value change immediately after the transaction?",
    category: "Enterprise Value and Equity Value",
    difficulty: "Advanced",
    mode: "Market Scenarios",
    marketScenario:
      "A public company borrows several billion dollars and uses the proceeds to repurchase shares.",
    expectedConcepts: [
      "Debt increases from the borrowing",
      "Share count and equity value may decrease from the repurchase",
      "Enterprise value may be similar mechanically if cash is immediately used",
      "Market reaction can change equity value depending on perceived risk and accretion",
      "Higher leverage increases financial risk and can affect valuation multiples",
    ],
    referenceAnswer:
      "Mechanically, the company raises debt and uses the cash to buy back equity, so debt increases and share count falls. If the cash is immediately spent, enterprise value may not change much purely from the financing transaction because the increase in debt is offset by lower equity value, assuming no market re-rating. In practice, the stock may move if investors view the buyback as value-accretive or worry about higher leverage, which can change both equity value and enterprise value.",
    followUpConcept:
      "When would a leveraged buyback be EPS accretive but still value-destructive?",
    sourceType: "local",
  },
  {
    id: "val-001",
    question:
      "A company trades at a higher EBITDA multiple than its peers. What are reasonable explanations besides the market being wrong?",
    category: "Valuation",
    difficulty: "Intermediate",
    mode: "Technical Questions",
    expectedConcepts: [
      "Higher expected growth",
      "Stronger margins or margin expansion potential",
      "Better revenue quality or recurring revenue",
      "Lower risk or stronger competitive position",
      "Differences in accounting, cyclicality, leverage, or one-time items",
    ],
    referenceAnswer:
      "A higher EBITDA multiple can be justified if the company has faster growth, better margins, higher recurring revenue, lower cyclicality, or a stronger competitive position. It could also reflect cleaner earnings quality or lower business risk. Before concluding it is overvalued, I would normalize EBITDA, check one-time items, compare growth and margin profiles, and make sure the peer set is truly comparable.",
    followUpConcept:
      "How would you decide whether the premium is too high?",
    sourceType: "local",
  },
  {
    id: "val-002",
    question:
      "Credit spreads widen sharply across the market. How might that affect valuation multiples?",
    category: "Valuation",
    difficulty: "Advanced",
    mode: "Market Scenarios",
    marketScenario:
      "Risk appetite falls and lenders demand much higher spreads for new leveraged loans and high-yield bonds.",
    expectedConcepts: [
      "Higher required returns can pressure valuation multiples",
      "Higher debt costs can reduce sponsor buying power",
      "Lower leverage availability can reduce transaction multiples",
      "Wider spreads may signal higher macro or default risk",
      "Impact varies by company quality and cash flow resilience",
    ],
    referenceAnswer:
      "Wider credit spreads usually increase required returns and borrowing costs, which can pressure valuation multiples. For financial sponsors, more expensive debt and lower leverage reduce how much they can pay while still hitting target returns. Wider spreads also often signal higher macro or default risk, so equity investors may demand a higher return as well. The impact would be more severe for cyclical or highly levered companies than for resilient, cash-generative businesses.",
    followUpConcept:
      "How would this show up differently in a public trading comp versus an LBO model?",
    sourceType: "local",
  },
  {
    id: "dcf-001",
    question:
      "Interest rates fall significantly. Walk me through the possible impact on a company's DCF valuation and which assumptions may change.",
    category: "DCF",
    difficulty: "Intermediate",
    mode: "Market Scenarios",
    marketScenario:
      "The Federal Reserve cuts rates after inflation cools and investors begin pricing in lower yields.",
    expectedConcepts: [
      "Lower risk-free rate can reduce cost of equity",
      "Lower borrowing costs can reduce after-tax cost of debt",
      "Lower WACC increases present value of future cash flows",
      "Growth, margins, and transaction activity may change indirectly",
      "Terminal value is often especially sensitive to discount rate assumptions",
    ],
    referenceAnswer:
      "Lower rates can increase a DCF valuation because the risk-free rate may fall, reducing the cost of equity, and borrowing costs may decline, reducing the after-tax cost of debt. A lower WACC raises the present value of projected free cash flows and usually has a large impact on terminal value. I would also consider second-order effects: lower rates could support demand, growth, refinancing, or M&A activity, but those operating assumptions should be justified separately rather than automatically increased.",
    followUpConcept:
      "Why might a lower rate environment not increase a specific company's valuation?",
    sourceType: "local",
  },
  {
    id: "dcf-002",
    question:
      "In a DCF, why might using a very high terminal growth rate be problematic even if the company has grown quickly historically?",
    category: "DCF",
    difficulty: "Beginner",
    mode: "Technical Questions",
    expectedConcepts: [
      "Terminal growth represents long-term steady-state growth",
      "Long-term growth should not exceed the economy indefinitely",
      "Small changes can materially affect terminal value",
      "Historical high growth usually fades as companies mature",
    ],
    referenceAnswer:
      "The terminal growth rate is meant to represent mature, steady-state growth, not near-term momentum. If it exceeds long-term GDP or inflation-plus-real-growth assumptions for too long, the company eventually becomes unrealistically large relative to the economy. It is also very sensitive because terminal value is often a large share of a DCF. Even a fast-growing company usually needs a fade period before terminal value.",
    followUpConcept:
      "How would you cross-check a terminal growth assumption?",
    sourceType: "local",
  },
  {
    id: "ma-001",
    question:
      "Walk me through the main drivers of whether an acquisition is accretive or dilutive to EPS.",
    category: "M&A",
    difficulty: "Intermediate",
    mode: "Technical Questions",
    expectedConcepts: [
      "Purchase price and valuation multiple",
      "Financing mix of cash, debt, and stock",
      "Cost of debt and lost interest income",
      "Buyer and seller earnings yield relationship",
      "Synergies, integration costs, amortization, and tax effects",
    ],
    referenceAnswer:
      "Accretion or dilution depends on the earnings acquired relative to the cost of financing the deal. Key drivers include the purchase multiple, the buyer's trading multiple, cash versus debt versus stock financing, interest expense or lost interest income, synergies, integration costs, amortization, and taxes. A lower purchase multiple, meaningful synergies, cheaper debt, or using high-multiple stock can support accretion, while expensive financing or a high purchase price can drive dilution.",
    followUpConcept:
      "Can an EPS-dilutive deal still create shareholder value?",
    sourceType: "local",
  },
  {
    id: "ma-002",
    question:
      "A buyer's stock drops after it announces an acquisition. What might investors be worried about?",
    category: "M&A",
    difficulty: "Intermediate",
    mode: "Market Scenarios",
    marketScenario:
      "A strategic acquirer announces a large transaction at a meaningful premium, and its stock falls on the announcement.",
    expectedConcepts: [
      "Potential overpayment or high premium",
      "Integration execution risk",
      "Synergies may be uncertain or back-end loaded",
      "Higher leverage or financing risk",
      "Strategic fit or management credibility concerns",
    ],
    referenceAnswer:
      "Investors may think the buyer overpaid, especially if the premium is high or the synergy case feels uncertain. They may also worry about integration risk, culture, customer retention, execution distraction, or higher leverage from the financing. A stock drop does not automatically mean the deal is bad, but it suggests the market is questioning whether the buyer will earn an adequate return on the capital deployed.",
    followUpConcept:
      "What evidence would make you more comfortable with the deal rationale?",
    sourceType: "local",
  },
  {
    id: "lbo-001",
    question:
      "What factors determine whether a leveraged buyout generates a strong IRR?",
    category: "LBO / Private Equity",
    difficulty: "Beginner",
    mode: "Technical Questions",
    expectedConcepts: [
      "Entry multiple",
      "Amount and cost of leverage",
      "EBITDA growth and margin expansion",
      "Debt paydown from free cash flow",
      "Exit multiple and holding period",
    ],
    referenceAnswer:
      "A strong LBO IRR is driven by buying at an attractive entry multiple, using prudent leverage, growing EBITDA, expanding margins, paying down debt with free cash flow, and exiting at a good multiple. Holding period matters too because the same money multiple over a shorter period produces a higher IRR. The best cases usually combine operational improvement with debt reduction, not just multiple expansion.",
    followUpConcept:
      "Which value creation lever is most controllable by the sponsor?",
    sourceType: "local",
  },
  {
    id: "lbo-002",
    question:
      "Credit markets tighten and lenders reduce maximum leverage for buyouts. How does that affect private equity bidding behavior?",
    category: "LBO / Private Equity",
    difficulty: "Advanced",
    mode: "Market Scenarios",
    marketScenario:
      "Banks and private credit funds lower leverage appetite after volatility in leveraged loan markets.",
    expectedConcepts: [
      "Lower leverage reduces sponsor purchasing power",
      "More equity is required for the same purchase price",
      "IRR may fall unless entry price decreases or operations improve",
      "Sponsors may bid lower or focus on higher-quality assets",
      "Financing certainty becomes more valuable",
    ],
    referenceAnswer:
      "If lenders reduce leverage, sponsors need to contribute more equity for the same purchase price, which usually lowers IRR unless the entry price comes down or the operating plan improves. That can make PE bidders more disciplined, reduce auction clearing prices, or shift interest toward higher-quality companies that can still support debt. Financing certainty also becomes a competitive advantage because sellers care about closing risk.",
    followUpConcept:
      "How could a sponsor still win an auction in that environment?",
    sourceType: "local",
  },
  {
    id: "capm-001",
    question:
      "A high-growth company delays its IPO because the IPO market weakens. What finance concepts explain that decision?",
    category: "Capital Markets",
    difficulty: "Intermediate",
    mode: "Market Scenarios",
    marketScenario:
      "Equity markets become volatile and recent IPOs trade poorly, causing several private companies to postpone listings.",
    expectedConcepts: [
      "Lower investor risk appetite can reduce valuation",
      "Market volatility increases execution risk",
      "Weak comparables can pressure IPO pricing",
      "Companies may prefer private capital or wait for better windows",
      "Dilution and signaling matter when issuing equity",
    ],
    referenceAnswer:
      "A weak IPO market can mean lower investor risk appetite, wider valuation discounts, and greater execution risk. If recent IPOs trade poorly, public comparables and investor demand may not support the valuation the company wants. Management may prefer to wait, raise private capital, or improve results before issuing equity at a price that could be highly dilutive or send a negative signal.",
    followUpConcept:
      "What would need to improve before the IPO window reopens?",
    sourceType: "local",
  },
  {
    id: "capm-002",
    question:
      "A company refinances fixed-rate debt with new debt at a higher coupon. How can that flow through valuation and credit analysis?",
    category: "Capital Markets",
    difficulty: "Advanced",
    mode: "Market Scenarios",
    marketScenario:
      "A company that issued cheap debt several years ago must refinance at today's higher market rates.",
    expectedConcepts: [
      "Higher interest expense reduces net income and free cash flow",
      "Coverage ratios weaken",
      "Debt capacity and credit ratings may come under pressure",
      "Equity valuation may fall from lower cash flow and higher risk",
      "DCF cost of debt and WACC assumptions may need updating",
    ],
    referenceAnswer:
      "Refinancing at a higher coupon raises cash interest expense, which reduces net income and free cash flow. Credit metrics such as interest coverage and fixed-charge coverage weaken, and debt capacity or ratings could come under pressure. For valuation, lower free cash flow and higher financial risk can pressure equity value, and a DCF should reflect the current cost of debt rather than stale historical coupons.",
    followUpConcept:
      "Why might EBITDA be unchanged while credit quality deteriorates?",
    sourceType: "local",
  },
  {
    id: "mk-001",
    question:
      "Inflation comes in lower than expected. How might equity markets interpret that, and what are the caveats?",
    category: "Market Knowledge",
    difficulty: "Intermediate",
    mode: "Market Scenarios",
    marketScenario:
      "A monthly inflation report is cooler than consensus and rates decline across the Treasury curve.",
    expectedConcepts: [
      "Lower inflation may support lower interest rate expectations",
      "Lower discount rates can support equity valuations",
      "Margin pressure from input costs may ease",
      "Too much disinflation could signal weaker demand",
      "Sector impacts can differ",
    ],
    referenceAnswer:
      "Lower-than-expected inflation can be positive for equities if it reduces expected rates and discount rates, and if it eases input cost pressure. But the caveat is why inflation is falling. If it reflects collapsing demand or recession risk, earnings expectations may fall too. The impact also varies by sector: long-duration growth stocks may benefit from lower rates, while cyclicals may worry more about demand.",
    followUpConcept:
      "How would you separate a good disinflation print from a bad one?",
    sourceType: "local",
  },
  {
    id: "mk-002",
    question:
      "Oil prices spike after a supply shock. How would you think about winners, losers, and second-order effects?",
    category: "Market Knowledge",
    difficulty: "Advanced",
    mode: "Market Scenarios",
    marketScenario:
      "A geopolitical disruption reduces expected oil supply and crude prices rise quickly.",
    expectedConcepts: [
      "Energy producers may benefit from higher realized prices",
      "Fuel-intensive businesses face margin pressure",
      "Consumers may have less discretionary income",
      "Inflation expectations and interest rates may rise",
      "Magnitude depends on hedging, pricing power, and duration",
    ],
    referenceAnswer:
      "Energy producers can benefit from higher realized prices, while airlines, logistics companies, chemicals, and other fuel-intensive businesses may face margin pressure unless they can pass costs through. Consumers may also have less discretionary income. Second-order effects include higher inflation expectations and potentially higher rates, which can pressure broader valuations. I would check hedging, pricing power, and whether the shock is temporary or persistent.",
    followUpConcept:
      "How would this affect an LBO candidate with thin margins and high leverage?",
    sourceType: "local",
  },
  {
    id: "gf-001",
    question:
      "If you had five minutes to evaluate whether a company is financially healthy, what would you look at?",
    category: "General Finance",
    difficulty: "Beginner",
    mode: "Technical Questions",
    expectedConcepts: [
      "Revenue growth and margin trend",
      "Free cash flow generation",
      "Leverage and interest coverage",
      "Working capital needs",
      "Liquidity, maturity schedule, and quality of earnings",
    ],
    referenceAnswer:
      "I would start with growth, margins, and free cash flow to see whether the business is expanding profitably and converting earnings into cash. Then I would check leverage, interest coverage, liquidity, and debt maturities to assess financial risk. I would also look at working capital trends and one-time adjustments to understand earnings quality. The goal is to connect profitability, cash generation, and balance sheet resilience.",
    followUpConcept:
      "Which metric would you trust least on its own and why?",
    sourceType: "local",
  },
  {
    id: "gf-002",
    question:
      "Recession concerns increase. What happens to the way investors evaluate cyclical companies?",
    category: "General Finance",
    difficulty: "Intermediate",
    mode: "Market Scenarios",
    marketScenario:
      "Economists raise recession probabilities and investors rotate away from economically sensitive companies.",
    expectedConcepts: [
      "Investors focus on normalized rather than peak earnings",
      "Valuation multiples may compress",
      "Balance sheet strength and liquidity become more important",
      "Demand sensitivity and operating leverage matter",
      "Downside cases receive more weight",
    ],
    referenceAnswer:
      "When recession risk rises, investors are less willing to capitalize peak earnings and focus more on normalized or downside earnings. Multiples can compress, especially for companies with high operating leverage or discretionary demand. Balance sheet strength, liquidity, and covenant headroom become more important because the market cares about survival and flexibility, not just upside.",
    followUpConcept:
      "Why can a low P/E multiple be misleading for a cyclical company near peak earnings?",
    sourceType: "local",
  },
  {
    id: "dcf-003",
    question:
      "A company improves margins by cutting R&D. How would you think about that in a valuation?",
    category: "DCF",
    difficulty: "Advanced",
    mode: "Technical Questions",
    expectedConcepts: [
      "Near-term margins and free cash flow may improve",
      "Long-term growth or competitive position may weaken",
      "Forecast should distinguish sustainable efficiency from underinvestment",
      "Terminal value may be lower if growth durability declines",
    ],
    referenceAnswer:
      "Cutting R&D can improve near-term margins and free cash flow, but I would not automatically treat that as sustainable value creation. If the cuts reduce product innovation or competitive position, long-term growth and terminal value could suffer. In a DCF I would separate genuine efficiency from underinvestment and may give the company higher near-term cash flow but lower growth durability or a lower terminal multiple.",
    followUpConcept:
      "How could you diligence whether the margin improvement is sustainable?",
    sourceType: "local",
  },
  {
    id: "lbo-003",
    question:
      "A portfolio company pays down debt faster than expected, but EBITDA growth is flat. How does that affect sponsor returns?",
    category: "LBO / Private Equity",
    difficulty: "Intermediate",
    mode: "Market Scenarios",
    marketScenario:
      "A sponsor-owned company misses its growth plan but generates more cash than expected and reduces debt quickly.",
    expectedConcepts: [
      "Debt paydown increases equity value by reducing net debt",
      "Flat EBITDA limits enterprise value growth",
      "IRR can still improve if deleveraging is strong",
      "Exit multiple and holding period still matter",
      "Cash generation quality becomes central",
    ],
    referenceAnswer:
      "Faster debt paydown helps sponsor returns because equity value equals enterprise value less net debt, so reducing debt increases the sponsor's equity value even if EBITDA is flat. However, flat EBITDA limits enterprise value growth, so the return may depend heavily on cash conversion, exit multiple, and holding period. It can still be a good outcome, but it is less compelling than a case with both deleveraging and EBITDA growth.",
    followUpConcept:
      "Would you rather have faster debt paydown or higher EBITDA growth?",
    sourceType: "local",
  },
  {
    id: "ma-003",
    question:
      "A target has negative net working capital. Why might that matter in an acquisition?",
    category: "M&A",
    difficulty: "Advanced",
    mode: "Technical Questions",
    expectedConcepts: [
      "Working capital peg affects purchase price economics",
      "Negative working capital can be a funding source",
      "Sustainability depends on business model and growth",
      "A reversal can consume cash after closing",
      "Diligence should separate normal operating model from temporary timing",
    ],
    referenceAnswer:
      "Negative working capital can be attractive if it is a normal part of the business model, because customers effectively fund operations. But it matters a lot in a deal because the purchase agreement will include a working capital peg, and any shortfall may adjust price. If negative working capital is temporary or reverses after close, the buyer may face a cash drain. I would diligence whether it is structural, seasonal, or driven by one-time timing.",
    followUpConcept:
      "How would rapid growth affect a negative working capital business?",
    sourceType: "local",
  },
  {
    id: "val-003",
    question:
      "A company's multiple expands even though earnings estimates are unchanged. What could explain the move?",
    category: "Valuation",
    difficulty: "Intermediate",
    mode: "Market Scenarios",
    marketScenario:
      "A stock re-rates higher after management gives a more confident outlook, but consensus EBITDA does not move much.",
    expectedConcepts: [
      "Lower perceived risk can support multiple expansion",
      "Higher confidence in future growth beyond explicit estimates",
      "Better capital allocation or management credibility",
      "Sector rotation or lower discount rates",
      "Improved quality of earnings or reduced uncertainty",
    ],
    referenceAnswer:
      "A multiple can expand without near-term estimate revisions if investors view the same earnings as higher quality or less risky. That could come from improved management credibility, better capital allocation, lower discount rates, stronger long-term growth confidence, or reduced uncertainty. The market may be paying more for each dollar of EBITDA because the durability or risk profile of that EBITDA improved.",
    followUpConcept:
      "How would you test whether multiple expansion is justified?",
    sourceType: "local",
  },
  {
    id: "acct-003",
    question:
      "Revenue grows quickly, but accounts receivable grows even faster. What questions would you ask?",
    category: "Accounting",
    difficulty: "Intermediate",
    mode: "Technical Questions",
    expectedConcepts: [
      "Collections may be slowing",
      "Days sales outstanding may be increasing",
      "Revenue quality or channel stuffing concerns",
      "Customer mix or payment terms may have changed",
      "Working capital drag can reduce free cash flow",
    ],
    referenceAnswer:
      "I would ask whether collections are slowing and calculate DSO. Receivables growing faster than revenue can be benign if customer mix or payment terms changed, but it can also signal aggressive revenue recognition, channel stuffing, or weaker customer quality. It also creates a working capital use of cash, so even if revenue and EBITDA are growing, free cash flow may be weaker.",
    followUpConcept:
      "What other balance sheet account would you review for revenue quality?",
    sourceType: "local",
  },
  {
    id: "mk-003",
    question:
      "The yield curve steepens because long-term rates rise. How might that affect different sectors?",
    category: "Market Knowledge",
    difficulty: "Advanced",
    mode: "Market Scenarios",
    marketScenario:
      "Long-term Treasury yields rise while short-term rates are stable, steepening the yield curve.",
    expectedConcepts: [
      "Banks may benefit from wider net interest margins",
      "Long-duration growth equities may face valuation pressure",
      "Rate-sensitive sectors such as real estate can be pressured",
      "The reason for higher long rates matters",
      "Higher discount rates can reduce present values",
    ],
    referenceAnswer:
      "A steeper curve from higher long rates can help some banks if it supports wider net interest margins, but it can pressure long-duration growth stocks and rate-sensitive sectors like real estate because discount rates and financing costs rise. The reason matters: if long rates rise because growth expectations improve, cyclicals may benefit; if they rise because inflation or term premium rises, broader valuations can face pressure.",
    followUpConcept:
      "Why might banks not benefit from a steeper curve in practice?",
    sourceType: "local",
  },
];
