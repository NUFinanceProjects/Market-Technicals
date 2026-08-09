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
    id: "gf-003",
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
    id: "gf-004",
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
  {
    id: "acct-004",
    question:
      "A company switches from capitalizing more software development costs to expensing more of them. How would that affect the three statements?",
    category: "Accounting",
    difficulty: "Advanced",
    mode: "Technical Questions",
    expectedConcepts: [
      "Operating expenses increase and operating income declines",
      "Capitalized software assets grow more slowly or decline",
      "Cash flow from operations may decline while investing cash outflow decreases",
      "Total cash flow is unchanged by classification",
      "EBITDA comparability can change materially",
    ],
    referenceAnswer:
      "If more software development costs are expensed instead of capitalized, operating expenses increase, so operating income, pre-tax income, and net income decline. On the balance sheet, the software asset grows more slowly or may be lower over time. On the cash flow statement, cash flow from operations can be lower because the spending is treated as an operating cost, while cash flow from investing is higher because less is capitalized. Total cash flow does not change, but EBITDA and free cash flow presentation can change materially.",
    followUpConcept:
      "Why would this matter when comparing two software companies?",
    sourceType: "local",
  },
  {
    id: "acct-005",
    question:
      "What happens to the financial statements when inventory is written down?",
    category: "Accounting",
    difficulty: "Beginner",
    mode: "Technical Questions",
    expectedConcepts: [
      "Expense reduces operating income and net income",
      "Inventory decreases on the balance sheet",
      "Retained earnings declines through lower net income",
      "The write-down is added back if non-cash on the cash flow statement",
      "Future gross margin may improve if lower-cost inventory remains",
    ],
    referenceAnswer:
      "An inventory write-down creates an expense, usually in cost of goods sold or a separate operating line, so operating income and net income decrease. Inventory decreases on the balance sheet, and retained earnings falls through the lower net income. On the cash flow statement, net income starts lower, but the write-down is added back if it is non-cash. It can also affect future margins because the written-down inventory now has a lower carrying value.",
    followUpConcept:
      "How would this differ from simply selling inventory at a lower margin?",
    sourceType: "local",
  },
  {
    id: "acct-006",
    question:
      "A company has high EBITDA but low net income. What could explain the gap?",
    category: "Accounting",
    difficulty: "Beginner",
    mode: "Technical Questions",
    expectedConcepts: [
      "Depreciation and amortization can be high",
      "Interest expense can reduce pre-tax income",
      "Taxes reduce net income",
      "Stock-based compensation or one-time costs may affect earnings",
      "EBITDA excludes real economic costs and capital intensity",
    ],
    referenceAnswer:
      "High EBITDA with low net income can happen if the company has significant depreciation and amortization, high interest expense, high taxes, stock-based compensation, or one-time charges. EBITDA removes several expenses that still matter economically, especially for capital-intensive or highly levered companies. I would bridge EBITDA to EBIT, pre-tax income, and net income to identify the main driver.",
    followUpConcept:
      "Which of those differences matters most for valuation?",
    sourceType: "local",
  },
  {
    id: "ev-004",
    question:
      "Why do we add minority interest when calculating enterprise value?",
    category: "Enterprise Value and Equity Value",
    difficulty: "Intermediate",
    mode: "Technical Questions",
    expectedConcepts: [
      "Consolidated financials include revenue and EBITDA from majority-owned subsidiaries",
      "Minority interest represents the portion not owned by the parent",
      "Enterprise value should match the EBITDA being used",
      "Adding minority interest avoids understating value relative to consolidated EBITDA",
    ],
    referenceAnswer:
      "We add minority interest because a parent company consolidates 100% of a majority-owned subsidiary's financials, including its revenue and EBITDA, even if it does not own 100% of the subsidiary. The minority interest represents the portion of that subsidiary owned by outside investors. To make enterprise value comparable to consolidated EBITDA, we add minority interest so the numerator and denominator are matched.",
    followUpConcept:
      "When might you use only the parent-owned portion of EBITDA instead?",
    sourceType: "local",
  },
  {
    id: "ev-005",
    question:
      "How should operating leases affect enterprise value and valuation multiples?",
    category: "Enterprise Value and Equity Value",
    difficulty: "Advanced",
    mode: "Technical Questions",
    expectedConcepts: [
      "Lease liabilities are debt-like obligations",
      "Accounting standards may put lease liabilities on the balance sheet",
      "The EBITDA denominator may also change because rent expense treatment changes",
      "Comparability across companies and periods is the key issue",
      "Analysts should avoid mixing pre-lease and post-lease metrics",
    ],
    referenceAnswer:
      "Operating leases are debt-like because they are contractual obligations required to operate the business. Under modern lease accounting, many lease liabilities appear on the balance sheet, so analysts often treat them as debt-like in enterprise value. The key is consistency: if lease expense is moved below EBITDA through depreciation and interest, then EBITDA is higher and enterprise value may include lease liabilities. You need to avoid comparing one company on a pre-lease basis with another on a post-lease basis.",
    followUpConcept:
      "Why are retailers especially sensitive to lease adjustments?",
    sourceType: "local",
  },
  {
    id: "val-004",
    question:
      "Why might two companies with the same EBITDA trade at very different enterprise values?",
    category: "Valuation",
    difficulty: "Beginner",
    mode: "Technical Questions",
    expectedConcepts: [
      "Growth rates may differ",
      "Margins and margin durability may differ",
      "Cash conversion and capital intensity may differ",
      "Risk, cyclicality, and competitive position matter",
      "Management quality and revenue visibility can affect multiples",
    ],
    referenceAnswer:
      "Two companies with the same EBITDA can trade at very different enterprise values because the market is valuing the quality and durability of that EBITDA, not just the current amount. A company with faster growth, higher recurring revenue, stronger margins, lower capital intensity, better cash conversion, and lower risk should usually trade at a higher multiple. A cyclical or declining business may receive a much lower valuation even with the same current EBITDA.",
    followUpConcept:
      "Which metric would you check next if EBITDA is the same?",
    sourceType: "local",
  },
  {
    id: "val-005",
    question:
      "When would you use revenue multiples instead of EBITDA multiples?",
    category: "Valuation",
    difficulty: "Intermediate",
    mode: "Technical Questions",
    expectedConcepts: [
      "Companies may be unprofitable or near break-even",
      "EBITDA may be distorted by investment stage",
      "Revenue multiples are common in high-growth software or biotech-like cases",
      "Revenue quality and gross margin become more important",
      "Path to profitability should still be assessed",
    ],
    referenceAnswer:
      "Revenue multiples are useful when EBITDA is negative, near zero, or not meaningful because the company is investing heavily for growth. They are common for high-growth software and other early-stage companies. But revenue multiples are less precise because they ignore profitability, so you need to compare revenue growth, gross margin, retention, unit economics, and the path to positive cash flow.",
    followUpConcept:
      "Why might two SaaS companies deserve different revenue multiples?",
    sourceType: "local",
  },
  {
    id: "val-006",
    question:
      "How would you value a company with negative EBITDA?",
    category: "Valuation",
    difficulty: "Advanced",
    mode: "Technical Questions",
    expectedConcepts: [
      "Use revenue or gross profit multiples if appropriate",
      "DCF can work if there is a credible path to profitability",
      "Comparable companies should match growth stage and business model",
      "Unit economics and cash burn matter",
      "Scenario analysis is important because outcomes are uncertain",
    ],
    referenceAnswer:
      "For a negative EBITDA company, I would not use EBITDA multiples directly. I might use revenue or gross profit multiples if peers are valued that way, but I would focus heavily on revenue quality, gross margin, retention, unit economics, cash burn, and the path to profitability. A DCF can also work if there is a credible forecast for margins turning positive, but the assumptions should be scenario-based because the range of outcomes is wide.",
    followUpConcept:
      "What would make a negative EBITDA company investable?",
    sourceType: "local",
  },
  {
    id: "dcf-004",
    question:
      "Why is terminal value often such a large part of a DCF?",
    category: "DCF",
    difficulty: "Beginner",
    mode: "Technical Questions",
    expectedConcepts: [
      "A DCF usually models only a finite explicit forecast period",
      "Most business value comes from cash flows beyond the forecast",
      "Terminal value captures steady-state value after the explicit period",
      "Discount rate and terminal assumptions can drive sensitivity",
    ],
    referenceAnswer:
      "Terminal value is often large because the explicit forecast period only captures a limited number of years, while most companies are assumed to keep generating cash flows beyond that period. The terminal value estimates the value of those future steady-state cash flows. Since it can represent a large share of total value, small changes in terminal growth, exit multiple, or WACC can materially affect the DCF result.",
    followUpConcept:
      "How would you sanity-check whether terminal value is too high?",
    sourceType: "local",
  },
  {
    id: "dcf-005",
    question:
      "How do you decide whether to use the perpetuity growth method or exit multiple method for terminal value?",
    category: "DCF",
    difficulty: "Intermediate",
    mode: "Technical Questions",
    expectedConcepts: [
      "Perpetuity growth ties value to long-term cash flow growth",
      "Exit multiple ties value to market trading or transaction multiples",
      "Both should be used as cross-checks",
      "Assumptions should imply reasonable multiples and growth rates",
      "Industry maturity and comparability matter",
    ],
    referenceAnswer:
      "The perpetuity growth method is useful when you can make a reasonable long-term growth assumption for free cash flow. The exit multiple method is useful when the company has reliable trading or transaction comparables at maturity. In practice, I would usually use both as cross-checks. The perpetuity growth method should imply a reasonable exit multiple, and the exit multiple should imply a reasonable long-term growth rate.",
    followUpConcept:
      "What would make an exit multiple assumption too aggressive?",
    sourceType: "local",
  },
  {
    id: "dcf-006",
    question:
      "Why do we use WACC to discount unlevered free cash flow?",
    category: "DCF",
    difficulty: "Intermediate",
    mode: "Technical Questions",
    expectedConcepts: [
      "Unlevered free cash flow is available to all capital providers",
      "WACC reflects blended required return for debt and equity holders",
      "Capital structure weighting matters",
      "Tax shield is captured in after-tax cost of debt",
      "Discount rate should match the cash flow type",
    ],
    referenceAnswer:
      "Unlevered free cash flow is cash flow available to all providers of capital, before interest expense. Because it belongs to both debt and equity holders, we discount it at WACC, which blends the required returns of debt and equity based on the target capital structure. The after-tax cost of debt captures the tax benefit of interest. The main rule is that the discount rate must match the cash flow type.",
    followUpConcept:
      "What discount rate would you use for levered free cash flow?",
    sourceType: "local",
  },
  {
    id: "ma-004",
    question:
      "Why might a buyer prefer using stock instead of cash in an acquisition?",
    category: "M&A",
    difficulty: "Beginner",
    mode: "Technical Questions",
    expectedConcepts: [
      "Stock preserves cash and balance sheet flexibility",
      "Stock shares deal risk and upside with the seller",
      "High buyer valuation can make stock attractive currency",
      "Cash may be limited or debt may be expensive",
      "Stock issuance dilutes existing shareholders",
    ],
    referenceAnswer:
      "A buyer may prefer stock because it preserves cash, avoids taking on additional debt, and shares some deal risk and upside with the seller. Stock can be especially attractive if the buyer trades at a high valuation and its shares are a strong acquisition currency. The trade-off is dilution to existing shareholders, and sellers may resist stock if they are unsure about the buyer's value or future performance.",
    followUpConcept:
      "When would stock financing be more dilutive than cash financing?",
    sourceType: "local",
  },
  {
    id: "ma-005",
    question:
      "What is a working capital peg, and why does it matter in M&A?",
    category: "M&A",
    difficulty: "Intermediate",
    mode: "Technical Questions",
    expectedConcepts: [
      "Peg sets normalized working capital level expected at close",
      "Purchase price may adjust if closing working capital differs",
      "It prevents sellers from draining working capital before closing",
      "Seasonality and growth should be considered",
      "Definition of working capital is heavily negotiated",
    ],
    referenceAnswer:
      "A working capital peg is the normalized level of working capital the buyer expects to receive at closing. If actual closing working capital is below the peg, the purchase price may be reduced; if it is above the peg, the seller may receive more. It matters because a buyer does not want to pay full price and then immediately fund a working capital shortfall. The peg should reflect seasonality, growth, and the normal operating needs of the business.",
    followUpConcept:
      "Why might buyers and sellers disagree on the peg?",
    sourceType: "local",
  },
  {
    id: "ma-006",
    question:
      "Can a deal be dilutive to EPS but still create value?",
    category: "M&A",
    difficulty: "Advanced",
    mode: "Technical Questions",
    expectedConcepts: [
      "EPS accretion is not the same as value creation",
      "Long-term strategic benefits may outweigh near-term dilution",
      "ROIC versus cost of capital matters",
      "Synergies and growth can compound over time",
      "Accounting amortization can depress EPS without equal cash impact",
    ],
    referenceAnswer:
      "Yes. EPS dilution is an accounting outcome, not a complete measure of value creation. A deal can be dilutive near term because of stock issuance, interest expense, integration costs, or amortization, but still create value if the buyer earns returns above its cost of capital over time. I would focus on ROIC, free cash flow, strategic fit, synergies, and execution risk rather than EPS accretion alone.",
    followUpConcept:
      "What metric would you use to assess value creation besides EPS?",
    sourceType: "local",
  },
  {
    id: "lbo-004",
    question:
      "Why do private equity firms care so much about free cash flow conversion?",
    category: "LBO / Private Equity",
    difficulty: "Beginner",
    mode: "Technical Questions",
    expectedConcepts: [
      "Free cash flow pays down debt",
      "Debt paydown increases sponsor equity value",
      "Cash conversion supports interest and mandatory amortization",
      "High CapEx or working capital needs reduce deleveraging",
      "Recurring cash flow lowers financing risk",
    ],
    referenceAnswer:
      "Private equity firms care about free cash flow conversion because cash flow is what services and repays debt. In an LBO, debt paydown is a major source of equity value creation, so a company that converts EBITDA into free cash flow is more attractive. High CapEx, working capital needs, or volatile cash flow make it harder to delever and increase financing risk.",
    followUpConcept:
      "Why might a high-growth company still be a poor LBO candidate?",
    sourceType: "local",
  },
  {
    id: "lbo-005",
    question:
      "How does an exit multiple contraction affect an LBO return?",
    category: "LBO / Private Equity",
    difficulty: "Intermediate",
    mode: "Technical Questions",
    expectedConcepts: [
      "Lower exit multiple reduces exit enterprise value",
      "Lower enterprise value reduces sponsor equity value",
      "Debt paydown and EBITDA growth can offset some multiple contraction",
      "IRR is sensitive to both exit value and timing",
      "Entry discipline reduces dependence on multiple expansion",
    ],
    referenceAnswer:
      "Exit multiple contraction lowers the exit enterprise value for a given level of EBITDA, which reduces the sponsor's equity value at exit. EBITDA growth and debt paydown can offset some of the damage, but a lower exit multiple usually pressures MOIC and IRR. This is why sponsors try to avoid underwriting returns based mainly on multiple expansion and focus on entry price, cash generation, and operational improvement.",
    followUpConcept:
      "How could a sponsor still generate a good return with a lower exit multiple?",
    sourceType: "local",
  },
  {
    id: "lbo-006",
    question:
      "Why might a recurring revenue business support more leverage than a cyclical business?",
    category: "LBO / Private Equity",
    difficulty: "Intermediate",
    mode: "Technical Questions",
    expectedConcepts: [
      "Recurring revenue is more predictable",
      "Cash flows are easier to underwrite",
      "Lower cyclicality reduces default risk",
      "Lenders may allow higher leverage or better terms",
      "Retention and churn still need diligence",
    ],
    referenceAnswer:
      "A recurring revenue business often supports more leverage because its cash flows are more predictable, which makes debt service easier to underwrite. Lower volatility reduces lender risk, so lenders may be willing to provide more leverage or better terms. But recurring revenue is not automatically safe; you still need to diligence retention, churn, customer concentration, pricing power, and implementation or renewal risk.",
    followUpConcept:
      "What recurring revenue metric would you diligence first?",
    sourceType: "local",
  },
  {
    id: "capm-004",
    question:
      "Why might a company issue convertible debt instead of straight debt or equity?",
    category: "Capital Markets",
    difficulty: "Advanced",
    mode: "Technical Questions",
    expectedConcepts: [
      "Convertible debt can have a lower cash coupon",
      "Investors receive equity upside through conversion option",
      "Issuer delays or reduces immediate equity dilution",
      "It can appeal when straight debt is expensive",
      "Future dilution depends on stock performance and conversion terms",
    ],
    referenceAnswer:
      "A company may issue convertible debt because the conversion option lets investors accept a lower cash coupon than straight debt. It can be attractive when straight debt is expensive or when the company wants to avoid immediate equity dilution. The trade-off is potential future dilution if the stock performs well and the converts move in the money. It is a hybrid security, so the analysis should consider both debt service and equity dilution.",
    followUpConcept:
      "When would convertible debt be unattractive for existing shareholders?",
    sourceType: "local",
  },
  {
    id: "capm-005",
    question:
      "What happens to a company's cost of capital if its credit rating is downgraded?",
    category: "Capital Markets",
    difficulty: "Intermediate",
    mode: "Technical Questions",
    expectedConcepts: [
      "Cost of debt usually increases",
      "WACC may increase if debt is a meaningful part of capital structure",
      "Equity risk may also rise",
      "Refinancing flexibility can decline",
      "Valuation may be pressured through higher discount rates and lower multiples",
    ],
    referenceAnswer:
      "A downgrade usually increases the company's cost of debt because lenders demand higher spreads for greater credit risk. If debt is a meaningful part of the capital structure, WACC can increase. Equity investors may also demand a higher return if the downgrade signals weaker fundamentals or refinancing risk. Higher cost of capital can pressure DCF value and valuation multiples, especially for levered companies.",
    followUpConcept:
      "Why might the stock fall even if the downgrade only affects debt?",
    sourceType: "local",
  },
  {
    id: "mk-004",
    question:
      "How would higher inflation affect a company's valuation?",
    category: "Market Knowledge",
    difficulty: "Intermediate",
    mode: "Technical Questions",
    expectedConcepts: [
      "Higher inflation can pressure margins if costs rise faster than prices",
      "Pricing power determines revenue and margin resilience",
      "Interest rates and discount rates may rise",
      "Working capital needs may increase",
      "Impact varies by business model and sector",
    ],
    referenceAnswer:
      "Higher inflation can affect valuation through both operations and discount rates. If costs rise faster than the company can raise prices, margins fall. If the company has strong pricing power, revenue may rise and margins may hold up better. Inflation can also lead to higher interest rates and discount rates, which pressure DCF values and multiples. Working capital needs may increase because inventory and receivables become more expensive.",
    followUpConcept:
      "Which sectors tend to have better inflation protection?",
    sourceType: "local",
  },
  {
    id: "mk-005",
    question:
      "Why do long-duration growth stocks often sell off when interest rates rise?",
    category: "Market Knowledge",
    difficulty: "Beginner",
    mode: "Technical Questions",
    expectedConcepts: [
      "Higher discount rates reduce present value of future cash flows",
      "Growth stocks often depend on cash flows far in the future",
      "Opportunity cost of capital rises",
      "Multiples can compress even if fundamentals are unchanged",
      "Profitability timing matters",
    ],
    referenceAnswer:
      "Long-duration growth stocks are often valued based on cash flows far in the future. When interest rates rise, discount rates and the opportunity cost of capital rise, so those distant cash flows are worth less today. That can compress valuation multiples even if near-term fundamentals have not changed. The effect is usually stronger for companies with limited current profits and a large share of value in future growth.",
    followUpConcept:
      "Why might some growth stocks hold up better than others?",
    sourceType: "local",
  },
  {
    id: "gf-001",
    question:
      "What is the difference between levered and unlevered free cash flow?",
    category: "General Finance",
    difficulty: "Beginner",
    mode: "Technical Questions",
    expectedConcepts: [
      "Unlevered free cash flow is before interest and available to all capital providers",
      "Levered free cash flow is after interest and debt payments",
      "Unlevered cash flow is used for enterprise value",
      "Levered cash flow is used for equity value",
      "Discount rates must match the cash flow definition",
    ],
    referenceAnswer:
      "Unlevered free cash flow is cash flow before interest expense and is available to all capital providers, so it is used to value the enterprise. Levered free cash flow is after interest expense and required debt payments, so it is available only to equity holders and is used to value equity. The key is matching the cash flow and discount rate: unlevered cash flow with WACC, and levered cash flow with cost of equity.",
    followUpConcept:
      "Why should you not discount unlevered free cash flow at cost of equity?",
    sourceType: "local",
  },
  {
    id: "news-ai-001",
    question:
      "A healthcare software company rallies after management says its new AI assistant has strong unit economics, but the product is still early and contributes little current revenue. How would you evaluate whether the stock move is justified?",
    category: "Valuation",
    difficulty: "Intermediate",
    mode: "Market Scenarios",
    marketScenario:
      "A niche healthcare technology company jumps after an earnings call highlights early AI monetization, even though the core quarter is mixed and near-term guidance changes only modestly.",
    expectedConcepts: [
      "Separate current earnings from long-term option value",
      "Assess market size, monetization, adoption, and margins",
      "Watch for cannibalization of the core business",
      "Compare multiple expansion to changes in estimates",
      "Consider short interest and retail-driven momentum",
    ],
    referenceAnswer:
      "I would separate the core business performance from the AI upside. If near-term revenue and earnings estimates barely changed, most of the stock move is likely multiple expansion or option value around the AI product. I would diligence adoption, pricing, gross margins, customer retention, regulatory risk, and whether the AI tool cannibalizes existing products. I would also check short interest and trading dynamics because a sharp move can reflect positioning as much as fundamentals. The move may be justified if the AI product materially expands TAM and margins, but I would not underwrite it without evidence of sustained revenue contribution.",
    followUpConcept:
      "How would this show up differently in a DCF versus trading comps?",
    sourceType: "local",
  },
  {
    id: "news-labor-001",
    question:
      "A weak jobs report causes equities to rally and Treasury yields to fall because investors expect the Fed to become more dovish. Walk me through the logic and the risks to that interpretation.",
    category: "Capital Markets",
    difficulty: "Intermediate",
    mode: "Market Scenarios",
    marketScenario:
      "Payroll data comes in meaningfully below expectations, participation weakens, and prior months are revised lower, but equities rise on lower-rate expectations.",
    expectedConcepts: [
      "Weak labor data can lower rate expectations",
      "Lower rates can support equity multiples",
      "Bad macro data can also signal weaker earnings",
      "Sector impact differs by cyclicality and duration",
      "Bond yields and Fed expectations should be cross-checked",
    ],
    referenceAnswer:
      "The bullish interpretation is that weaker labor data reduces inflation pressure and gives the Fed room to cut or avoid hiking, which lowers discount rates and supports equity multiples. That helps long-duration growth stocks in particular. The risk is that weak jobs data also means weaker consumer demand and lower earnings, especially for cyclicals, retailers, travel, and credit-sensitive businesses. I would check whether the rally is rate-driven or earnings-driven, look at Treasury yields and Fed funds futures, and compare how defensive sectors, cyclicals, and growth stocks are reacting.",
    followUpConcept:
      "When would bad jobs data be bad news for stocks instead of good news?",
    sourceType: "local",
  },
  {
    id: "news-waste-001",
    question:
      "A hazardous waste services company benefits from scarce disposal capacity while demand rises from reshoring, cleanups, and semiconductor investment. How would that affect your valuation view?",
    category: "Valuation",
    difficulty: "Advanced",
    mode: "Market Scenarios",
    marketScenario:
      "An industrial services company controls hard-to-replicate waste disposal assets in a market where permitting new capacity is extremely difficult and demand is growing.",
    expectedConcepts: [
      "Scarce capacity can create pricing power",
      "Regulatory barriers can support durable moats",
      "Volume growth and margin expansion can both matter",
      "CapEx, environmental liability, and regulation remain risks",
      "Higher-quality cash flows can justify a premium multiple",
    ],
    referenceAnswer:
      "This could support a premium valuation because scarce permitted capacity creates pricing power and high barriers to entry. If demand is rising from reshoring, environmental remediation, semiconductors, and data centers, the company may get both volume growth and margin expansion. I would value it with comps and a DCF that explicitly tests price, utilization, maintenance CapEx, and environmental liability risk. The upside case is a regulated-infrastructure-like asset with strong cash conversion; the downside is regulatory, cleanup, or capex surprises.",
    followUpConcept:
      "What diligence would you do before assuming pricing power is sustainable?",
    sourceType: "local",
  },
  {
    id: "news-disney-001",
    question:
      "A media company reports stronger profits from streaming, resilient parks demand, and better film performance after a multi-year restructuring. How would you think about a potential re-rating?",
    category: "M&A",
    difficulty: "Intermediate",
    mode: "Market Scenarios",
    marketScenario:
      "A large entertainment company begins showing improvement across streaming, parks, film, and consumer products after cutting costs and refocusing on core intellectual property.",
    expectedConcepts: [
      "Multiple business segments may deserve different multiples",
      "Streaming profitability can change the narrative",
      "Parks and IP may be higher-quality cash flow sources",
      "Cost cuts should be separated from sustainable growth",
      "A breakup or segment separation thesis may affect value",
    ],
    referenceAnswer:
      "I would analyze it as a sum-of-the-parts story. Parks and experiences may deserve a different multiple than linear networks, streaming, or film. If streaming moves from a cash drain to a profit contributor, the market may reduce the conglomerate discount and assign more value to the platform. I would still separate sustainable revenue growth from temporary cost cutting and check free cash flow conversion. If investors believe the segments would be worth more separately, a breakup or restructuring thesis could further support the re-rating.",
    followUpConcept:
      "How would you value the streaming segment differently from the parks segment?",
    sourceType: "local",
  },
  {
    id: "news-banking-001",
    question:
      "Wall Street compensation expectations rise as trading revenue and IPO activity improve, while some private credit and smaller private equity platforms face pressure. What does this tell you about the finance cycle?",
    category: "Capital Markets",
    difficulty: "Intermediate",
    mode: "Market Scenarios",
    marketScenario:
      "Investment banks and trading desks are seeing stronger revenue pools from volatility and equity issuance, but not every financial services segment is improving equally.",
    expectedConcepts: [
      "Trading can benefit from volatility and client activity",
      "Investment banking benefits from IPO and M&A recovery",
      "Private credit and private equity depend on deal flow, exits, and spreads",
      "Compensation follows revenue and profitability expectations",
      "AI and headcount cuts can affect operating leverage",
    ],
    referenceAnswer:
      "It suggests the finance cycle is uneven. Trading desks can benefit from volatility and client flows, while bankers benefit from reopened IPO markets and improving M&A confidence. Private equity and private credit may lag if exits, fundraising, spreads, or deal activity remain pressured. Compensation is a useful signal because it follows expected revenue pools and profitability, but it can also reflect cost discipline and headcount reductions. I would look at league tables, underwriting volumes, advisory backlog, trading revenue, and credit spreads to confirm the cycle.",
    followUpConcept:
      "Which part of an investment bank is most cyclical and why?",
    sourceType: "local",
  },
  {
    id: "news-glp-001",
    question:
      "Demand for obesity and diabetes drugs keeps growing, but realized pricing falls and competitors push into oral versions and new distribution partnerships. How would you evaluate the sector?",
    category: "Market Knowledge",
    difficulty: "Advanced",
    mode: "Market Scenarios",
    marketScenario:
      "A fast-growing drug category has very strong volume growth, expanding competition, pressure on realized pricing, and large long-term market-size expectations.",
    expectedConcepts: [
      "Separate volume growth from pricing pressure",
      "Assess market size, penetration, and reimbursement",
      "Compare injectable and oral competitive positions",
      "Distribution partnerships can expand access",
      "Valuation depends on durability of growth and margins",
    ],
    referenceAnswer:
      "I would separate demand from economics. Strong volume growth and broader access can support revenue growth, but lower realized pricing, rebates, and competition may pressure margins. I would compare each company's market share, formulation, manufacturing capacity, reimbursement, distribution partnerships, and pipeline. For valuation, I would test penetration, pricing, gross margin, and terminal competition. The sector can still deserve premium multiples if growth is durable, but I would be careful not to extrapolate early adoption without considering pricing and access.",
    followUpConcept:
      "How would pricing pressure affect a DCF for a market leader?",
    sourceType: "local",
  },
  {
    id: "news-diageo-001",
    question:
      "A global spirits company announces a major cost-savings plan while younger consumers drink less and trade down to cheaper options. How would you assess the turnaround?",
    category: "Valuation",
    difficulty: "Intermediate",
    mode: "Market Scenarios",
    marketScenario:
      "A consumer staples company with premium alcohol brands is trying to offset weak category growth through restructuring, supply chain changes, and selective capacity investment.",
    expectedConcepts: [
      "Cost savings can lift near-term margins",
      "Category decline or trade-down can pressure revenue",
      "Brand strength and pricing power matter",
      "Restructuring costs and execution risk should be modeled",
      "Investing in a strong sub-brand can signal mix shift",
    ],
    referenceAnswer:
      "I would treat it as a margin improvement story with real top-line risk. Cost savings can improve EBITDA and free cash flow, but if younger consumers drink less or trade down, revenue growth and pricing power may be weaker. I would model restructuring costs, timing of savings, volume trends, mix, and reinvestment behind stronger brands. A good turnaround needs more than cuts; it needs evidence that the company can stabilize demand and preserve brand equity.",
    followUpConcept:
      "How can cost cuts become value-destructive in a consumer brand business?",
    sourceType: "local",
  },
  {
    id: "news-spacex-001",
    question:
      "A newly public space and defense technology company faces large lock-up expirations and a sharp increase in CapEx, but revenue growth and segment performance remain strong. How would you think about the stock?",
    category: "Capital Markets",
    difficulty: "Advanced",
    mode: "Market Scenarios",
    marketScenario:
      "A high-growth public company has major insider share unlocks approaching, elevated capital spending, and strong demand from both institutional and retail investors.",
    expectedConcepts: [
      "Lock-up expirations can create technical selling pressure",
      "High CapEx can reduce free cash flow and increase funding needs",
      "Revenue growth and margins determine whether CapEx is productive",
      "Retail flows can affect short-term trading",
      "Valuation should separate fundamentals from supply-demand dynamics",
    ],
    referenceAnswer:
      "I would separate trading technicals from fundamentals. Lock-up expirations increase potential share supply and can pressure the stock, while retail and institutional demand can offset that. The CapEx increase is not automatically bad if it funds high-return growth, but it can reduce free cash flow and raise financing needs. I would focus on segment growth, margins, backlog, return on invested capital, and whether the valuation already prices in aggressive execution. Near term, the stock may trade on flow; long term, it needs cash flow and returns to support the multiple.",
    followUpConcept:
      "How would you model high CapEx in a DCF for a growth company?",
    sourceType: "local",
  },
  {
    id: "news-oil-001",
    question:
      "Oil prices jump on fears of shipping restrictions around a critical chokepoint, then fade as investors question whether the proposed restrictions can actually happen. How would this affect companies and markets?",
    category: "Market Knowledge",
    difficulty: "Intermediate",
    mode: "Market Scenarios",
    marketScenario:
      "A geopolitical headline raises the risk of disrupted energy shipping routes, but the market quickly debates whether the risk is enforceable or temporary.",
    expectedConcepts: [
      "Oil supply risk can raise energy prices and inflation expectations",
      "Energy producers may benefit while transport and consumers are pressured",
      "Duration and credibility of disruption matter",
      "Higher oil can affect rates, margins, and consumer spending",
      "Hedging and geographic exposure matter by company",
    ],
    referenceAnswer:
      "A credible shipping disruption can raise oil prices, which benefits producers but pressures airlines, logistics, chemicals, and consumers through higher fuel costs. It can also feed inflation expectations and complicate the rate outlook. If the market doubts the disruption will occur or last, prices may fade quickly. For company analysis, I would look at direct fuel exposure, hedging, pricing power, inventory, and whether higher oil changes demand. The key is separating a durable supply shock from a headline-driven move.",
    followUpConcept:
      "Which sectors would you expect to outperform and underperform in this scenario?",
    sourceType: "local",
  },
  {
    id: "news-retail-001",
    question:
      "Retail traders increasingly use 24/7 products, leveraged ETFs, and tokenized assets, while passive flows continue to dominate large-cap indices. How could this change market behavior?",
    category: "Market Knowledge",
    difficulty: "Advanced",
    mode: "Market Scenarios",
    marketScenario:
      "Market structure shifts as retail investors trade more frequently, access more leveraged products, and concentrate flows into large-cap index vehicles.",
    expectedConcepts: [
      "Retail flows can increase volatility and momentum",
      "Leveraged products can amplify intraday moves",
      "Passive concentration can support mega-cap valuations",
      "Liquidity and market structure risks may rise",
      "Fundamentals can matter less in the short term",
    ],
    referenceAnswer:
      "More frequent retail trading and leveraged products can increase short-term volatility, momentum, and gap risk, especially around earnings or macro data. Passive flows into large-cap indices can also support valuations for index-heavy companies and increase concentration. That does not mean fundamentals stop mattering, but flows can dominate in the short term. I would watch liquidity, options activity, ETF rebalancing, leverage, and whether price moves are confirmed by earnings estimate revisions.",
    followUpConcept:
      "How could this affect how you interpret a one-day stock move?",
    sourceType: "local",
  },
  {
    id: "news-shopify-001",
    question:
      "An e-commerce software company rallies after strong results ease investor concerns that AI will disrupt its merchant tools. How would you analyze whether AI is a risk or a tailwind?",
    category: "Valuation",
    difficulty: "Intermediate",
    mode: "Market Scenarios",
    marketScenario:
      "A commerce platform beats expectations and raises guidance, with investors debating whether AI will reduce the need for its software or improve merchant productivity on the platform.",
    expectedConcepts: [
      "Assess product differentiation and switching costs",
      "AI can be a feature, threat, or margin lever",
      "Merchant growth, retention, and take rate matter",
      "Guidance revisions should be tied to valuation change",
      "Competitive response and pricing power are key",
    ],
    referenceAnswer:
      "I would frame AI as both a risk and a potential tailwind. If AI makes it easier for merchants to build stores outside the platform, it could pressure growth and pricing. But if the company embeds AI into workflows, improves conversion, and strengthens merchant retention, it can increase value to customers and protect the moat. I would look at merchant additions, gross merchandise volume, take rate, retention, attach rates, and margin impact. The stock move is more justified if AI improves the platform's economics rather than simply reducing near-term fears.",
    followUpConcept:
      "What metrics would tell you the platform's moat is getting stronger?",
    sourceType: "local",
  },
  {
    id: "news-travel-001",
    question:
      "A travel platform raises guidance on resilient demand even as investors worry about the consumer. What would you look at to decide if the strength is sustainable?",
    category: "Market Knowledge",
    difficulty: "Intermediate",
    mode: "Market Scenarios",
    marketScenario:
      "An online travel company posts an earnings beat and stronger forward outlook while macro data sends mixed signals about consumer health.",
    expectedConcepts: [
      "Separate leisure and business travel demand",
      "Bookings, nights, ADR, and cancellation trends matter",
      "Consumer income and confidence affect sustainability",
      "International exposure and FX can matter",
      "Operating leverage can amplify revenue changes",
    ],
    referenceAnswer:
      "I would look beyond the headline beat and analyze bookings, room nights, average daily rates, cancellations, and whether demand is leisure, business, domestic, or international. If the consumer is weakening, travel can still hold up for a while, but guidance quality depends on forward bookings and cancellation behavior. I would also assess operating leverage because small changes in gross bookings can have a large impact on EBITDA. The key is whether the company is gaining share or simply benefiting from a still-healthy travel cycle.",
    followUpConcept:
      "How would weaker consumer confidence flow through a travel company's model?",
    sourceType: "local",
  },
  {
    id: "news-media-001",
    question:
      "A streaming media company reports record streaming revenue, while a legacy media peer struggles with linear TV pressure. How would you compare the two businesses?",
    category: "Valuation",
    difficulty: "Intermediate",
    mode: "Market Scenarios",
    marketScenario:
      "Investors are rewarding companies that show streaming momentum but remain skeptical of businesses still tied to declining legacy media assets.",
    expectedConcepts: [
      "Streaming growth and profitability matter",
      "Linear TV decline can create a valuation drag",
      "Content costs and churn affect margins",
      "Debt load and free cash flow are important",
      "Sum-of-the-parts can help separate assets",
    ],
    referenceAnswer:
      "I would compare growth, profitability, cash conversion, and balance sheet risk. Streaming revenue growth is positive, but it only creates value if the business can scale margins after content costs, marketing, and churn. A legacy media business may have cash-generative linear assets, but the decline rate can weigh on the multiple. I would likely use a sum-of-the-parts framework, valuing streaming, studios, networks, and any sports or licensing assets separately, then adjust for debt and corporate costs.",
    followUpConcept:
      "Why might a streaming business deserve a high revenue multiple but a low EBITDA multiple?",
    sourceType: "local",
  },
  {
    id: "news-lithium-001",
    question:
      "A lithium producer rallies after higher commodity prices lift earnings. How would you think about valuation for a company tied closely to commodity prices?",
    category: "Valuation",
    difficulty: "Advanced",
    mode: "Market Scenarios",
    marketScenario:
      "A battery-materials company beats earnings because spot prices improve, but investors are unsure whether the pricing recovery is cyclical or durable.",
    expectedConcepts: [
      "Normalize earnings across the cycle",
      "Commodity price assumptions drive revenue and margins",
      "Cost curve position matters",
      "Supply additions and demand from EVs or storage matter",
      "Use sensitivity analysis and mid-cycle multiples",
    ],
    referenceAnswer:
      "For a commodity-linked company, I would avoid capitalizing peak earnings at a normal multiple. I would normalize prices and margins across the cycle, analyze the company's position on the cost curve, and test supply-demand scenarios. If the company is low cost and benefits from long-term battery demand, it may deserve a stronger multiple, but near-term earnings can be volatile. I would use sensitivity tables for commodity prices, mid-cycle EBITDA, and free cash flow rather than relying on one spot-price case.",
    followUpConcept:
      "Why might a low-cost producer deserve a premium multiple?",
    sourceType: "local",
  },
  {
    id: "news-food-001",
    question:
      "A packaged-food company raises sales guidance but the stock falls because investors focus on weaker volumes and cost pressure. How can that happen?",
    category: "Accounting",
    difficulty: "Intermediate",
    mode: "Market Scenarios",
    marketScenario:
      "A consumer staples company reports better headline sales guidance, but underlying unit volumes are soft and input costs remain elevated.",
    expectedConcepts: [
      "Price increases can lift revenue while volumes decline",
      "Mix and inflation can mask demand weakness",
      "Gross margin pressure can offset sales growth",
      "Retailer inventory and promotions matter",
      "Quality of revenue matters for valuation",
    ],
    referenceAnswer:
      "Sales guidance can improve because of pricing, mix, or inflation even if real unit demand is weak. Investors may look through higher revenue if volumes are falling, promotions are increasing, or input costs are pressuring gross margin. In that case, EBITDA and free cash flow may not improve much despite higher sales. I would bridge revenue growth into price, volume, mix, and FX, then compare gross margin and working capital trends to judge the quality of the guidance.",
    followUpConcept:
      "What would you rather see: higher price with lower volume or lower price with higher volume?",
    sourceType: "local",
  },
  {
    id: "news-aerospace-001",
    question:
      "An aerospace supplier sells off after weak guidance following a recent spinoff. What would you focus on when evaluating the business post-spinoff?",
    category: "M&A",
    difficulty: "Advanced",
    mode: "Market Scenarios",
    marketScenario:
      "A newly separated aerospace business disappoints investors with weaker results and lower forward guidance shortly after becoming independent.",
    expectedConcepts: [
      "Standalone cost structure can differ from parent-company reporting",
      "Guidance reset may reveal dis-synergies or execution issues",
      "End-market demand and backlog matter",
      "Capital structure after spinoff can affect equity value",
      "Management credibility is critical early post-separation",
    ],
    referenceAnswer:
      "For a post-spinoff company, I would focus on whether the standalone financials are worse than investors expected. Separation can create dis-synergies, new public-company costs, and a different capital structure. I would review backlog, organic growth, margins, free cash flow, leverage, and any stranded costs from the parent. A guidance cut soon after separation can hurt management credibility, so I would also ask whether this is a one-time reset or evidence that the original investment thesis was too optimistic.",
    followUpConcept:
      "Why do some spinoffs outperform after the initial separation period?",
    sourceType: "local",
  },
  {
    id: "news-housing-001",
    question:
      "A housing marketplace reports weak guidance, a surprise loss, and job cuts. How would higher rates and housing affordability affect your forecast?",
    category: "DCF",
    difficulty: "Intermediate",
    mode: "Market Scenarios",
    marketScenario:
      "A real estate technology platform faces pressure as housing affordability remains strained and transaction volumes stay below normal levels.",
    expectedConcepts: [
      "Higher mortgage rates reduce transaction activity",
      "Lower home turnover pressures leads and advertising revenue",
      "Cost cuts can support margins but may signal weak demand",
      "Forecast should separate cyclical recovery from structural growth",
      "Terminal assumptions should reflect normalized housing turnover",
    ],
    referenceAnswer:
      "Higher mortgage rates and weak affordability reduce home turnover, which can pressure marketplace traffic, leads, agent advertising, and transaction-related revenue. In the forecast, I would separate cyclical recovery from structural product growth. Job cuts can improve near-term margins, but they also signal demand pressure and may limit investment. For a DCF, I would normalize housing turnover over time, test rate scenarios, and be careful with terminal growth if the business depends heavily on transaction volume returning to prior peaks.",
    followUpConcept:
      "What leading indicators would you monitor for a housing marketplace?",
    sourceType: "local",
  },
  {
    id: "news-delivery-001",
    question:
      "A delivery platform beats revenue expectations but profit is weighed down by higher costs. How would you assess whether the business model is improving?",
    category: "Valuation",
    difficulty: "Intermediate",
    mode: "Market Scenarios",
    marketScenario:
      "A local-commerce platform is growing revenue, but investors are watching contribution margin, driver incentives, marketing spend, and operating leverage.",
    expectedConcepts: [
      "Revenue growth must be compared to contribution margin",
      "Unit economics and order frequency matter",
      "Marketing and incentives can mask profitability",
      "Scale should improve operating leverage",
      "Competition can pressure take rate and margins",
    ],
    referenceAnswer:
      "I would focus on unit economics, not just revenue growth. Key metrics include order frequency, gross order value, take rate, contribution margin per order, driver incentives, marketing spend, and cohort retention. If costs are rising because the company is investing behind profitable growth, that may be acceptable. If costs are required just to maintain volume in a competitive market, the model is weaker. The business is improving if scale leads to higher contribution margins and better free cash flow conversion.",
    followUpConcept:
      "Why can high revenue growth still destroy value in marketplace businesses?",
    sourceType: "local",
  },
  {
    id: "news-chip-001",
    question:
      "Reports of import restrictions on Chinese datacenter components lift certain optical and semiconductor suppliers. How would you evaluate the winners and losers?",
    category: "Market Knowledge",
    difficulty: "Advanced",
    mode: "Market Scenarios",
    marketScenario:
      "A potential trade restriction could redirect demand toward domestic or allied suppliers of key AI infrastructure components.",
    expectedConcepts: [
      "Restrictions can shift demand and pricing power",
      "Supply chain exposure determines winners and losers",
      "Capacity and qualification timelines matter",
      "Policy risk can reverse quickly",
      "AI infrastructure demand should be separated from one-time policy benefit",
    ],
    referenceAnswer:
      "I would map the supply chain and identify which companies have qualified products, available capacity, and limited exposure to restricted regions. Winners may gain volume, pricing power, and strategic value if customers need alternative suppliers. Losers could include companies with China-heavy revenue or supply chains. I would also be cautious because policy-driven moves can reverse quickly. The strongest case is a company that benefits from both structural AI infrastructure demand and a durable supply-chain shift.",
    followUpConcept:
      "How would you diligence whether the demand shift is temporary or structural?",
    sourceType: "local",
  },
  {
    id: "news-private-tech-001",
    question:
      "A listed fund offers retail investors exposure to private technology companies that were historically available mostly to institutions. What diligence questions would you ask?",
    category: "LBO / Private Equity",
    difficulty: "Intermediate",
    mode: "Market Scenarios",
    marketScenario:
      "A public vehicle markets access to a portfolio of high-profile private technology companies, including late-stage AI, fintech, space, and software names.",
    expectedConcepts: [
      "Underlying private-company valuations may be stale or opaque",
      "Liquidity mismatch and fees matter",
      "Portfolio concentration and access quality should be reviewed",
      "Public vehicle price may trade at a premium or discount to NAV",
      "Exit timing and mark-to-market risk are important",
    ],
    referenceAnswer:
      "I would start with the quality of the underlying holdings, valuation methodology, fees, liquidity, concentration, and governance. Private-company marks can be stale or subjective, so the public vehicle may trade at a premium or discount to NAV. I would also ask how the fund sources shares, whether it has real access to the best companies, and what happens if IPO markets close. The product can be attractive, but the key risks are valuation transparency, liquidity mismatch, and paying too much for indirect exposure.",
    followUpConcept:
      "Why might a private-tech fund trade at a discount to reported NAV?",
    sourceType: "local",
  },
  {
    id: "acct-007",
    question:
      "A company records $100 of stock-based compensation. Walk me through the impact on the three financial statements.",
    category: "Accounting",
    difficulty: "Intermediate",
    mode: "Technical Questions",
    expectedConcepts: [
      "Stock-based compensation reduces operating income and net income",
      "It is added back on the cash flow statement because it is non-cash",
      "Additional paid-in capital or equity increases",
      "Cash is unchanged before taxes",
      "Dilution should be considered separately",
    ],
    referenceAnswer:
      "Stock-based compensation is an expense on the income statement, so operating income, pre-tax income, and net income decrease. On the cash flow statement, it is added back because it is non-cash, so before taxes there is no direct cash impact. On the balance sheet, equity increases through additional paid-in capital, while retained earnings is lower because net income is lower. The company may still face dilution, which is a separate but important economic cost.",
    followUpConcept:
      "Why do some investors add back stock-based compensation while others do not?",
    sourceType: "local",
  },
  {
    id: "acct-008",
    question:
      "What is the difference between accounts payable and accrued expenses?",
    category: "Accounting",
    difficulty: "Beginner",
    mode: "Technical Questions",
    expectedConcepts: [
      "Accounts payable usually relates to invoices from suppliers",
      "Accrued expenses are incurred but not yet invoiced or paid",
      "Both are operating liabilities",
      "Increases in either can boost cash flow temporarily",
      "They reverse when cash payment is made",
    ],
    referenceAnswer:
      "Accounts payable usually represents supplier invoices the company has received but not paid. Accrued expenses represent costs the company has incurred but may not have received an invoice for yet, such as payroll, bonuses, utilities, or interest accruals. Both are operating liabilities, and increases in either can boost cash flow temporarily because the company has recognized an expense without paying cash yet. They reverse when the company pays the obligation.",
    followUpConcept:
      "Why can growing payables improve free cash flow in the short term?",
    sourceType: "local",
  },
  {
    id: "acct-009",
    question:
      "A company changes its useful life assumption for PP&E from 5 years to 10 years. How does that affect the statements and valuation?",
    category: "Accounting",
    difficulty: "Advanced",
    mode: "Technical Questions",
    expectedConcepts: [
      "Annual depreciation expense decreases",
      "Net income increases from lower depreciation",
      "Cash flow impact is limited except for taxes",
      "Net PP&E remains higher over time",
      "Valuation should adjust for accounting assumption changes",
    ],
    referenceAnswer:
      "Extending useful life lowers annual depreciation expense, which increases operating income, pre-tax income, and net income. On the cash flow statement, net income is higher but the depreciation add-back is lower, so the cash impact is mostly the tax effect. On the balance sheet, net PP&E remains higher over time because assets depreciate more slowly. For valuation, I would be careful because EBITDA does not change, but EBIT and net income improve from an accounting assumption rather than better economics.",
    followUpConcept:
      "Which valuation multiples would be affected most by this change?",
    sourceType: "local",
  },
  {
    id: "ev-006",
    question:
      "What is the difference between basic shares outstanding and diluted shares outstanding?",
    category: "Enterprise Value and Equity Value",
    difficulty: "Beginner",
    mode: "Technical Questions",
    expectedConcepts: [
      "Basic shares are current common shares outstanding",
      "Diluted shares include potentially dilutive securities",
      "Options, RSUs, warrants, and convertibles can add dilution",
      "Treasury stock method is commonly used for options",
      "Diluted shares affect equity value and per-share metrics",
    ],
    referenceAnswer:
      "Basic shares outstanding are the current common shares actually outstanding. Diluted shares include the impact of securities that could become common shares, such as options, RSUs, warrants, and convertible securities. For options and warrants, analysts often use the treasury stock method to estimate net new shares. Diluted shares matter because they affect equity value, EPS, and per-share valuation metrics.",
    followUpConcept:
      "How does the treasury stock method work at a high level?",
    sourceType: "local",
  },
  {
    id: "ev-007",
    question:
      "Why do we use enterprise value for EBITDA multiples but equity value for P/E multiples?",
    category: "Enterprise Value and Equity Value",
    difficulty: "Intermediate",
    mode: "Technical Questions",
    expectedConcepts: [
      "Enterprise value belongs to all capital providers",
      "EBITDA is before interest and available before financing costs",
      "Equity value belongs only to common shareholders",
      "Net income is after interest and taxes",
      "Numerator and denominator must match capital structure",
    ],
    referenceAnswer:
      "We use enterprise value with EBITDA because EBITDA is before interest expense and represents earnings available to all capital providers before financing costs. Enterprise value also measures the value of the business to all capital providers. P/E uses equity value because net income is after interest expense and belongs to common shareholders. The broader rule is to match the numerator and denominator: enterprise value with capital-structure-neutral metrics, equity value with equity-holder metrics.",
    followUpConcept:
      "Would you pair enterprise value with revenue or equity value with revenue?",
    sourceType: "local",
  },
  {
    id: "val-007",
    question:
      "What are the main weaknesses of using comparable company analysis?",
    category: "Valuation",
    difficulty: "Intermediate",
    mode: "Technical Questions",
    expectedConcepts: [
      "No company is perfectly comparable",
      "Market prices can be temporarily distorted",
      "Accounting differences can affect metrics",
      "Growth, margin, risk, and leverage differences matter",
      "Comps are market-based but not intrinsic value",
    ],
    referenceAnswer:
      "Comparable company analysis is useful because it reflects current market pricing, but no peer set is perfect. Companies differ in growth, margins, cyclicality, capital intensity, leverage, accounting, and business mix. Multiples can also be distorted by market sentiment or temporary earnings. So comps are a good market-based benchmark, but I would normalize metrics, choose peers carefully, and cross-check the result with precedent transactions and a DCF.",
    followUpConcept:
      "How would you choose the best peer set for a company?",
    sourceType: "local",
  },
  {
    id: "val-008",
    question:
      "Why might precedent transaction multiples be higher than trading multiples?",
    category: "Valuation",
    difficulty: "Beginner",
    mode: "Technical Questions",
    expectedConcepts: [
      "Precedents often include control premiums",
      "Buyers may pay for synergies",
      "Competitive auctions can raise prices",
      "Market timing and deal conditions matter",
      "Precedents may become stale quickly",
    ],
    referenceAnswer:
      "Precedent transaction multiples are often higher because buyers pay a control premium to acquire the whole company. Strategic buyers may also pay for synergies, and competitive auctions can push prices higher. However, precedent multiples depend heavily on market timing, financing conditions, buyer universe, and deal-specific factors, so they can become stale or not directly comparable.",
    followUpConcept:
      "When might precedent transaction multiples be lower than trading multiples?",
    sourceType: "local",
  },
  {
    id: "val-009",
    question:
      "How would you value a private company differently from a public company?",
    category: "Valuation",
    difficulty: "Intermediate",
    mode: "Technical Questions",
    expectedConcepts: [
      "Private companies have less disclosure and less liquidity",
      "Public comps may need a private-company discount",
      "Financials may require normalization",
      "Owner compensation and one-time items matter",
      "Control, liquidity, and size adjustments may apply",
    ],
    referenceAnswer:
      "For a private company, I would usually rely on public comps, precedent transactions, and a DCF, but I would spend more time normalizing the financials. Private companies may have owner compensation, related-party transactions, one-time expenses, or less mature reporting. I would also consider size, liquidity, customer concentration, and control issues. Public-company multiples may need adjustment because private companies are less liquid and often smaller or riskier.",
    followUpConcept:
      "Why might a private company still deserve a premium multiple?",
    sourceType: "local",
  },
  {
    id: "dcf-007",
    question:
      "What are the main steps to build an unlevered DCF?",
    category: "DCF",
    difficulty: "Beginner",
    mode: "Technical Questions",
    expectedConcepts: [
      "Project revenue, margins, taxes, and unlevered free cash flow",
      "Calculate terminal value",
      "Discount cash flows and terminal value using WACC",
      "Sum to enterprise value",
      "Bridge from enterprise value to equity value and share price",
    ],
    referenceAnswer:
      "First, project the company's operating performance: revenue, margins, taxes, CapEx, depreciation, and working capital. Then calculate unlevered free cash flow, usually from EBIT after taxes plus D&A minus CapEx minus the increase in working capital. Next, calculate terminal value using either an exit multiple or perpetuity growth method. Discount the projected cash flows and terminal value at WACC to get enterprise value, then subtract net debt and other claims to get equity value and divide by diluted shares.",
    followUpConcept:
      "Why do you subtract net debt after calculating enterprise value?",
    sourceType: "local",
  },
  {
    id: "dcf-008",
    question:
      "What happens to a DCF if working capital as a percentage of revenue increases over the forecast period?",
    category: "DCF",
    difficulty: "Intermediate",
    mode: "Technical Questions",
    expectedConcepts: [
      "More cash is tied up in operations",
      "Unlevered free cash flow decreases",
      "Present value and enterprise value decline",
      "Growth may require more upfront investment",
      "Working capital assumptions should match business model",
    ],
    referenceAnswer:
      "If working capital as a percentage of revenue increases, the company needs more operating assets relative to sales, so more cash is tied up in receivables or inventory net of payables. The increase in working capital is a use of cash, which lowers unlevered free cash flow. That reduces the present value of cash flows and enterprise value. It is especially important for fast-growing businesses because growth can consume cash even when revenue and EBITDA are increasing.",
    followUpConcept:
      "What type of company might have negative working capital as it grows?",
    sourceType: "local",
  },
  {
    id: "dcf-009",
    question:
      "Why should the terminal growth rate usually be lower than the discount rate?",
    category: "DCF",
    difficulty: "Beginner",
    mode: "Technical Questions",
    expectedConcepts: [
      "Perpetuity formula requires growth below discount rate",
      "Long-term company growth cannot exceed economy forever",
      "Higher growth rate increases terminal value dramatically",
      "Assumption should represent mature steady-state growth",
    ],
    referenceAnswer:
      "The perpetuity growth formula only works if the terminal growth rate is below the discount rate. Conceptually, a mature company cannot grow faster than the economy forever, or it would eventually become unrealistically large. The terminal growth rate should represent steady-state long-term growth, not near-term high growth. Because terminal value is often a large share of a DCF, even small changes in this assumption can have a big valuation impact.",
    followUpConcept:
      "What would be a reasonable terminal growth range for a mature company?",
    sourceType: "local",
  },
  {
    id: "ma-007",
    question:
      "What are the main types of synergies in M&A, and how do they affect valuation?",
    category: "M&A",
    difficulty: "Beginner",
    mode: "Technical Questions",
    expectedConcepts: [
      "Cost synergies reduce expenses",
      "Revenue synergies increase sales or pricing power",
      "Tax and financing synergies may also exist",
      "Synergies can justify a higher purchase price",
      "Execution risk and timing should be considered",
    ],
    referenceAnswer:
      "The main synergies are cost synergies and revenue synergies. Cost synergies come from eliminating duplicate expenses, consolidating vendors, or improving efficiency. Revenue synergies come from cross-selling, better distribution, or pricing power, but they are usually harder to prove. Synergies increase the buyer's expected cash flows and can justify a higher purchase price, but I would haircut them for timing, cost to achieve, and execution risk.",
    followUpConcept:
      "Why are revenue synergies usually treated as less certain than cost synergies?",
    sourceType: "local",
  },
  {
    id: "ma-008",
    question:
      "What is purchase price allocation in an acquisition?",
    category: "M&A",
    difficulty: "Intermediate",
    mode: "Technical Questions",
    expectedConcepts: [
      "Purchase price is allocated to tangible and identifiable intangible assets",
      "Liabilities are marked to fair value",
      "Goodwill captures residual purchase price",
      "Intangible amortization can affect future earnings",
      "Accounting does not necessarily equal economic value creation",
    ],
    referenceAnswer:
      "Purchase price allocation is the accounting process after an acquisition where the buyer allocates the purchase price to the target's acquired assets and liabilities at fair value. Identifiable intangible assets such as customer relationships, trademarks, and technology may be created. Any remaining excess purchase price becomes goodwill. This matters because amortization of certain intangibles can reduce future earnings, and goodwill may be impaired if the deal underperforms.",
    followUpConcept:
      "How does goodwill differ from identifiable intangible assets?",
    sourceType: "local",
  },
  {
    id: "ma-009",
    question:
      "Why might a seller prefer an all-cash offer even if a stock offer has a higher headline value?",
    category: "M&A",
    difficulty: "Intermediate",
    mode: "Technical Questions",
    expectedConcepts: [
      "Cash provides certainty of value",
      "Stock value can move before closing",
      "Seller may not want buyer execution risk",
      "Tax treatment and upside participation matter",
      "Deal certainty and financing certainty are important",
    ],
    referenceAnswer:
      "A seller may prefer cash because it provides certainty of value. A stock offer's headline value can change if the buyer's share price falls before closing, and the seller may not want exposure to the buyer's business or integration risk. Stock can still be attractive if the seller wants upside or better tax treatment, but all else equal, cash is cleaner and often viewed as more certain.",
    followUpConcept:
      "How could a collar reduce risk in a stock-for-stock deal?",
    sourceType: "local",
  },
  {
    id: "lbo-007",
    question:
      "What makes a company a good LBO candidate?",
    category: "LBO / Private Equity",
    difficulty: "Beginner",
    mode: "Technical Questions",
    expectedConcepts: [
      "Stable and predictable cash flows",
      "Strong free cash flow conversion",
      "Modest CapEx and working capital needs",
      "Defensible market position",
      "Opportunities for operational improvement or multiple expansion",
    ],
    referenceAnswer:
      "A good LBO candidate has stable, predictable cash flows that can support debt, strong free cash flow conversion, reasonable CapEx and working capital needs, and a defensible market position. It is also attractive if the sponsor can improve operations, grow EBITDA, pay down debt, and exit at a reasonable multiple. Highly cyclical companies or companies with heavy investment needs are harder LBO candidates because debt service becomes riskier.",
    followUpConcept:
      "Why is cash flow predictability more important than revenue growth in many LBOs?",
    sourceType: "local",
  },
  {
    id: "lbo-008",
    question:
      "How does increasing the purchase price affect an LBO model?",
    category: "LBO / Private Equity",
    difficulty: "Intermediate",
    mode: "Technical Questions",
    expectedConcepts: [
      "Higher purchase price increases entry multiple",
      "More debt or equity financing is required",
      "Sponsor equity contribution usually increases",
      "IRR and MOIC decline unless offset by growth or exit multiple",
      "Debt capacity may limit the bid",
    ],
    referenceAnswer:
      "A higher purchase price increases the entry multiple and requires more financing. If debt capacity is fixed, the sponsor must contribute more equity, which lowers IRR and MOIC unless EBITDA growth, debt paydown, or exit multiple expansion offsets it. If the sponsor adds more debt, leverage and default risk increase. This is why entry valuation is one of the most important drivers of LBO returns.",
    followUpConcept:
      "Which return metric is more sensitive to purchase price: IRR or MOIC?",
    sourceType: "local",
  },
  {
    id: "lbo-009",
    question:
      "What is a dividend recapitalization, and why would a sponsor do one?",
    category: "LBO / Private Equity",
    difficulty: "Advanced",
    mode: "Technical Questions",
    expectedConcepts: [
      "Company raises new debt to pay a dividend to sponsor",
      "Sponsor returns capital before exit",
      "It can improve IRR by accelerating cash returns",
      "Leverage and financial risk increase",
      "Lenders require sufficient cash flow and debt capacity",
    ],
    referenceAnswer:
      "A dividend recapitalization is when a sponsor-owned company raises additional debt and uses the proceeds to pay a dividend to the sponsor. It lets the sponsor return some capital before an exit and can improve IRR because cash is received earlier. The downside is higher leverage and financial risk for the portfolio company. It only works if the company has enough debt capacity and stable cash flow to support the added debt.",
    followUpConcept:
      "Why might creditors dislike dividend recaps?",
    sourceType: "local",
  },
  {
    id: "capm-006",
    question:
      "What is the difference between investment-grade debt and high-yield debt?",
    category: "Capital Markets",
    difficulty: "Beginner",
    mode: "Technical Questions",
    expectedConcepts: [
      "Investment-grade debt has higher ratings and lower default risk",
      "High-yield debt has lower ratings and higher coupons",
      "Investor base and covenants can differ",
      "Market access depends on risk appetite",
      "Credit spreads compensate investors for risk",
    ],
    referenceAnswer:
      "Investment-grade debt is rated higher and viewed as lower default risk, so it usually has lower coupons and tighter spreads. High-yield debt is rated below investment grade, has higher default risk, and therefore requires higher yields. The investor base, covenants, and market access can differ significantly. In weaker markets, high-yield issuers may have more difficulty refinancing or issuing new debt.",
    followUpConcept:
      "How would a move from investment grade to high yield affect valuation?",
    sourceType: "local",
  },
  {
    id: "capm-007",
    question:
      "Why might a company choose to issue debt instead of equity?",
    category: "Capital Markets",
    difficulty: "Beginner",
    mode: "Technical Questions",
    expectedConcepts: [
      "Debt avoids ownership dilution",
      "Debt may be cheaper because of lower risk and tax deductibility",
      "Interest creates fixed obligations",
      "Debt capacity depends on cash flow and leverage",
      "Equity may be preferred if leverage is already high",
    ],
    referenceAnswer:
      "A company may issue debt instead of equity because debt avoids diluting existing shareholders and is often cheaper due to lower risk and the tax deductibility of interest. However, debt creates fixed interest and principal obligations, so the company needs stable cash flow and enough debt capacity. If the company is already highly levered or cash flows are uncertain, equity may be safer despite dilution.",
    followUpConcept:
      "When would equity be better than debt even if it is more expensive?",
    sourceType: "local",
  },
  {
    id: "mk-006",
    question:
      "How do credit spreads differ from Treasury yields, and why do they matter?",
    category: "Market Knowledge",
    difficulty: "Intermediate",
    mode: "Technical Questions",
    expectedConcepts: [
      "Treasury yields represent risk-free or benchmark rates",
      "Credit spreads compensate for default and liquidity risk",
      "Corporate borrowing costs include benchmark yield plus spread",
      "Wider spreads signal higher perceived risk",
      "Spreads affect valuation, LBO financing, and refinancing risk",
    ],
    referenceAnswer:
      "Treasury yields are the benchmark risk-free rates, while credit spreads are the additional yield investors require to hold corporate debt over Treasuries. A company's borrowing cost is roughly the benchmark yield plus its credit spread. Wider spreads signal higher perceived default, liquidity, or macro risk. They matter because they affect WACC, LBO financing, refinancing risk, and valuation multiples.",
    followUpConcept:
      "Why can corporate borrowing costs rise even if Treasury yields are flat?",
    sourceType: "local",
  },
  {
    id: "mk-007",
    question:
      "What is the difference between inflation hurting margins and inflation helping revenue?",
    category: "Market Knowledge",
    difficulty: "Intermediate",
    mode: "Technical Questions",
    expectedConcepts: [
      "Inflation can raise selling prices and nominal revenue",
      "Costs may rise faster than prices",
      "Pricing power determines margin resilience",
      "Volume can fall if prices rise too much",
      "Working capital and discount rates may also increase",
    ],
    referenceAnswer:
      "Inflation can help nominal revenue if a company raises prices, but it can hurt margins if labor, materials, freight, or energy costs rise faster than selling prices. The key is pricing power: strong brands or mission-critical products can pass through costs better than commoditized businesses. Even if revenue rises, volume may fall if customers resist higher prices. Inflation can also increase working capital needs and discount rates, which affects valuation.",
    followUpConcept:
      "What type of company has the strongest pricing power?",
    sourceType: "local",
  },
  {
    id: "gf-002",
    question:
      "What is operating leverage, and why does it matter for valuation?",
    category: "General Finance",
    difficulty: "Beginner",
    mode: "Technical Questions",
    expectedConcepts: [
      "Operating leverage measures fixed-cost sensitivity",
      "Revenue growth can drive disproportionate profit growth",
      "Revenue declines can pressure margins quickly",
      "High fixed costs increase earnings volatility",
      "It affects cyclicality and valuation multiples",
    ],
    referenceAnswer:
      "Operating leverage means a company has a high fixed-cost base, so changes in revenue have an outsized impact on profit. If revenue grows, fixed costs are spread over more sales and margins can expand quickly. If revenue falls, margins can compress quickly because costs do not decline at the same pace. It matters for valuation because high operating leverage can create upside in growth periods but also increases cyclicality and downside risk.",
    followUpConcept:
      "Which industries tend to have high operating leverage?",
    sourceType: "local",
  },
  {
    id: "gf-005",
    question:
      "What is the difference between gross margin, EBITDA margin, and free cash flow margin?",
    category: "General Finance",
    difficulty: "Beginner",
    mode: "Technical Questions",
    expectedConcepts: [
      "Gross margin measures revenue after cost of goods sold",
      "EBITDA margin includes operating expenses before D&A",
      "Free cash flow margin captures cash after CapEx and working capital",
      "Each margin answers a different question",
      "High EBITDA margin does not guarantee high cash conversion",
    ],
    referenceAnswer:
      "Gross margin shows how much revenue remains after direct cost of goods sold. EBITDA margin shows operating profitability before depreciation, amortization, interest, and taxes, so it includes operating expenses like sales and marketing or G&A. Free cash flow margin shows how much revenue turns into cash after operating costs, taxes, CapEx, and working capital needs. A company can have strong EBITDA margins but weak free cash flow if it has high CapEx or working capital requirements.",
    followUpConcept:
      "Which margin would you care about most in a capital-intensive business?",
    sourceType: "local",
  },
];
