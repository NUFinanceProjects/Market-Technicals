export type MIQuestion = {
  id: string;
  sourceNumber: number;
  page: number;
  question: string;
  sampleAnswer: string;
};

export const mi400Questions: MIQuestion[] = [
  {
    "id": "mi-001",
    "sourceNumber": 1,
    "page": 46,
    "question": "Explain the time value of money. Is money today worth more than money next year due to inflation?",
    "sampleAnswer": "No. The time value of money means you could invest money today and earn something\nadditional with it by next year.\nInflation also makes money less valuable over time, but the time value of money is about the\npotential returns of an investment made today."
  },
  {
    "id": "mi-002",
    "sourceNumber": 2,
    "page": 46,
    "question": "What does the “Discount Rate” mean?",
    "sampleAnswer": "The Discount Rate represents your opportunity cost or “targeted annualized return.” In other\nwords, if you don’t invest in this company, how much could you earn over the long term by\ninvesting in other, similar companies?\nThe Discount Rate represents the potential returns and the risk of other, similar opportunities.\nIf the Discount Rate is higher, both the potential returns and the risk are higher; the opposite is\ntrue if the Discount Rate is lower."
  },
  {
    "id": "mi-003",
    "sourceNumber": 3,
    "page": 46,
    "question": "Why is the Discount Rate higher if the potential returns are higher? Shouldn’t a company with higher potential returns have a lower Discount Rate, making it more valuable?",
    "sampleAnswer": "No. The Discount Rate is higher because the potential returns and the risk move together: If a\nstock could potentially go up by 10x, it’s much riskier than a stock that only has the potential to\nincrease by 2x.\nThe point is that there’s no such thing as a “free lunch”: Higher potential returns also mean that\nyour chances of losing money are higher."
  },
  {
    "id": "mi-004",
    "sourceNumber": 4,
    "page": 46,
    "question": "What is WACC?",
    "sampleAnswer": "WACC stands for the “Weighted Average Cost of Capital,” the most common Discount Rate\nused to value companies.\nTo calculate it, you multiply the % Equity in a company’s capital structure by the “Cost” of that\nEquity, multiply the % Debt in the company’s capital structure by the “Cost” of that Debt, and\nadd them up (and, if applicable, Preferred Stock and other long-term funding sources).\nFor example, if a company uses 60% Equity and 40% Debt, its Cost of Equity is 10%, and its Cost\nof Debt is 5%, then its WACC is 60% * 10% + 40% * 5% = 8%.\nWACC represents the average annualized return you’d expect to earn if you invested\nproportionally in the Debt AND Equity of a company and held them for the long term."
  },
  {
    "id": "mi-005",
    "sourceNumber": 5,
    "page": 47,
    "question": "How much would you pay for a company that generates $100 of cash flow every single year into eternity?",
    "sampleAnswer": "Company Value = Cash Flow / (Discount Rate – Cash Flow Growth Rate), where Cash Flow\nGrowth Rate < Discount Rate.\nIf the cash flow does not grow at all, Company Value = Cash Flow / Discount Rate.\nSo, if your Discount Rate, or “targeted yield,” is 10%, you’d pay $100 / 10% = $1,000.\nBut if your targeted yield is 20%, you’d pay only $100 / 20% = $500 for this company."
  },
  {
    "id": "mi-006",
    "sourceNumber": 6,
    "page": 47,
    "question": "A company generates $100 of cash flow today, and its cash flow is expected to grow at 5% per year for the long term. You could earn 10% per year by investing in other, similar companies. How much would you pay for this company?",
    "sampleAnswer": "Company Value = Cash Flow / (Discount Rate – Cash Flow Growth Rate), where Cash Flow\nGrowth Rate < Discount Rate.\nSo, this one becomes: $100 / (10% – 5%) = $2,000.\nA higher Discount Rate makes a company less valuable, and a higher cash flow growth rate\nmakes a company more valuable."
  },
  {
    "id": "mi-007",
    "sourceNumber": 7,
    "page": 47,
    "question": "What does “Present Value” mean, and what makes it change? How does it differ from Net Present Value?",
    "sampleAnswer": "The Present Value (PV) of an asset or company equals its future cash flows discounted at the\nappropriate Discount Rate (e.g., ~10% for many stocks).\n“Discount” means that you take a future cash flow, such as $100, and divide it by ((1 + Discount\nRate) ^ Year #), assuming a constant Discount Rate in each period.\nThe PV tells you what a company or asset is worth today based on its potential future\nperformance and your returns expectations.\nThe PV increases if the company’s expected future cash flow or growth rate increases or the\nDiscount Rate decreases.\nThe PV decreases if the opposite happens.\n“Net Present Value” means that you take the PV of these future cash flows and subtract the\nupfront cost or “asking price” of the company.\nIf the NPV is positive, the company is worth more than its current price."
  },
  {
    "id": "mi-008",
    "sourceNumber": 8,
    "page": 48,
    "question": "What does the internal rate of return (IRR) mean? How do you calculate it?",
    "sampleAnswer": "In technical terms, the IRR represents the Discount Rate at which the Net Present Value of an investment equals 0.\nColloquially, you can think of it as “the effective compounded rate of return on an investment.”\nFor example, if you invest $1,000 today and end up with $2,000 after 5 years, the IRR\nrepresents the return you’d have to earn on that $1,000, compounded each year, to reach\n$2,000 in 5 years.\nIt’s 14.9% in this example, which you can verify with a calculator or Excel.\nTo calculate the IRR, enter the upfront investment as a negative in Excel and the future cash\nflows and sale value as positives and apply the IRR function to the whole range."
  },
  {
    "id": "mi-009",
    "sourceNumber": 9,
    "page": 48,
    "question": "What affects the IRR? How do these factors differ from the ones that affect the Present Value?",
    "sampleAnswer": "Many factors are the same: Higher cash flows, growth rates, or future sale values for the asset\nincrease both the Present Value and the IRR. Lower values for these assumptions reduce both\nthe Present Value and the IRR.\nOne major difference is that the Discount Rate does NOT affect the IRR – because you are\nsolving for the Discount Rate when you calculate the IRR!\nThe whole point of the calculation is that you can compare the IRR to the Discount Rate to\ndetermine if the investment is worth your time and money.\nAnother major difference is that the upfront price or “asking price” affects the IRR since it’s\nentered as a negative for the first value in the series, but it does not impact the Present Value.\nYou should compare the Present Value to this upfront price to see if the investment is worth\nmore or less than its price."
  },
  {
    "id": "mi-010",
    "sourceNumber": 10,
    "page": 49,
    "question": "How do you use the IRR, Discount Rate, and Present Value to make investment decisions?",
    "sampleAnswer": "Normally, you calculate the IRR and compare it to the Discount Rate of a project, investment, or\ncompany.\nIf the IRR exceeds the Discount Rate, investing makes sense; if not, you should not invest.\nComparing the Present Value to the upfront price does the same thing: If the PV of the future\ncash flows exceeds this upfront price, invest; otherwise, do not invest.\nAccounting – Concepts\nYou MUST know accounting to have a shot at winning job offers.\nYes, everyone can go online and memorize the financial statements, but accounting questions\nare designed to evaluate how much you understand the key concepts.\nIn addition to the financial statements, you should also know about financial metrics/ratios and\ntopics that have become more important over time due to rule changes (e.g., lease accounting).\n• Interview Guide – Accounting Guide | Quiz Questions\n• Core Financial Modeling – Accounting Module"
  },
  {
    "id": "mi-011",
    "sourceNumber": 1,
    "page": 49,
    "question": "What are the three financial statements, and why do we need them?",
    "sampleAnswer": "The three main financial statements are the Income Statement, Balance Sheet, and Cash Flow\nStatement.\nThe Income Statement shows the company’s revenue, expenses, and taxes over a period and\nends with Net Income, which represents the company’s after-tax profits.\nThe Balance Sheet shows the company’s Assets – its resources – and how it paid for those\nresources – its Liabilities and Equity – at a specific point in time. Assets must equal Liabilities\nplus Equity.\nThe Cash Flow Statement begins with Net Income, adjusts for non-cash items and changes in\noperating assets and liabilities (working capital), and shows the company’s Cash Flow from\nInvesting and Financing activities; the last lines show the net change in cash and the company’s\nending cash balance.\nYou need the financial statements because there’s always a difference between the company’s\nNet Income and the cash flow it generates, and the statements let you estimate and forecast\nthe cash flow more accurately."
  },
  {
    "id": "mi-012",
    "sourceNumber": 2,
    "page": 50,
    "question": "How do the financial statements link together?",
    "sampleAnswer": "To link the statements, make Net Income from the Income Statement the top line of the Cash Flow Statement.\nThen, adjust this Net Income number for non-cash items such as Depreciation & Amortization.\nNext, reflect changes to operational Balance Sheet items such as Accounts Receivable, which\nmay increase or reduce the company’s cash flow.\nThis gets you to Cash Flow from Operations.\nNext, include the investing and financing activities, which may increase or reduce cash flow, and\nsum up Cash Flow from Operations, Investing, and Financing to get the net change in cash and\nending cash balance.\nCash at the bottom of the CFS becomes Cash on the Balance Sheet, and Net Income, Stock\nIssuances/Repurchases, Stock-Based Compensation, and Dividends link into Common\nShareholders’ Equity.\nNext, link the separate line items on the CFS to their corresponding Balance Sheet line items;\nfor example, CapEx and Depreciation link into Net PP&E.\nOn the Assets side of the Balance Sheet, subtract CFS links; add them on the L&E side.\nFinally, check that Assets equals Liabilities plus Equity at the end."
  },
  {
    "id": "mi-013",
    "sourceNumber": 3,
    "page": 50,
    "question": "What’s the most important financial statement?",
    "sampleAnswer": "The Cash Flow Statement is the most important single statement because it tells you how much\ncash a company generates, and almost all valuation is based on cash flow.\nThe Income Statement includes non-cash revenue, expenses, and taxes, and excludes cash\nspending on major items such as Capital Expenditures, so it does not accurately represent a\ncompany’s cash flow."
  },
  {
    "id": "mi-014",
    "sourceNumber": 4,
    "page": 51,
    "question": "How might the financial statements of a company in the U.K. or Germany be different from those of a company based in the U.S.?",
    "sampleAnswer": "Income Statements and Balance Sheets tend to be similar across different regions, but companies that use IFRS often start the Cash Flow Statement with something other than Net Income: Operating Income, Pre-Tax Income, or, if they are using the Direct Method, Cash Received and Cash Paid.\nIFRS-based companies also tend to place items in more “random” locations on the CFS, so you\nmay need to rearrange it.\nFinally, the Operating Lease Expense is split into Interest and Depreciation elements under IFRS,\nbut it’s recorded as a simple Rental Expense under U.S. GAAP."
  },
  {
    "id": "mi-015",
    "sourceNumber": 5,
    "page": 51,
    "question": "How do you know when a revenue or expense line item should appear on the Income Statement?",
    "sampleAnswer": "To appear on the Income Statement, an item must:\n1) Correspond 100% to the period shown – Revenue and expenses are based on the delivery of products or services, so an item delivered in Year 1 can count only in Year 1. And if a company buys a factory, it can’t list the entire purchase price on the Income Statement in one year because it will be useful for many years. It corresponds to more than just this period.\n2) Affect the business income available to common shareholders (Net Income to Common) – If something does not affect the owners of the business, it should not appear on the Income Statement.\nThe second point explains why Preferred Dividends appear on the Income Statement: They reduce the after-tax profits that could potentially go to common shareholders."
  },
  {
    "id": "mi-016",
    "sourceNumber": 6,
    "page": 51,
    "question": "A company collects cash payments from customers for a monthly subscription service one year in advance. Why do companies do this, and what is the cash flow impact?",
    "sampleAnswer": "A company collects cash payments for a monthly service long in advance if it has the market\nand pricing power to do so. Because of the time value of money, it’s better to collect cash today\nrather than several months or a year into the future.\nThis practice always boosts the company’s cash flow. It corresponds to Deferred Revenue, and\non the CFS, an increase in Deferred Revenue is a positive entry that boosts cash flow.\nWhen this cash is finally recognized as Revenue, Deferred Revenue declines, which appears as a\nnegative entry on the CFS."
  },
  {
    "id": "mi-017",
    "sourceNumber": 7,
    "page": 52,
    "question": "Why is Accounts Receivable (AR) an Asset but Deferred Revenue (DR) a Liability?",
    "sampleAnswer": "AR is an Asset because it provides a future benefit to the company – the receipt of additional\ncash from customers in the future.\nDR is a Liability because it represents future obligations for the company. The company has\nalready collected the cash associated with the sale, so it must spend money in the future to\ndeliver the product or service.\nAR and DR are opposites: AR has not yet been collected in cash but has been delivered,\nwhereas DR has been collected in cash but has not yet been delivered."
  },
  {
    "id": "mi-018",
    "sourceNumber": 8,
    "page": 52,
    "question": "What are “Deferred Taxes,” and how do they affect the statements?",
    "sampleAnswer": "“Deferred Taxes” represent cases where the “Book Taxes” shown on the Income Statement do\nnot represent what the company pays in Cash Taxes to the government in the period.\nThey typically arise due to Income Statement expenses that are not tax-deductible despite\nappearing above Pre-Tax Income. In some cases, they arise because of additional amounts that\nare deductible beyond what is shown on the IS.\nFor example, items such as Stock-Based Compensation and Asset Impairments are not\ndeductible for cash-tax purposes until “the second step” of the process (when employees\nexercise their options and receive shares or when an asset is sold at a loss).\nSo, these items initially create negative Deferred Taxes because the company pays more in Cash\nTaxes than its Income Statement suggests; later, they become deductible, and Deferred Taxes\nturn positive."
  },
  {
    "id": "mi-019",
    "sourceNumber": 9,
    "page": 53,
    "question": "A junior accountant in your department asks about how to fund the company’s operations via external sources and how they impact the financial statements. What do you say?",
    "sampleAnswer": "Debt and Equity are the two main methods of funding a company’s operations with outside\nmoney. Debt is initially cheaper for most companies, so most companies prefer to use Debt… up\nto a reasonable level.\nTo do this, the company must be able to service its Debt by paying for the interest expense and\npossible principal repayments; if it can’t, it must use Equity instead.\nBoth Equity and Debt issuances show up only on the Cash Flow Statement initially (in Cash Flow\nfrom Financing), and they boost the company’s Cash balance.\nWith Equity, the company’s share count increases immediately after issuance, which means\nthat existing investors get diluted (i.e., they own a smaller percentage of the company).\nWith Debt, the company must pay interest, which will be recorded on its Income Statement,\nreducing its Net Income and Cash, and it must eventually repay the full balance."
  },
  {
    "id": "mi-020",
    "sourceNumber": 10,
    "page": 53,
    "question": "Your firm recently acquired another company for $1,000 and created Goodwill of $400 and Other Intangible Assets of $200 on the Balance Sheet. A junior accountant in your department asks you why your firm did this – how would you respond?",
    "sampleAnswer": "You must create Goodwill and Other Intangible Assets after an acquisition to ensure the\nBalance Sheet remains in balance.\nIn an acquisition, you write down the seller’s Common Shareholders’ Equity and then combine\nits Assets and Liabilities with the acquirer's.\nIf you’ve paid exactly what the seller’s CSE is worth – e.g., you paid $1,000 in cash, and the\nseller has $1,000 in CSE, there are no problems.\nHowever, most acquirers pay premiums for target companies, meaning the Balance Sheet will\ngo out of balance.\nFor example, if the seller had $400 in CSE, the acquirer’s Balance Sheet would go out of balance\nimmediately because the Assets side would decrease by $1,000, but the L&E side would\ndecrease by only $400.\nTo plug the gap, you create “Other Intangible Assets” to represent the values of items such as\npatents, trademarks, intellectual property, and customer relationships ($200 in this case).\nGoodwill plugs the remaining gap of $400 and ensures that the Balance Sheet balances."
  },
  {
    "id": "mi-021",
    "sourceNumber": 11,
    "page": 54,
    "question": "Explain lease accounting on the financial statements under IFRS 16 / ASC 842, including the differences between Operating Leases and Finance Leases.",
    "sampleAnswer": "Assets and Liabilities associated with leases that last for more than 12 months now appear\ndirectly on companies’ Balance Sheets. Operating Lease Assets are sometimes called “Right-of-\nUse Assets,” and Operating Lease Liabilities initially match them (or are very close).\nThe rental expense for Finance Leases, which give companies an element of ownership or a\n“bargain purchase option” at the end, is split into Interest and Depreciation elements on the\nIncome Statement.\nOn the Cash Flow Statement, Depreciation is added back, and under Cash Flow from Financing,\nthe company records a negative for the “Lease Principal Repayments” (or a similar name).\nOn the Balance Sheet, the Lease Assets and Lease Liabilities decrease each year until the lease\nends. These decreases are based on the Lease Depreciation and Lease Principal Repayments.\nUnder IFRS, Operating Leases and Finance Leases are treated the same way, so the Operating\nLease Expense is also split into Interest and Depreciation elements, and the same BS and CFS\nline items change.\nFor Operating Leases under U.S. GAAP, companies record a simple Rental Expense on the\nIncome Statement, so there is no Depreciation/Interest split.\nHowever, the Lease Assets and Lease Liabilities on the Balance Sheet still decrease each year\nbased on the company’s estimates for “Lease Depreciation” and “Lease Principal Repayments,”\nwhich do not appear explicitly on the statements under U.S. GAAP."
  },
  {
    "id": "mi-022",
    "sourceNumber": 12,
    "page": 54,
    "question": "What’s the difference between Deferred Tax Assets and Deferred Tax Liabilities? How do Net Operating Losses (NOLs) factor in?",
    "sampleAnswer": "DTAs and DTLs relate to temporary differences between the book and tax bases of assets and\nliabilities.\nDeferred Tax Assets represent potential future cash-tax savings for the company, while\nDeferred Tax Liabilities represent additional cash-tax payments in the future.\nDTLs often arise because of different Depreciation methods, such as when companies\naccelerate Depreciation for tax purposes, reducing their tax burden in the near term but\nincreasing it in the future. They may also be created in acquisitions.\nDTAs may arise when the company loses money (i.e., negative Pre-Tax Income) in the current\nperiod and, therefore, accumulates a Net Operating Loss (NOL). They are also created when the\ncompany deducts an expense for Book-Tax purposes but cannot deduct it for Cash-Tax\npurposes (e.g., Stock-Based Compensation).\nNOLs are a component of the DTA; they equal approximately the Tax Rate * NOL Balance."
  },
  {
    "id": "mi-023",
    "sourceNumber": 13,
    "page": 55,
    "question": "How do you calculate Free Cash Flow (FCF), and what does it mean?",
    "sampleAnswer": "There are different types of Free Cash Flow, but one simple definition is Cash Flow from\nOperations (CFO) minus CapEx.\nFCF represents a company’s “discretionary cash flow” – how much cash flow it generates from\nits core business after paying for the cost of its funding sources, such as interest on Debt.\nIt’s defined this way because most items in CFO on the Cash Flow Statement are required, while\nmost of the CFI and CFF sections are optional or non-recurring (except for CapEx).\nA positive and growing FCF means the company doesn’t need outside funding sources to\ncontinue operating, and it could spend its cash flow in different ways: Hiring employees, re-\ninvesting in the business, acquiring other companies, or returning money to the shareholders\nwith Dividends or Stock Repurchases.\nNegative or declining FCF means the company may need to raise outside funding, restructure,\ncut expenses, or grow tremendously to survive."
  },
  {
    "id": "mi-024",
    "sourceNumber": 14,
    "page": 56,
    "question": "What is Working Capital? What does it mean if it’s positive or negative?",
    "sampleAnswer": "The official definition of Working Capital is “Current Assets minus Current Liabilities,” but the\nmore useful definition is:\nWorking Capital = Current Operational Assets – Current Operational Liabilities\n“Operational” means that you exclude items such as Cash, Investments, and Debt that are\nrelated to the company’s capital structure, not its core business.\nThis version is sometimes called Operating Working Capital.\nIt may also include Long-Term Assets and Liabilities related to the company’s business\noperations (Long-Term Deferred Revenue is a good example).\nWorking Capital tells you whether a company needs more in Operational Assets or Operational\nLiabilities to run its business, and how big the difference is.\nThe meaning of positive or negative Working Capital depends on why it has that sign. For\nexample, if the company has minimal Inventory and Receivables but a large Deferred Revenue\nbalance, that is usually seen as positive and indicates high efficiency.\nBut if Working Capital is positive because of a high Receivables balance due to difficulties\ncollecting cash from customers, that is a bad sign."
  },
  {
    "id": "mi-025",
    "sourceNumber": 15,
    "page": 56,
    "question": "What does the Change in Working Capital mean?",
    "sampleAnswer": "The Change in Working Capital tells you if the company needs to spend in ADVANCE of its\ngrowth or if it generates more cash flow as a RESULT of its growth.\nIt’s also a component of Free Cash Flow and contributes to the difference between “Cash Flow\nGenerated” and Net Income in the period.\nThe Change in Working Capital is often negative for retailers because they must spend money\non Inventory before being able to sell and deliver products.\nBut the Change in Working Capital is often positive for subscription companies that collect cash\nin advance because Deferred Revenue increases when they do that, which boosts cash flow.\nThe Change in Working Capital could increase or decrease Free Cash Flow, which directly affects\nthe company’s valuation."
  },
  {
    "id": "mi-026",
    "sourceNumber": 16,
    "page": 56,
    "question": "In its filings, a company states that EBITDA is a “proxy” for its Cash Flow from Operations.",
    "sampleAnswer": "The company’s EBITDA has been positive, growing at 20% for the past three years.\nHowever, the company recently ran low on Cash and filed for bankruptcy. How could this\nhave happened?\nEBITDA stands for “Earnings Before Interest, Taxes, Depreciation & Amortization” and is\ntypically based on a company’s Operating Income plus Depreciation & Amortization from the\nCash Flow Statement (with adjustments for various non-recurring items).\nAlthough EBITDA can be a “proxy” for CFO, it is not a perfect representation of a company’s\ncash flow.\nFor example, it excludes CapEx, Acquisitions, the Interest Expense, the Change in Working\nCapital, and one-time/non-recurring expenses.\nHigh numbers in any of these categories (e.g., a failed acquisition) could have turned the\ncompany’s cash flow negative and created this situation, even if its EBITDA looked fine."
  },
  {
    "id": "mi-027",
    "sourceNumber": 17,
    "page": 57,
    "question": "How do you calculate Return on Invested Capital (ROIC), and what does it tell you?",
    "sampleAnswer": "ROIC is defined as NOPAT / Average Invested Capital, where NOPAT (Net Operating Profit After\nTaxes) = Operating Income * (1 – Tax Rate), and Invested Capital = Common Shareholders’\nEquity + Debt + Preferred Stock – Cash.\n(Various other adjustments and line items are possible; this is just the basic definition.)\nROIC tells you how efficiently a company uses its capital from all sources (both external and\ninternal) to generate after-tax profits from its core business.\nIf two companies are in the same industry and have similar financial profiles, the one with the\nhigher ROIC should be valued more highly because all the investor groups earn more for each\n$1.00 they invest in the company."
  },
  {
    "id": "mi-028",
    "sourceNumber": 18,
    "page": 58,
    "question": "What are the advantages and disadvantages of ROE, ROA, and ROIC for measuring company performance?",
    "sampleAnswer": "These metrics all measure how efficiently a company uses its Equity, Assets, or Invested Capital\nto generate after-tax profits, but the nuances differ.\nROE and ROA are both affected by capital structure (the company’s Cash and Debt and Net\nInterest Expense) because they use Net Income in the numerator and Average Equity or\nAverage Assets in the denominator.\nHowever, they’re also closer to reality because Net Income appears directly on a company’s\nfinancial statements and affects its Cash balance.\nSince NOPAT is a hypothetical metric that doesn’t appear on the statements, ROIC is further\nremoved from the company’s Cash position, even though it has the advantage of being capital\nstructure-neutral.\nRegarding ROE vs. ROA, ROA tends to be more useful for companies that depend heavily on\ntheir Assets to generate Net Income (e.g., banks and insurance firms), while ROE is more of a\ngeneral-purpose metric that could apply to many industries.\nAccounting – Calculations\nIf you understand how the 3 financial statements link together,\nthese questions will be straightforward.\nIf not, these questions will be quite challenging, and you’ll need a\ngood amount of practice to master them.\nUse the following order when answering these questions:\n1. 2. Explain how the Income Statement changes, if at all.\nExplain how the Cash Flow Statement changes, if at all\n(including changes in Deferred Taxes).\n3. Explain how the Balance Sheet changes and why it still\nbalances, i.e., why Assets still equal Liabilities + Equity.\nIt’s also important to understand whether the interviewer wants\nyou to walk through a single change in one step or to combine\nchanges.\nFor example, the output looks quite different if they ask you to\nwalk through a simple Debt issuance vs. a Debt issuance with\ninterest and principal repayment over an entire year.\nIf anything is unclear, follow up and ask them to clarify whether\nthey want single/individual changes, combined changes, or\nsomething else.\nFor most accounting interview questions, you can assume a 25% corporate tax rate because\nthis is the average in developed countries, but it’s worth verifying this to be sure."
  },
  {
    "id": "mi-029",
    "sourceNumber": 1,
    "page": 59,
    "question": "A company hires a new employee for a total cost of $100,000 per year. Walk me through how the financial statements change, assuming a 25% tax rate.",
    "sampleAnswer": "This is a simple OpEx increase:\n• Income Statement: Operating Expenses increase by $100K, so Pre-Tax Income is $100K\nlower. At a 25% tax rate, Net Income is $75K lower.\n• Cash Flow Statement: Net Income is down by $75K, and there are no other changes, so\nCash at the bottom is also down by $75K.\n• Balance Sheet: Cash is down by $75K on the Assets side, so Total Assets are down by\n$75K. On the L&E side, Equity is down by $75K due to the Net Income reduction, so both\nsides are down by $75K and balance.\n• Intuition: The company spends $100K more but saves $25K in taxes."
  },
  {
    "id": "mi-030",
    "sourceNumber": 2,
    "page": 59,
    "question": "You go into a job interview, and the interviewer points out that every single Interview Guide has a question about how Depreciation going up by $10 affects the statements.",
    "sampleAnswer": "So, he asks you to walk through a $10 *decrease* in Depreciation, assuming a 25% tax rate.\nThis question mostly tests whether you are a human or an NPC:\n• IS: A $10 reduction in Depreciation means Pre-Tax Income is up by $10. Net Income is\nup by $7.5 at a 25% tax rate.\n• CFS: Net Income is up by $7.5, and now you add back *$10 less* of Depreciation, which\nmeans that Cash at the bottom is down by $2.5.\n• BS: Cash is down by $2.5, and Net PP&E is up by $10 because of the reduced\nDepreciation, so Total Assets are up by $7.5. On the L&E side, Equity is up by $7.5 due to\nthe increased Net Income, so both sides balance.\n• Intuition: The company loses a $2.5 tax benefit by recording a lower Depreciation\nnumber, so its Cash balance falls by $2.5."
  },
  {
    "id": "mi-031",
    "sourceNumber": 3,
    "page": 60,
    "question": "A company’s CEO has decided to sell all its assets, starting with a factory recorded at a book value of $100 on its Balance Sheet.",
    "sampleAnswer": "If this factory sells for $140, how do the statements change?\nThis is a Realized Gain of $140 – $100 = $40, which is recorded as follows:\n• IS: The $40 Realized Gain appears here and increases Pre-Tax Income by $40; Net\nIncome is up by $30 at a 25% tax rate.\n• CFS: Net Income is up by $30, but you reverse the $40 Gain in CFO. Then, in the CFI\nsection, you reflect the *total amount* of proceeds, or $140. Therefore, Cash changes\nby +$30 – $40 + $140 = +$130.\n• BS: Cash is up by $130, and Net PP&E is down by its book value of $100, so Total Assets\nare up by $30. On the L&E side, Equity is up by $30 due to the increased Net Income, so\nboth sides balance.\n• Intuition: The company sells the factory for $140 but pays taxes only on the $40\nrepresenting the Gain, so its Cash is up by $130 rather than $140."
  },
  {
    "id": "mi-032",
    "sourceNumber": 4,
    "page": 61,
    "question": "Walk me through the financial statements when a customer orders a product for $100 and receives it but hasn’t yet paid for it. Then, walk me through the cash collection, combining it with the first step. Ignore COGS and other delivery costs for simplicity.",
    "sampleAnswer": "The first step corresponds to Accounts Receivable increasing by $100, and the second step\nrepresents AR decreasing by $100. Here’s the first step:\n• IS: Revenue increases by $100, so Pre-Tax Income is up by $100, and Net Income is up\nby $75 at a 25% tax rate.\n• CFS: Net Income is up by $75, but the increase in AR reduces cash flow by $100, so Cash\nat the bottom is down by $25.\n• BS: Cash is down by $25, but AR is up by $100, so the Assets side is up by $75. On the\nL&E side, CSE is up by $75 due to the increased Net Income, so both sides are up by $75\nand balance.\n• Intuition: The company must pay $25 in taxes on Revenue it hasn’t yet collected in cash,\nso its Cash balance falls by $25.\nAnd when the AR is collected, combining it with the first step:\n• IS: Net Income is still up by $75, and there are no other changes.\n• CFS: Net Income is still up by $75, but now the AR increase is reversed, so the Change in\nAR is $0. Therefore, Cash at the bottom is now up by $75.\n• BS: Cash is now up by $75, and AR goes back to its original level, so the Assets side is up\nby $75. The L&E side is still up by $75 because of the CSE increase due to the increased\nNet Income in the first step, so both sides balance.\n• Intuition: This is a simple cash collection of a $100 payment owed to the company.\nInitially, Cash was down by $25 because the company had to pay taxes in advance; it’s\nup by $75 in the end because it’s a $100 sale minus $25 of taxes."
  },
  {
    "id": "mi-033",
    "sourceNumber": 5,
    "page": 61,
    "question": "A company hires a marketing agency to run an online advertising campaign for its services.",
    "sampleAnswer": "The marketing agency charges $10,000 for this initial campaign, delivers it, and invoices the\ncompany, which has 60 days to pay. Walk me through the statements.\nThis is an expense for the delivery of a service that the company has not yet paid in cash, and\nthere is a specific invoice attached, so this is a $10K increase in Accounts Payable:\n• IS: Operating Expenses increase by $10K, so Pre-Tax Income falls by $10K, and Net\nIncome falls by $7.5K at a 25% tax rate.\n• CFS: Net Income is down by $7.5K, but the increase in Accounts Payable is a $10K cash\ninflow because the company has not paid the invoice in cash yet. Cash at the bottom is\nup by $2.5K.\n• BS: Cash is up by $2.5K, so Total Assets are up by $2.5K. On the L&E side, AP is up by\n$10K, and Equity is down by $7.5K due to the reduced Net Income, so both sides are up\nby $2.5K and balance.\n• Intuition: The company gets a $2.5K tax benefit on this expense that it has not yet paid\nin cash."
  },
  {
    "id": "mi-034",
    "sourceNumber": 6,
    "page": 62,
    "question": "Now, walk me through what happens ONLY in Step 2, when the company finally makes payment after 60 days. Also, explain intuitively what happens from start to finish.",
    "sampleAnswer": "This corresponds to the payment of a previous Accounts Payable line. In ONLY this cash\npayment step:\n• IS: No changes.\n• CFS: Net Income is the same, but Accounts Payable now decreases by $10K, which is a\ncash outflow on the CFS. Cash is down by $10K.\n• BS: Cash is down by $10K on the Assets side, and AP is down by $10K on the L&E side, so\nboth sides are down by $10K, and the Balance Sheet balances.\n• Intuition: The company has finally paid this $10K bill. It received the tax benefit for this\nexpense in a previous period, so it’s not part of this step.\nFrom start to finish, the company’s Cash balance is down by $7.5K because it paid $10K for this\nmarketing campaign but also received a $2.5K tax deduction. There are no permanent changes\nto AP because it increased by $10K and then decreased by $10K as the payment was made."
  },
  {
    "id": "mi-035",
    "sourceNumber": 7,
    "page": 63,
    "question": "Your friend’s e-commerce company orders $200 of products from its main supplier. A month later, it sells these products for $500. Walk me through each step of this process SEPARATELY.",
    "sampleAnswer": "The initial step is an Inventory purchase, and the second step is a recognition of Revenue and\nCOGS and the removal of the Inventory. Here’s Step 1:\n• IS: No changes because no product has been sold or delivered yet.\n• CFS: The Inventory increase reduces cash flow by $200, so Cash is down by $200.\n• BS: Cash is down by $200 on the Assets side, and Inventory is up by $200. Nothing\nchanges on the L&E side, so the BS remains in balance.\n• Intuition: The company has spent $200 of Cash on Inventory.\nAnd Step 2:\n• IS: Revenue is up by $500, and COGS is up by $200, so Pre-Tax Income is up by $300, and\nNet Income is up by $225 at a 25% tax rate.\n• CFS: Net Income is up by $225, and Inventory now decreases by $200, which is a\npositive cash flow, so Cash is up by $425 in just this step.\n• BS: Cash is up by $425, and Inventory is down by $200, so the Assets side is up by $225.\nOn the L&E side, Equity is up by $225 due to the increased Net Income, so both sides\nbalance.\n• Intuition: In just this step, the company recovers $200 in cash from the sale of the\nInventory, earns a $300 pre-tax profit, and pays $75 in taxes, so its Cash is up by $425.\nThis scenario makes more sense when you combine the steps: Over both steps, Inventory goes\nup and then down, and Cash is up by $225.\nThe company bought some Inventory, turned it into a product, sold and delivered it, profited\n$300 from it, paid $75 in taxes, and now has $225 in additional Cash."
  },
  {
    "id": "mi-036",
    "sourceNumber": 8,
    "page": 64,
    "question": "A Software-as-a-Service (SaaS) company bills customers upfront for an entire year of service and collects the cash before the contract begins. Walk me through the process for a $250 contract with a $50 delivery cost between January 1 and December 31 of the year. COMBINE the cash collection and revenue recognition. On January 1, Deferred Revenue and Cash both increase by $250 on the Balance Sheet, so the BS remains in balance. For the rest of the year, the company recognizes $250 in Revenue and $50 in Cost of Sales, so the combined steps look like this:",
    "sampleAnswer": "• IS: Revenue is up by $250, and COGS is up by $50, so Pre-Tax Income is up by $200, and\nNet Income is up by $150 at a 25% tax rate.\n• CFS: Net Income is up by $150, and Deferred Revenue is initially up by $250 but\ndecreases by $250 over the year, reversing this initial increase. So, on December 31,\nCash is up by $150.\n• BS: Cash is up by $150, so Total Assets are up by $150. On the L&E side, Deferred\nRevenue increases by $250 but then falls by $250, so on December 31, Equity is up by\n$150 due to the increased Net Income, and both sides balance.\n• Intuition: The company has earned $200 over the year and paid $50 in taxes, so its Cash\nis up by $150. The Deferred Revenue changes are temporary and get reversed by the\nend of the year."
  },
  {
    "id": "mi-037",
    "sourceNumber": 9,
    "page": 64,
    "question": "A company with 1000 shares issues 500 new shares worth $1.00 on January 1 to fund its business. Then, it decides to issue Dividends per Share of $0.10 to all its shareholders at the end of the year. Walk me through both steps SEPARATELY on the statements. In Step 1, the company issues 500 * $1.00 = $500 worth of new Equity. This does not appear on the Income Statement because it is a long-term action that does not affect shareholder income in the current period. Instead, it appears on the CFS under Cash Flow from Financing, boosting",
    "sampleAnswer": "Cash by $500, and on the Balance Sheet, Cash and Equity are both up by $500.\nIn Step 2, the company issues 1500 * $0.10 = $150 of Dividends. These Dividends go to all the\nshareholders, not just the new ones!\n• IS: No changes because Common Dividends do not appear on the IS.\n• CFS: The Common Dividends are a negative $150 here, so Cash is down by $150.\n• BS: Cash is down by $150 on the Assets side, and Equity is down by $150 on the L&E\nside, so both sides are down by $150, and the BS balances.\n• Intuition: The company has distributed $150 to its shareholders, reducing its Cash and\nEquity capital."
  },
  {
    "id": "mi-038",
    "sourceNumber": 10,
    "page": 65,
    "question": "A company issues $200 of Debt at a 10% interest rate. Walk me through the entire first year on the statements, including the initial issuance and the full interest payment. COMBINE both steps. In the first step, nothing changes on the IS because Debt issuances only appear on the CFS. So, Debt on the L&E side increases by $200, and Cash increases by $200 on the Assets side to balance it. In the second step, the company records Interest on this Debt. The combined steps are:",
    "sampleAnswer": "• IS: There’s an interest expense of $200 * 10% = $20, so Pre-Tax Income is down by $20,\nand Net Income is down by $15 at a 25% tax rate.\n• CFS: Net Income is down by $15, but the Debt issuance is a +$200 to cash flow, so Cash\nis up by $185.\n• BS: Cash is up by $185, so Total Assets are up by $185. On the L&E side, Debt is up by\n$200, and Equity is down by $15 due to the Net Income reduction, so both sides are up\nby $185 and balance.\n• Intuition: The company has raised $200 in new funding, paid $20 in interest on it, and\nreceived a $5 tax benefit, so its Cash is up by $185."
  },
  {
    "id": "mi-039",
    "sourceNumber": 11,
    "page": 65,
    "question": "How does this change if, in addition to the 10% interest rate, the Debt now has a 20% principal repayment each year? Combine both steps and assume the principal repayment occurs on December 31.",
    "sampleAnswer": "The main difference is that 20% * $200 = $40 of the Debt must be repaid at year-end.\nHowever, this principal repayment does not appear on the IS and is not tax-deductible, so very\nlittle changes. The Interest Expense stays the same because this principal is only repaid at the\nend of the year.\nSo, the IS stays the same, but on the CFS, there’s an additional cash outflow for this $40\nprincipal repayment. Therefore, Cash is up by $145 rather than $185.\nOn the BS, Cash is up by $145 on the Assets side. On the L&E side, Debt is up by $160, and\nEquity is down by $15 due to the Net Income reduction, so both sides are up by $145 and\nbalance."
  },
  {
    "id": "mi-040",
    "sourceNumber": 12,
    "page": 66,
    "question": "A company that follows U.S. GAAP signs a 10-year Operating Lease on January 1. It will pay $160 in Rent each year. Assuming a 5% Discount Rate, walk me through the financial statements over this entire year. For simplicity, you may “round” and assume the Present Value of the lease payments equals $1,200. Initially, the company records the Operating Lease Assets and Liabilities on its Balance Sheet ($1,200 on both sides), and then it records the $160 Rental Expense on its Income Statement.",
    "sampleAnswer": "The 5% Discount Rate means that the initial “Interest Expense” is 5% * $1,200 = $60, so the\n“Depreciation” equals $160 – $60 = $100. Since the lease payments are constant, the Lease\nPrincipal Repayment equals the Depreciation here:\n• IS: Operating Expenses are up by $160 due to the Rent, so Pre-Tax Income falls by $160,\nand Net Income falls by $120 at a 25% tax rate.\n• CFS: Net Income is down by $120, but Operating Lease Assets and Liabilities increase by\n$1,200, which offset each other. Then, they both decrease by $100, which is also an\noffset. So, Cash is down by $120 at the bottom.\n• BS: On the Assets side, Cash is down by $120, and Operating Lease Assets are up by\n$1,100, so Total Assets are up by $980. On the L&E side, the Operating Lease Liabilities\nare up by $1,100, and Equity is down by $120, so the L&E side is up by $980, and both\nsides balance.\n• Intuition: Cash is down by $120 because this is a simple $160 cash expense with $40 in\ntax savings. The Lease Asset and Lease Liability are created and then decrease by the\nsame $100 (they will decrease by larger amounts over time)."
  },
  {
    "id": "mi-041",
    "sourceNumber": 13,
    "page": 67,
    "question": "Now walk through the same scenario, but under IFRS rather than U.S. GAAP (or pretend it is a Finance Lease under U.S. GAAP).",
    "sampleAnswer": "Under IFRS, the company records Depreciation of $1,200 / 10 = $120 per year and an initial\nInterest Expense of $1,200 * 5% = $60.\nThe Lease Principal Repayment = Cash Rental Expense – Interest Expense = $160 – $60 = $100.\n• IS: Depreciation is up by $120, and the Interest Expense is up by $60, so Pre-Tax Income\nis down by $180, and Net Income falls by $135 at a 25% tax rate.\n• CFS: Net Income is down by $135, but you add back the $120 of Depreciation and record\nthe $1,200 additions to the Lease Assets and Liabilities (which offset each other). Also,\nyou record a negative $100 for the Lease Principal Repayment. Cash is down by $115 at\nthe bottom.\n• BS: Cash is down by $115, and the Lease Assets are up by $1,080 due to the initial\n$1,200 increase and the $120 of Depreciation, so Total Assets are up by $965. On the\nother side, the Lease Liabilities are up by $1,100, and Equity is down by $135 due to the\nreduced Net Income, so both sides are up by $965 and balance.\n• Intuition: Cash is down by $115 because the total Cash Lease Expense here is $160, but\nthe company gets a tax benefit for the $180 of Lease Interest + Lease Depreciation that\nappears on the Income Statement. So, ($160) + $180 * 25% = ($115)."
  },
  {
    "id": "mi-042",
    "sourceNumber": 14,
    "page": 67,
    "question": "A company buys a factory for $200 using $200 of Debt. What happens, INITIALLY, on the statements?",
    "sampleAnswer": "• IS: No changes.\n• CFS: There’s no net change in cash because the $200 factory purchase counts as CapEx,\nwhich reduces cash flow, and the $200 Debt issuance is a cash inflow.\n• BS: PP&E is up by $200, so the Assets side is up by $200, and Debt is up by $200, so the\nL&E side is up by $200, and the Balance Sheet stays balanced.\n• Intuition: An Asset increases, a Liability increases to balance it, and there are no tax\neffects."
  },
  {
    "id": "mi-043",
    "sourceNumber": 15,
    "page": 68,
    "question": "One year passes. The company pays 10% interest on its Debt, and it depreciates 10% of the factory. It also repays 5% of the Debt principal. What happens on the statements in this first year?",
    "sampleAnswer": "A 10% interest rate means $20 in Interest Expense, the 10% depreciation means $200 * 10% =\n$20 of Depreciation, and 5% * $200 = $10 of the Debt principal is repaid. So:\n• IS: You record $20 in Interest and $20 in Depreciation, so Pre-Tax Income falls by $40,\nand Net Income falls by $30 at a 25% tax rate.\n• CFS: Net Income is down by $30, but you add back the $20 of Depreciation and record\n$10 in Debt Principal Repayments, so Cash at the bottom is down by $20.\n• BS: Cash is down by $20, and Net PP&E is down by $20, so the Assets side is down by\n$40. On the L&E side, Debt is down by $10 due to the principal repayment, and CSE is\ndown by $30 due to the reduced Net Income, so both sides are down by $40 and\nbalance.\n• Intuition: Cash declines because of the Interest Expense and Debt Principal Repayment,\noffset by the tax savings from the Interest and Depreciation."
  },
  {
    "id": "mi-044",
    "sourceNumber": 16,
    "page": 68,
    "question": "At the end of this first year, the company sells its factories for $220 and uses the proceeds to repay its remaining Debt principal after realizing there is little demand for its products. Walk through this step SEPARATELY from the previous two. Assume that the Net PP&E balance is $180, and the Debt is $190 because of changes in the previous step.",
    "sampleAnswer": "The Net PP&E selling price is $220, and its Book Value is $180, so we record a Gain of $40:\n• IS: The Realized Gain of $40 increases Pre-Tax Income by $40 and Net Income by $30 at\na 25% tax rate.\n• CFS: Net Income is up by $30, but the $40 Gain is non-cash, so it’s reversed in the CFO\nsection. Then, in Cash Flow from Investing, the full sale proceeds of $220 are recorded\nas a cash inflow. The $190 Debt repayment is shown as a negative in Cash Flow from\nFinancing. So, Cash at the bottom is up by $20.\n• BS: Cash is up by $20, and Net PP&E is down by $180, so Total Assets are down by $160.\nOn the L&E side, Debt is down by $190, and CSE is up by $30 because of the increased\nNet Income, so both sides are down by $160 and balance.\n• Intuition: The Realized Gain would normally boost Cash by $30 after taxes. However,\nthis full $30 does not flow into Cash because the Debt Repayment exceeds the reduction\nin Net PP&E by $10. As a result, Cash is up by $20 instead of $30."
  },
  {
    "id": "mi-045",
    "sourceNumber": 17,
    "page": 69,
    "question": "Walmart purchases $200 of Inventory “on credit,” sells it for $400, and records an additional $100 in Operating Expenses to support the sale. Walk me through ONLY Step 1 of this process with the Inventory purchase.",
    "sampleAnswer": "Accounts Payable is not necessarily linked to a specific Income Statement line item in a case like\nthis! It could just correspond to the company paying for Inventory on credit. In the first step:\n• IS: No changes.\n• CFS: Accounts Payable increases, boosting cash flow by $200, and Inventory also\nincreases, reducing cash flow by $200; the changes offset each other, and Cash at the\nbottom stays the same.\n• BS: Inventory on the Assets side is up by $200, and Accounts Payable on the L&E side is\nup by $200, so both sides are up by $200 and balance.\n• Intuition: The company receives the parts and materials but has not paid for them in\ncash yet, so the Balance Sheet changes, but Cash stays the same."
  },
  {
    "id": "mi-046",
    "sourceNumber": 18,
    "page": 70,
    "question": "Now walk through Step 2 – the sale and delivery of the products and the supplier payments – SEPARATELY from Step 1. In this step, Walmart recognizes the additional Revenue, COGS, and OpEx: • IS: Revenue is up by $400, COGS is up by $200, and OpEx is up by $100, so Pre-Tax Income is up by $100. Net Income is up by $75 at a 25% tax rate.",
    "sampleAnswer": "• CFS: Net Income is up by $75. The Change in Inventory is now +$200 because it falls by\n$200 in this step, and the Change in AP is now –$200 because it also falls in this step.\nThey cancel each out, so the Cash at the bottom is up by $75.\n• BS: Cash is up by $75 on the Assets side, and Inventory is now down by $200, so the\nTotal Assets are down by $125 in just this step. On the L&E side, AP is now down by\n$200 in just this step, and Equity is up by $75 due to the increased Net Income, so both\nsides are down by $125, and the BS balances.\n• Intuition: Cash is up by $75 because the company earns $100 in pre-tax profits and pays\n$25 in taxes. The Inventory and AP changes in this step are temporary and represent\nreversals of Step 1; if you combine the steps, Total Assets and Total Liabilities & Equity\nare up by $75 cumulatively.\nEquity Value & Enterprise Value – Concepts\nEquity Value is the value of EVERYTHING a\ncompany has (Net Assets, or Total Assets –\nTotal Liabilities), but only to the EQUITY\nINVESTORS (the common shareholders).\nEnterprise Value is the value of the\ncompany’s CORE BUSINESS OPERATIONS\n(Net Operating Assets, or Operating Assets\n– Operating Liabilities), but to ALL\nINVESTORS (Equity, Debt, Preferred, and\npossibly others).\nEnterprise Value stays the same even\nwhen a company’s capital structure\nchanges, while Equity Value changes (like\nthe “total price” of a home vs. the “down\npayment” in the illustration on the left).\nYou use both metrics when valuing\ncompanies because one valuation methodology might produce the Equity Value, while another\nmight produce the Enterprise Value, and you must be able to move between them.\nTo calculate Equity Value, multiply the company’s Diluted Share Count by its Current Share\nPrice. Equity Value is a fancier name for “Market Cap.”\nTo move from Equity Value to Enterprise Value, subtract non-core Assets and add Liability and\nEquity lines that represent investor groups beyond the common shareholders (the Debt\ninvestors, Preferred Stock investors, etc.).\nAt a basic level, Enterprise Value = Equity Value – Cash + Debt + Preferred Stock +\nNoncontrolling Interests, but many other items could factor in.\nYou can also calculate “Implied” versions of both metrics that are based on the output of\nvaluation analyses, but this section focuses on the “Current” versions based on current market\nprices.\n• Interview Guide – Equity Value & Enterprise Value | Quiz Questions\n• Core Financial Modeling – Equity Value & Enterprise Value Module"
  },
  {
    "id": "mi-047",
    "sourceNumber": 1,
    "page": 71,
    "question": "What do Equity Value and Enterprise Value MEAN? Don’t explain how you calculate them – tell me what they mean!",
    "sampleAnswer": "Equity Value represents the value of EVERYTHING a company has (its Net Assets) but only to the EQUITY INVESTORS (i.e., the common shareholders).\nEnterprise Value represents the value of the company’s CORE BUSINESS OPERATIONS (its Net\nOperating Assets) but to ALL INVESTORS (Equity, Debt, Preferred, and possibly others)."
  },
  {
    "id": "mi-048",
    "sourceNumber": 2,
    "page": 71,
    "question": "What do Equity Value and Enterprise Value mean in plain English? Can you explain them with a real-life analogy?",
    "sampleAnswer": "If you buy a house for $500K with a $100K down payment, $500K is the Enterprise Value, and\n$100K is the Equity Value.\nEnterprise Value does not change when the capital structure changes, so if you use $250K for\nthe down payment, the Equity Value is now $250K, but the Enterprise Value is still $500K."
  },
  {
    "id": "mi-049",
    "sourceNumber": 3,
    "page": 71,
    "question": "Why do you need both Equity Value and Enterprise Value? Can’t you just value companies using one of them?",
    "sampleAnswer": "We need both because some valuation methodologies and analyses produce Equity Value for\nthe output, but others produce Enterprise Value, so we must be able to move back and forth to\nmake proper comparisons.\nEnterprise Value has some advantages because it is not affected by capital structure changes\n(e.g., a company using less Debt and more Equity); people often call it “capital structure-\nneutral” for this reason.\nHowever, Equity Value is still important because most valuations are conducted from the\nperspective of the common shareholders, who mostly care about what their shares are worth."
  },
  {
    "id": "mi-050",
    "sourceNumber": 4,
    "page": 72,
    "question": "What is the difference between “Current” and “Implied” Enterprise Value? Can you give a real-life example to explain it?",
    "sampleAnswer": "“Current” means that you are calculating the Enterprise Value based on the company’s current\nshare price, share count, and Balance Sheet (subtract Cash, add Debt, add Preferred Stock,\netc.).\n“Implied” means that you are using a valuation methodology, such as the DCF, to value the\ncompany and determine what you think it should be worth.\nLet’s say that you search for houses in real life and find one you like with a “list price” of $500K.\nHowever, you research the area, similar properties, and demographic trends, and believe it’s\nworth more like $450K.\n$500K is the Current Enterprise Value of the house, and $450K is the Implied Enterprise Value."
  },
  {
    "id": "mi-051",
    "sourceNumber": 5,
    "page": 72,
    "question": "What is the difference between Basic Equity Value and Diluted Equity Value?",
    "sampleAnswer": "Basic Equity Value is Common Shares Outstanding * Current Share Price, while Diluted Equity\nValue includes the impact of dilutive securities, such as options, warrants, restricted stock units\n(RSUs), and convertible bonds; it equals Diluted Shares Outstanding * Current Share Price.\nCompanies create and issue these dilutive securities to incentivize employees to stay at the\ncompany (and to raise funds, in the case of convertible bonds).\nYou factor in these dilutive securities via different methods, such as the Treasury Stock Method\nfor options and warrants and the “If Converted” method for convertible bonds.\nDiluted Equity Value more accurately measures what the company’s Net Assets are worth to\nthe common shareholders."
  },
  {
    "id": "mi-052",
    "sourceNumber": 6,
    "page": 73,
    "question": "Let’s say you have a company’s Diluted Equity Value. How do you move from Equity Value to Enterprise Value?",
    "sampleAnswer": "At a basic level, Enterprise Value = Equity Value – Cash + Debt + Preferred Stock + Noncontrolling Interests, so you could say that in an interview and be fine.\nThe more technical answer is that you should take Equity Value and subtract Non-Operating\nAssets and add Liability & Equity lines that represent other investor groups beyond the\ncommon shareholders.\nExamples of Non-Operating Assets include Cash, Investments, Equity Investments (Associate\nCompanies), Assets Held for Sale, and Net Operating Losses.\nExamples of L&E lines representing other investor groups include Debt, Preferred Stock,\nUnderfunded Pensions, Noncontrolling Interests, and sometimes Leases (it’s complicated)."
  },
  {
    "id": "mi-053",
    "sourceNumber": 7,
    "page": 73,
    "question": "Why do you subtract Equity Investments and add Noncontrolling Interests in the Enterprise Value calculation?",
    "sampleAnswer": "The short, simple answer is that Equity Investments (< 50% stakes the parent company owns in\nothers) are considered non-core assets, and Noncontrolling Interests (when a parent owns\nmore than 50% in another company, the portion it does not own) are considered another\n“investor group” (the minority shareholders of this other company).\nThe longer answer is that you also do this for comparability purposes. For example, let’s say\nthat Company A owns 30% of Company B and 75% of Company C.\nCompany A’s EBITDA includes 0% of Company B’s EBITDA but 100% of Company C’s EBITDA due\nto accounting rules around the consolidation of the financial statements.\nHowever, Company A’s Equity Value reflects 30% of Company B and 75% of Company C.\nTherefore, to use Enterprise Value with EBITDA in metrics such as TEV / EBITDA, you must\nadjust Enterprise Value to reflect 0% of Company B and 100% of Company C.\nTo do this, you subtract the Equity Investments, which represent 30% of Company B, and you\nadd the Noncontrolling Interests, which represent the 25% of Company C that Company A does\nnot own."
  },
  {
    "id": "mi-054",
    "sourceNumber": 8,
    "page": 73,
    "question": "Can you explain the proper treatment of pensions in Enterprise Value?",
    "sampleAnswer": "Only Defined-Benefit Pension plans factor in because Defined-Contribution Plans do not appear on the Balance Sheet.\nYou should add the Unfunded or Underfunded portion, i.e., MAX(0, Pension Liabilities –\nPension Assets), in the TEV bridge because the employees represent another investor group\nwhen they are promised future payments.\nThey agree to lower pay and benefits today in exchange for fixed payments once they retire,\nand the company must fund the pension and invest the funds appropriately.\nIf contributions into the pension plan are tax-deductible, you should multiply the unfunded\nportion by (1 – Tax Rate) in the Enterprise Value bridge."
  },
  {
    "id": "mi-055",
    "sourceNumber": 9,
    "page": 74,
    "question": "Should you add Operating Leases in the Enterprise Value calculation? What about Finance Leases?",
    "sampleAnswer": "This is a question of comparability and the valuation multiples you’re using. Generally, you\nshould add Finance Leases because metrics such as EBITDA exclude the Finance Lease Interest\nand Finance Lease Depreciation.\nIf a metric excludes certain expenses, then the Enterprise Value paired with this metric should\nadd or include the corresponding Liability.\nOperating Leases are trickier because the accounting differs under U.S. GAAP vs. IFRS. Under\nU.S. GAAP, it’s best not to add them because the corresponding expense is “Rent” on the\nIncome Statement, which is deducted to calculate EBIT, EBITDA, etc.\nIf you add them to Enterprise Value, you must pair it with a metric like EBITDAR that adds back\nthe Rental Expense.\nUnder IFRS, it’s easiest to add Operating Leases because metrics like EBITDA exclude the full\nLease Interest and Lease Depreciation from all Lease types, so the corresponding Lease\nLiabilities should be in Enterprise Value.\nNOTE: We do not view Leases as true “financial” items representing “outside investor\ngroups”; this treatment is for comparability and ease of calculation."
  },
  {
    "id": "mi-056",
    "sourceNumber": 10,
    "page": 74,
    "question": "Can you give examples of company actions that affect Equity Value but NOT Enterprise Value, Enterprise Value but NOT Equity Value, and BOTH Enterprise Value and Equity Value?",
    "sampleAnswer": "This “compound question” tests how well you understand these concepts beyond simple\ndefinitions. There are many possible answers, but a few simple ones include:\n• Affects Equity Value But Not Enterprise Value: A company issues $100 of Stock and lets\nit sit in Cash on its Balance Sheet (Net Operating Assets are unchanged).\n• Affects Enterprise Value But Not Equity Value: A company issues $100 of Debt and uses\nit to buy a factory, boosting its Net PP&E (Net Operating Assets increase by $100).\n• Affects Both Equity Value and Enterprise Value: A company issues $100 of Stock and\nuses it to buy a factory, boosting its Net PP&E (Net Operating Assets increase by $100,\nand Common Shareholders’ Equity is also up by $100)."
  },
  {
    "id": "mi-057",
    "sourceNumber": 11,
    "page": 75,
    "question": "Could Equity Value ever be negative? What about Enterprise Value?",
    "sampleAnswer": "Since Equity Value is based on Share Price * Share Count, and neither component can be\nnegative, effectively, it cannot be negative (the Implied Equity Value from a valuation\nmethodology could still be negative, but you typically set it to $0 when this happens).\nEnterprise Value could be negative since Cash could exceed Equity Value for certain types of\ncompanies, such as “busted biotech” firms that trade at a discount to their cash."
  },
  {
    "id": "mi-058",
    "sourceNumber": 12,
    "page": 76,
    "question": "You are comparing Companies A and B. Each operates in the same industry with the same revenue, EBITDA, and other financial metrics.",
    "sampleAnswer": "Company A is financed with 100% Equity, and Company B is financed with 50% Equity and\n50% Debt.\nIn theory, their Enterprise Values should be the same. Will they be the same in real life?\nNo, most likely not. Although people claim that Enterprise Value is “capital structure-neutral,”\nit’s more accurate to say that it is less affected by capital structure than Equity Value.\nThe specific issue is that a company’s capital structure affects its Discount Rate because a\nshifting Debt and Equity mix changes its risk and potential returns.\nUsing more Debt increases the company’s default risk, which affects all the investors – even the\ncommon shareholders.\nSo, if investors value these companies based on their future cash flows and separate Discount\nRates (WACC), the Discount Rate differential could explain valuation differences.\nThe companies’ “Current” Enterprise Values might still be close, but you will see more of a\ndifference with the “Implied” versions, which may grow over time.\nEquity Value & Enterprise Value – Calculations\nThese questions are simple if you remember the two key rules:\n1) Does Common Shareholders’ Equity (CSE) change?\nIf so, then Equity Value changes by the amount that CSE changes. If not, then Equity Value does\nnot change.\nItems that affect CSE include Net Income, Dividends, Stock Issuances, and Stock Repurchases.\n2) Do Net Operating Assets (NOA) change?\nIf so, then Enterprise Value changes by the amount that NOA changes. It doesn’t matter which\ninvestor group was responsible because Enterprise Value reflects all investors.\nThe questions and answers here use the following abbreviations and assumptions:\n• TEV = Enterprise Value\n• Eq Val = Equity Value\n• CSE = Common Shareholders’ Equity\n• NOA = Net Operating Assets\n• Tax Rate = 25%"
  },
  {
    "id": "mi-059",
    "sourceNumber": 1,
    "page": 76,
    "question": "A company issues $200 in Common Shares. How do Equity Value and Enterprise Value change?",
    "sampleAnswer": "CSE increases by $200, so Eq Val increases by $200.\nNOA does not change because neither Cash nor CSE is operational, so TEV stays the same.\nAlternatively, in the TEV formula, the extra Cash offsets the higher Equity Value."
  },
  {
    "id": "mi-060",
    "sourceNumber": 2,
    "page": 76,
    "question": "This same company decides to use the $200 in Common Stock proceeds to acquire another business for $100 instead. How does everything change?",
    "sampleAnswer": "CSE increases by $200 from this issuance, so Eq Val increases by $200.\nOf this $200 in proceeds, $100 remains in Cash, and $100 is allocated to Acquired Assets from\nthe other business.\nThese Acquired Assets are Operating Assets, and no Operating Liabilities change, so NOA\nincreases by $100. TEV, therefore, increases by $100."
  },
  {
    "id": "mi-061",
    "sourceNumber": 3,
    "page": 77,
    "question": "What if the company uses that same $100 from the $200 of new Common Stock to acquire an Asset rather than an entire company?",
    "sampleAnswer": "CSE still increases by $200, so Eq Val is up by $200.\nIf this Asset is considered “Operating” or “Core,” such as a factory, then NOA increases by $100,\nso TEV also increases by $100.\nIf not – for example, the Asset is a short-term investment – then NOA does not change, and TEV\nstays the same."
  },
  {
    "id": "mi-062",
    "sourceNumber": 4,
    "page": 77,
    "question": "A company issues $100 in Debt to purchase a new factory. How do Equity Value and Enterprise Value change?",
    "sampleAnswer": "CSE does not change because Debt, not Equity, is the financing source here. Therefore, Eq Val\nstays the same.\nThe new factory is a Net Operating Asset, so NOA increases by $100, and TEV, therefore, also\nincreases by $100.\nAlternatively, in the TEV formula, Equity Value stays the same, and Debt increases, so TEV goes\nup."
  },
  {
    "id": "mi-063",
    "sourceNumber": 5,
    "page": 77,
    "question": "A company issues $100 of Common Stock and $100 of Preferred Stock and lets the proceeds sit in Cash. How do Equity Value and Enterprise Value change?",
    "sampleAnswer": "CSE increases by $100 due to the Common Stock issuances, so Eq Val is up by $100. The\nPreferred Stock issuance does not affect Common Shareholders’ Equity!\nNet Operating Assets are unchanged, so TEV stays the same.\nIn the TEV formula, Equity Value is up by $100, Cash is $200 more negative, and Preferred Stock\nis up by $100, so TEV stays the same."
  },
  {
    "id": "mi-064",
    "sourceNumber": 6,
    "page": 78,
    "question": "This same company now issues $10 in Common Dividends and $10 in Preferred Dividends. What happens in JUST THIS STEP?",
    "sampleAnswer": "CSE decreases by $20 due to these Dividend issuances. Yes, both Common and Preferred\nDividends flow into Common Shareholders’ Equity on the Balance Sheet. Therefore, Eq Val is\ndown by $20.\nNet Operating Assets are unchanged, so TEV stays the same."
  },
  {
    "id": "mi-065",
    "sourceNumber": 7,
    "page": 78,
    "question": "A company issues $150 of Debt and $50 of Common Stock to acquire $175 of PP&E and $25 of Short-Term Investments. How do Equity Value and Enterprise Value change?",
    "sampleAnswer": "CSE increases by $50 because of the Common Stock Issuance, so Eq Val increases by $50.\nThe $175 of PP&E counts as an Operating Asset, and no Operating Liabilities change, so NOA\nincreases by $175, and TEV also increases by $175."
  },
  {
    "id": "mi-066",
    "sourceNumber": 8,
    "page": 78,
    "question": "A company issues $50 of Debt to buy a new factory. However, AFTER this purchase, its Enterprise Value increases by $100 rather than $50.",
    "sampleAnswer": "Your co-worker claims it is because the company issued Debt to make this purchase, and Debt\nincreases Enterprise Value. Is he correct?\nNo. The purchase method does not matter when determining how Enterprise Value changes. All\nthat matters is how the Net Operating Assets change.\nThe most likely explanation here is that the book value of this factory is $50, but its market\nvalue is $100 because market participants believe the Present Value of its future cash flows is\ncloser to $100. Therefore, Enterprise Value increases by $100 rather than $50. The company\neffectively got a discount on a new asset."
  },
  {
    "id": "mi-067",
    "sourceNumber": 9,
    "page": 78,
    "question": "A company purchases $100 of Inventory using Cash. How do Equity Value and Enterprise Value change?",
    "sampleAnswer": "There are no changes on the Income Statement in this initial step because the Inventory has not\nyet been sold. Therefore, Net Income does not change.\nOn the Balance Sheet, CSE stays the same in this initial step (no changes to Net Income, Stock\nIssuances/Repurchases, Dividends, etc.), so Eq Val stays the same.\nNOA increases by $100 since Inventory is an Operating Asset, and no Operating Liabilities\nchange, so TEV increases by $100."
  },
  {
    "id": "mi-068",
    "sourceNumber": 10,
    "page": 79,
    "question": "Now assume the Inventory is sold for $200 and walk me through how the *entire* process from beginning to end affects Equity Value and Enterprise Value. On the Income Statement, Revenue is up by $200, and Pre-Tax Income is up by $100 (due to the $100 of Inventory now being recognized as COGS). Net Income increases by $75 at a 25% tax rate. On the CFS, Net Income is up by $75, and there are no other net changes (Inventory went up by $100 and then went down by $100), so Cash is up by $75 at the bottom. On the Balance Sheet, Cash is up by $75 on the Assets side, and CSE is up by $75 on the L&E side.",
    "sampleAnswer": "Since CSE is up by $75, Eq Val increases by $75.\nNOA does not change because Cash is not an Operating Asset, and no Operating Liabilities\nchange, so TEV stays the same.\nIntuition: This 2-step process represents the company generating Net Income and letting it sit\nin Cash; that process does not make its core business more valuable, so TEV does not increase."
  },
  {
    "id": "mi-069",
    "sourceNumber": 11,
    "page": 79,
    "question": "A company has 200 outstanding shares at a current price of $10.00. It also has 50 options at an exercise price of $8.00 each. What is its Diluted Equity Value?",
    "sampleAnswer": "The Basic Equity Value is 200 * $10.00 = $2,000. To calculate the diluted shares, note that the\noptions are all “in the money” – their exercise price is less than the current share price – and\napply the Treasury Stock Method.\nWhen these options are exercised, 50 new shares are created.\nThe investors paid the company $8.00 to exercise each option, so the company gets $400 in\ncash. It uses that cash to buy back $400 / $10.00 = 40 of the new shares, so the diluted share\ncount is 200 + 50 – 40 = 210, and the Diluted Equity Value is $2,100."
  },
  {
    "id": "mi-070",
    "sourceNumber": 12,
    "page": 80,
    "question": "A company has 10,000 shares outstanding and a current share price of $20.00. It also has 100 options at an exercise price of $10.00, 50 Restricted Stock Units (RSUs), and 100 convertible bonds at a conversion price of $10.00 and a par value of $100. What is its Diluted Equity Value?",
    "sampleAnswer": "For this type of question, you should ask to write down the numbers.\nSince the options are in-the-money, you assume they get exercised, so 100 new shares are\ncreated.\nThe company receives 100 * $10.00, or $1,000, in proceeds. Its share price is $20.00, so it can\nrepurchase 50 shares with these proceeds. There are now 50 net additional shares outstanding.\nYou add the 50 RSUs as if they were common shares, so now there’s a total of 100 additional\nshares outstanding.\nThe company’s share price of $20.00 exceeds the conversion price of $10.00, so the convertible\nbonds can convert into shares.\nDivide the par value by the conversion price to determine the shares per bond:\n$100 / $10.00 = 10 new shares per bond\nThere are 100 individual convertible bonds, so they create 100 * 10 = 1,000 new shares.\nThese changes create 1,100 additional shares, so the diluted share count is now 11,100, and the\nDiluted Equity Value is 11,100 * $20.00, or $222,000.\nValuation Methodologies\nThese questions are high-level, but many\ncandidates don’t understand the point of\nvaluation.\nYou can’t answer the advanced questions\nwithout knowing that, so don’t dismiss this\ncategory as “too basic” – even if you have\nsignificant work experience.\nThere are dozens of valuation\nmethodologies, but in real-life interviews, bankers tend to focus on comparable public\ncompanies, precedent transactions, and the DCF.\nThis section and the next one cover the first two categories, and the two sections after that\ncover the DCF.\n• Interview Guide – Valuation | Quiz Questions\n• Core Financial Modeling – Valuation Module"
  },
  {
    "id": "mi-071",
    "sourceNumber": 1,
    "page": 81,
    "question": "Public companies already have Market Caps and Share Prices. Why do you need to “value them” at all?",
    "sampleAnswer": "You already know how much they’re worth.\nBecause a company’s Market Cap and Share Price reflect its Current Value according to “the\nmarket as a whole” – but the market might be wrong!\nYou value companies to see if the market’s views are correct and whether a company’s value\nmight change based on your views.\nIt’s like going home shopping, finding a house with a list price of $500K, but then negotiating a\nlower price because you believe it is worth only $450K based on your research."
  },
  {
    "id": "mi-072",
    "sourceNumber": 2,
    "page": 81,
    "question": "What are the advantages and disadvantages of the 3 main valuation methodologies?",
    "sampleAnswer": "Public Comps are useful because they’re based on real market data, are quick to calculate and\nexplain, and do not depend on far-in-the-future assumptions.\nHowever, there may not be truly comparable companies, the analysis will be less accurate for\nvolatile or thinly traded companies, and it may undervalue companies’ long-term potential.\nPrecedent Transactions are useful because they’re based on the real prices that companies\nhave paid for other companies, and they may better reflect industry trends than Public Comps.\nHowever, the data is often spotty and misleading, there may not be truly comparable\ntransactions, and specific deal terms and market conditions might distort the multiples.\nDCF Analysis is the most “correct” methodology according to finance theory, it’s less subject to\nmarket fluctuations, and it better reflects company-specific factors and long-term trends.\nHowever, it’s also very dependent on far-in-the-future assumptions, and there’s disagreement\nover the proper calculations for key figures like the Cost of Equity and WACC."
  },
  {
    "id": "mi-073",
    "sourceNumber": 3,
    "page": 82,
    "question": "Which of the 3 main methodologies will produce the highest Implied Values?",
    "sampleAnswer": "This is a trick question because almost any methodology could produce the highest Implied\nValues depending on the industry, time period, and assumptions.\nThat said, Precedent Transactions often produce higher Implied Values than Public Comps\nbecause of the control premium – the extra amount that buyers must pay to acquire sellers.\nBut it’s tough to say how a DCF compares because it’s far more dependent on the long-term\nassumptions used.\nThe safest answer is: “A DCF tends to produce the most variable output since it’s so dependent\non your assumptions, and Precedent Transactions tend to produce higher values than the\nPublic Comps because of the control premium.”"
  },
  {
    "id": "mi-074",
    "sourceNumber": 4,
    "page": 82,
    "question": "Which one should be worth more: A $500 million EBITDA healthcare company or a $500 million EBITDA industrials company? Assume the growth rates and margins are the same.",
    "sampleAnswer": "In all likelihood, the healthcare company will be worth more because healthcare is a less asset- intensive industry. That means the company’s CapEx and Working Capital requirements will be lower, and its cash flow will be higher.\nHealthcare, at least in some sectors, also tends to be more of a “growth industry” than\nindustrials.\nThe Discount Rate might also be higher for the healthcare company, but the lower asset\nintensity and higher expected growth rates could offset that.\nThis answer is an extreme generalization, so you would need more information to give a\ndetailed answer."
  },
  {
    "id": "mi-075",
    "sourceNumber": 5,
    "page": 83,
    "question": "Can you walk me through how you use Public Comps and Precedent Transactions in a valuation?",
    "sampleAnswer": "First, you select the companies and transactions based on industry, size, and geography (and\ntime for the transactions).\nThen, you determine the appropriate metrics and multiples for each set – for example,\nrevenue, revenue growth, EBITDA, EBITDA margins, and revenue and EBITDA multiples – and\ncalculate them for all the companies and transactions.\nNext, you calculate the minimum, 25th percentile, median, 75th percentile, and maximum for\neach valuation multiple in the set.\nFinally, you apply these numbers to the financial metrics of the company you’re analyzing to\nestimate its Implied Value.\nFor example, if the company you’re valuing has $100 million in LTM EBITDA, and the median\nLTM TEV / EBITDA multiple in a set of comparable companies is 7x, then the company’s implied\nEnterprise Value is $700 million.\nYou then calculate its Implied Value for all the other multiples to get a range of possible values."
  },
  {
    "id": "mi-076",
    "sourceNumber": 6,
    "page": 83,
    "question": "Can you give a few examples of how you might screen for “similar” Comparable Public Companies and Precedent Transactions?",
    "sampleAnswer": "You screen based on geography, industry, and size (and time for Precedent Transactions).\nHere are a few example screens:\n• Comparable Company Screen: U.S.-based steel manufacturing companies with over\n$500 million in revenue.\n• Comparable Company Screen: European legacy airlines with over €1 billion in EBITDA.\n• Precedent Transaction Screen: Latin American M&A transactions over the past 3 years\ninvolving consumer/retail sellers with over $1 billion USD in revenue.\n• Precedent Transaction Screen: Australian M&A transactions over the past 2 years\ninvolving infrastructure sellers with over $200 million AUD in revenue."
  },
  {
    "id": "mi-077",
    "sourceNumber": 7,
    "page": 83,
    "question": "How do you decide which metrics and multiples to use in these methodologies?",
    "sampleAnswer": "You usually look at a sales-based metric and its corresponding multiple and 1-2 profitability-\nbased metrics and their multiples. For example, you might use Revenue, EBITDA, and Net\nIncome and their corresponding multiples: TEV / Revenue, TEV / EBITDA, and P / E.\nYou do this because you want to value a company in relation to how much it sells and how\nmuch it keeps from those sales.\nSometimes, you’ll drop the sales-based multiples and focus on the profitability or cash flow-\nbased ones (EBIT, EBITDA, Net Income, Free Cash Flow, etc.)."
  },
  {
    "id": "mi-078",
    "sourceNumber": 8,
    "page": 84,
    "question": "Why do you look at BOTH historical and projected metrics in these methodologies?",
    "sampleAnswer": "Historical metrics are useful because they’re based on what happened in real life, but they can\nalso be deceptive if there were non-recurring items or if the company made acquisitions or\ndivestitures.\nProjected metrics are useful because they assume the company will operate in a “steady state”\nwithout acquisitions, divestitures, or non-recurring items, but they’re also less reliable because\nthey’re based on predictions rather than historical events."
  },
  {
    "id": "mi-079",
    "sourceNumber": 9,
    "page": 84,
    "question": "When calculating the forward multiples for the comparable companies, should you use each company’s Current Equity Value or Current Enterprise Value, or should you project them to get the Year 1 or Year 2 values?",
    "sampleAnswer": "You always use the Current Equity Value or Current Enterprise Value. NEVER “project” either\none.\nA company’s share price, and, therefore, both Current Equity Value and Current Enterprise\nValue, reflects past performance and future expectations.\nSo, to “project” these metrics, you’d have to jump into the future and see what future\nexpectations are at that point in time and then time travel back to the present."
  },
  {
    "id": "mi-080",
    "sourceNumber": 10,
    "page": 85,
    "question": "How do you interpret the Public Comps? What does it mean if the median multiples are above or below the ones of the company you’re valuing?",
    "sampleAnswer": "The interpretation depends on how your company's growth rates and margins compare to\nthose of the comparable companies.\nPublic Comps are most meaningful when the growth rates and margins are similar, but the\nmultiples are different. This could mean that the company you’re valuing is mispriced.\nFor example, maybe all the companies are growing at 10 – 15%, and they all have EBITDA\nmargins of 10 – 15%. Your company also has growth rates and margins in these ranges.\nHowever, your company trades at TEV / EBITDA multiples of 6x to 8x, while the comparable\ncompanies all trade at multiples of 10x to 12x.\nThis result could indicate that your company is undervalued since its multiples are lower, but its\ngrowth rates, margins, industry, and size are comparable."
  },
  {
    "id": "mi-081",
    "sourceNumber": 11,
    "page": 85,
    "question": "What is a Liquidation Valuation, and when is it useful and not so useful?",
    "sampleAnswer": "In a Liquidation Valuation, you value a company by estimating the market values of all its Assets, adding them up, and subtracting its Liabilities (i.e., you assume full repayment of all Liabilities based on the proceeds from the sale of all its Assets).\nIt gives you the company’s Implied Equity Value because you’re valuing its Net Assets, not its\nNet Operating Assets.\nThis methodology is useful for distressed companies because it tells you how much they might\nbe worth if they liquidate and how much different lender groups might receive.\nIt’s less useful for healthy, growing companies because it undervalues them significantly; assets\nlike Net PP&E are always worth more to “going concern” companies."
  },
  {
    "id": "mi-082",
    "sourceNumber": 12,
    "page": 85,
    "question": "How does a Dividend Discount Model (DDM) differ from a DCF?",
    "sampleAnswer": "In a DDM, rather than projecting Free Cash Flow, you project the company’s Dividends, usually based on a per-share figure or a percentage of Net Income. You then discount the Dividends to their Present Value using the Cost of Equity and add them up. To calculate the Terminal Value, you use an Equity Value-based multiple such as P / E, and you discount it to Present Value using the Cost of Equity.\nYou add the PV of the Terminal Value to the PV of the Dividends to calculate the company’s\nImplied Equity Value rather than its Implied Enterprise Value (there’s no “bridge”), and you\ndivide it by the diluted share count to get the company’s Implied Share Price.\nThe DDM is essential in some industries, such as commercial banks and insurance, useful in\nother industries that pay regular dividends, such as utilities, and not so useful for most others."
  },
  {
    "id": "mi-083",
    "sourceNumber": 13,
    "page": 86,
    "question": "Why might you use an M&A Premiums analysis to value a company?",
    "sampleAnswer": "The M&A Premiums analysis applies only to public companies because you look at acquisitions\nof similar public companies and calculate the “premium” each buyer paid for each seller.\nFor example, if the seller’s share price was $12.00 before the deal, and the buyer paid $15.00\nper share, that represents a 25% premium.\nYou then use these percentages to value your company. If the median premium in a set of deals\nis 20%, and your company’s share price is $10.00, it’s worth $12.00 per share.\nThis analysis is typically a supplement to Precedent Transactions and gives you another way to\nvalue your company besides the standard multiples. But it’s also limited because M&A\nPremiums cannot indicate that a company is currently undervalued."
  },
  {
    "id": "mi-084",
    "sourceNumber": 14,
    "page": 86,
    "question": "What are the advantages and disadvantages of a Sum-of-the-Parts Valuation?",
    "sampleAnswer": "The Sum-of-the-Parts methodology, in which you value each division of a company separately\nand add them to determine the company’s Implied Value, works well for conglomerates that\nhave very different divisions (e.g., retail vs. transportation vs. digital media segments).\nThe divisions operate in such different industries that it would be meaningless to value the\ncompany as a whole – no other public company would be comparable.\nBut Sum-of-the-Parts also takes far more time and effort to set up because you must find\ncomparable companies and transactions for each division, build a separate DCF for each\ndivision, and so on.\nAlso, you might not have enough information to use it. Companies sometimes don’t disclose\nEBIT, CapEx, or Working Capital by division, and they may not disclose the corporate overhead\nexpenses that must be counted in the final step."
  },
  {
    "id": "mi-085",
    "sourceNumber": 15,
    "page": 87,
    "question": "How do you set up an LBO valuation, and when is it useful?",
    "sampleAnswer": "You set up the LBO valuation by creating a leveraged buyout model in which a private equity\nfirm acquires a company using Debt and Equity, holds it for several years, and then sells it for a\ncertain multiple of EBITDA.\nMost private equity firms target an internal rate of return (IRR) in a specific range, so you work\nbackward and determine the maximum price the PE firm could pay to achieve a targeted IRR.\nYou could use the “Goal Seek” function in Excel to do this, and you solve for the purchase price\nbased on constraints for the IRR, exit multiple, and Debt / Equity split.\nThis methodology is most useful for screening LBO candidates; it can also help a company\nunderstand what PE firms vs. normal companies might pay for it.\nValuation Metrics and Multiples\nQuestions about valuation multiples may\nseem easy at first glance, but they can be\nsurprisingly tricky if you don’t understand\nthe fundamental concepts.\nFor example, do you understand how a\nvaluation multiple is shorthand for a cash\nflow-based valuation and a way to\ncompare different companies?\nDo you understand the trade-offs of\ndifferent metrics and multiples? What\nabout the exceptions and special cases,\nsuch as differences under U.S. GAAP vs.\nIFRS?\nThis section covers these concepts:"
  },
  {
    "id": "mi-086",
    "sourceNumber": 1,
    "page": 87,
    "question": "What IS a valuation multiple? Explain the theory and give a real-life analogy.",
    "sampleAnswer": "A valuation multiple is shorthand for a company’s value based on its Cash Flow, Cash Flow\nGrowth Rate, and Discount Rate. You could value a company with this formula:\nCompany Value = Cash Flow / (Discount Rate – Cash Flow Growth Rate), where Cash Flow\nGrowth Rate < Discount Rate\nValuation multiples let you use a number like “10x” to express this in a condensed way.\nYou can also think of valuation multiples as “per-square-foot” or “per-square-meter” values\nwhen buying a house: They help you compare houses or companies of different sizes and see\nhow expensive or cheap they are relative to similar houses or companies."
  },
  {
    "id": "mi-087",
    "sourceNumber": 2,
    "page": 88,
    "question": "You’re valuing a mid-sized manufacturing company. This company’s TEV / EBITDA multiple is 15x, but the median TEV / EBITDA for the comparable companies is 10x. What’s the most likely explanation?",
    "sampleAnswer": "The most likely explanation is that the market expects this company’s cash flows to grow faster\nthan comparable companies. For example, other companies might be expected to grow at 5%,\nbut this company might be expected to grow at 15%.\nThe Discount Rate is unlikely to differ significantly because these companies are in a similar size\nrange in the same industry, which means the risk and potential returns should be similar.\n“Current events” could also affect the multiples, but it’s hard to say what they might be without\nadditional information."
  },
  {
    "id": "mi-088",
    "sourceNumber": 4,
    "page": 88,
    "question": "How do you decide whether to use Equity Value or Enterprise Value in valuation multiples?",
    "sampleAnswer": "If the financial metric in the denominator of the valuation multiple deducts Net Interest\nExpense, it pairs with Equity Value because the Debt Investors can no longer be “paid” after\nearning their interest; only Equity Investors can earn something now.\nIf the metric does not deduct Net Interest Expense, it pairs with Enterprise Value. This rule\napplies to financial metrics (EBIT, EBITDA, etc.) and non-financial ones (Unique Users,\nSubscribers, etc.)."
  },
  {
    "id": "mi-089",
    "sourceNumber": 5,
    "page": 89,
    "question": "A company has $100 in Revenue, a 15% EBIT margin, and D&A that is 5% of its Revenue.",
    "sampleAnswer": "The company’s Equity Value is $100, and it has $20 of Cash, $40 of Debt, and $30 in Lease\nLiabilities. What is its TEV / EBITDA multiple?\nEBITDA = $100 * 15% + $100 * 5% = $20.\nTEV = $100 – $20 + 40 = $120. Therefore, TEV / EBITDA = 6x.\nThe treatment of the Lease Liabilities here is uncertain because we don’t know if this company\nfollows U.S. GAAP or IFRS or if these are Operating or Finance Leases. To explain the correct\ntreatment, you must request these details (see the next question)."
  },
  {
    "id": "mi-090",
    "sourceNumber": 6,
    "page": 89,
    "question": "For clarity, the company I just described followed U.S. GAAP, and the Lease Liabilities were for Operating Leases.",
    "sampleAnswer": "Now, imagine that this company followed IFRS rather than U.S. GAAP. How would the EBIT\nmargin and D&A percentages change, and how would the TEV / EBITDA change?\nUnder IFRS, the EBIT margin would be higher because only one component of the Operating\nLease Expense would be deducted: The Lease Depreciation. Under U.S. GAAP, the entire Rental\nExpense is deducted.\nThe D&A percentage would also be higher because D&A under IFRS includes Lease Depreciation\nas well.\nSo, the EBITDA margin would be higher under IFRS because it would exclude or add back the\nentire Operating Lease Expense so that the EBITDA would be higher than $15.\nThe TEV / EBITDA multiple would likely stay about the same because under IFRS, you would add\nthe Lease Liabilities to calculate Enterprise Value (you would need more numbers to predict the\nexact change)."
  },
  {
    "id": "mi-091",
    "sourceNumber": 7,
    "page": 90,
    "question": "What are the advantages and disadvantages of TEV / EBITDA vs. TEV / EBIT vs. P / E?",
    "sampleAnswer": "TEV / EBITDA is better when you want to ignore the company’s CapEx and capital structure\ncompletely.\nTEV / EBIT is better when you want to ignore capital structure but partially factor in CapEx (via\nthe Depreciation, which comes from CapEx in previous years).\nSo, TEV / EBITDA is more about normalizing companies and is more useful in industries where\nCapEx is not a huge value driver, while TEV / EBIT is better when you want the implied values to\nhave some relationship with CapEx.\nThe P / E multiple is affected by different tax rates, capital structures, non-core business\nactivities, and more, so it is less useful for “normalization” purposes than the others (though it\nhas the advantage of being widely understood).\nP / E is more important in specific industries, such as banks and insurance firms, that use Equity\nValue as the leading valuation metric."
  },
  {
    "id": "mi-092",
    "sourceNumber": 8,
    "page": 90,
    "question": "A company is currently trading at 10x TEV / EBITDA. It wants to sell an Operating Asset for 2x the Asset’s EBITDA. Will that transaction increase or decrease the company’s Enterprise Value and its TEV / EBITDA multiple?",
    "sampleAnswer": "The sale will reduce the company’s Enterprise Value because the company is trading an\nOperating Asset for Cash, which is a Non-Operating Asset.\nEven though the company’s Enterprise Value decreases, its TEV / EBITDA multiple increases\nbecause the Asset’s multiple was lower than the entire company’s multiple.\nTo understand this, pretend the company’s total EBITDA was $100, and this Asset contributed\n$20 of that EBITDA. Therefore, the company’s Enterprise Value before the sale was $1,000.\nThe company now sells the Asset for 2x * $20 = $40. After the sale, the company’s Enterprise\nValue falls by $40, and its EBITDA falls by $20. So, its new TEV / EBITDA is $960 / $80, or 12x."
  },
  {
    "id": "mi-093",
    "sourceNumber": 9,
    "page": 90,
    "question": "What happens to the company’s Equity Value and P / E multiple in this scenario?",
    "sampleAnswer": "We can’t say for sure, but based on the information provided here, Equity Value does not\nchange because the Net Assets stay the same (Operating vs. Non-Operating Assets do not\nmatter for Equity Value). It would change only if there were a Gain or Loss recorded on the sale,\nas that would flow into Common Shareholders’ Equity via Net Income.\nMost likely, the P / E multiple would increase because this company is most likely trading at a\nhigher P / E multiple than this specific asset if it’s a 10x vs. 2x difference for the EBITDA\nmultiples. However, we can’t say for sure because there could be a huge capital structure\ndifference between the company and this specific asset."
  },
  {
    "id": "mi-094",
    "sourceNumber": 10,
    "page": 91,
    "question": "How do you calculate and use Unlevered FCF and Levered FCF?",
    "sampleAnswer": "Unlevered Free Cash Flow equals Net Operating Profit After Taxes (NOPAT) + D&A and\nsometimes other non-cash adjustments +/- Change in Working Capital – CapEx.\nLevered Free Cash Flow equals Net Income to Common + D&A and sometimes other non-cash\nadjustments +/- Change in Working Capital – CapEx +/- Net Change in Debt.\nYou normally use UFCF in DCF-based valuations because it lets you evaluate a company\nindependently of its capital structure, which produces more consistent numbers.\nLFCF is far less widely used (and people disagree about the basic definition), but it is more\ncommon in certain specialized contexts/industries (e.g., equity REITs)."
  },
  {
    "id": "mi-095",
    "sourceNumber": 11,
    "page": 91,
    "question": "If a company is valued mostly based on its cash flow, why do you also use metrics such as EBIT and EBITDA that may not represent its true cash flow?",
    "sampleAnswer": "You use these metrics mostly for convenience and comparability. Free Cash Flow measures a\ncompany’s cash flow more accurately, but it also takes more time to calculate since you need to\nreview the full Cash Flow Statement and make adjustments.\nAlso, the individual items within FCF vary widely for different companies, regions, industries,\nand accounting systems.\nAs a result, EBIT and EBITDA are better for comparability/normalization purposes since they are\nbased primarily on the Income Statement (and one line of the CFS for EBITDA)."
  },
  {
    "id": "mi-096",
    "sourceNumber": 12,
    "page": 91,
    "question": "Give an example of a company change that affects UFCF but not EBITDA.",
    "sampleAnswer": "Additional spending on CapEx or a higher-than-normal Change in Working Capital (e.g., due to a\nlarge Inventory purchase) would affect UFCF but not EBITDA since UFCF deducts CapEx and\nreflects the Change in Working Capital (which could be either positive or negative)."
  },
  {
    "id": "mi-097",
    "sourceNumber": 13,
    "page": 92,
    "question": "Company A has a P / E multiple of 15x, with a Net Income of $120 and a TEV / EBITDA multiple of 15x. Its EBITDA is $150. Company B has the same 15x P / E multiple but a Net Income of $100, a TEV / EBITDA of 10x, and an EBITDA of $200. Which one has a higher Net Debt balance?",
    "sampleAnswer": "Company A’s Equity Value is 15x * $120 = $1800, and its Enterprise Value is 15x * $150 = $2250.\nCompany B’s Equity Value is 15x * $100 = $1500, and its Enterprise Value is 10x * $200 = $2000.\nTherefore, Company A’s Net Debt is $2250 – $1800 = $450, and Company B’s Net Debt is $2000\n– $1500 = $500, so Company B has a higher balance."
  },
  {
    "id": "mi-098",
    "sourceNumber": 14,
    "page": 92,
    "question": "A company’s Operating Income is $100, and it has a $500 Debt balance at a 4% interest rate. It also has Cash of $100, currently earning 0% interest.",
    "sampleAnswer": "If the company’s Equity Value is $600, its P / E multiple is 12x, and its tax rate is 25%, what\ncan you conclude about its Enterprise Value?\nAn Equity Value of $600 and a P / E multiple of 12x means the company’s “apparent” Net\nIncome is $600 / 12 = $50.\nThe company’s Operating Income is $100, and it pays $500 * 4% = $20 in Interest Expense per\nyear, with no Interest Income.\nSo, its Pre-Tax Income is $80, and its Net Income “should be” $60 at a 25% tax rate.\nHowever, it is clearly lower than that, so the most likely explanation is that the company has\nPreferred Stock in its capital structure.\nFor example, if the company had $10 in Preferred Dividends, the Net Income would be $60, and\nthe Net Income to Common would be $50 (which you use in the P / E multiple).\nWe don’t know the exact amount of Preferred Stock, but the company’s Enterprise Value must\nbe higher than $600 – $100 + $500 = $1000 due to it."
  },
  {
    "id": "mi-099",
    "sourceNumber": 15,
    "page": 93,
    "question": "Suppose you are building a set of “global” comparable companies operating in the logistics/delivery sector in the U.S., Europe, and Asia. What is the SAFEST valuation multiple in this scenario?",
    "sampleAnswer": "Given the lease accounting differences under U.S. GAAP vs. IFRS, the safest multiple is\n(Enterprise Value Including All Lease Liabilities) / EBITDAR, where EBITDAR equals EBITDA +\nRental Expense.\nUnder IFRS, EBITDA already adds back or excludes the full Lease Expense, so the Rental Expense\nis minimal. But under U.S. GAAP, there is still Rental Expense for the Operating Leases.\nTherefore, this multiple normalizes accounting and lease composition differences and allows\nfor a proper comparison.\nDiscounted Cash Flow (DCF) – Assumptions and Analysis\nQuestions about the DCF analysis are\namong the most common ones in\ninterviews. Even if you don’t\nunderstand all the details, you must\nbe able to walk through the basic\nanalysis (see the image on the left).\nYou should also understand the\nfactors that affect the analysis and\nthe importance of the Terminal\nValue vs. the Discount Rate vs. the\nCash Flows in the forecast period.\nThe Discount Rate is such a big topic\nthat we cover it separately in the next section; the Finance Concepts section also explains the\nmain idea.\n• Interview Guide – DCF / Valuation | Quiz Questions\n• Core Financial Modeling – DCF / Valuation Module"
  },
  {
    "id": "mi-100",
    "sourceNumber": 1,
    "page": 94,
    "question": "Why do you build a DCF analysis to value a company?",
    "sampleAnswer": "In theory, a company is worth the Present Value of its expected future cash flows: Company Value = Cash Flow / (Discount Rate – Cash Flow Growth Rate), where Cash Flow Growth Rate < Discount Rate But you can’t just use this single formula because a company’s Cash Flow Growth Rate and Discount Rate change over time.\nSo, in a Discounted Cash Flow analysis, you divide the valuation into two periods: One where\nthose assumptions may change (the explicit forecast period) and one where they stay the same\n(the Terminal Period).\nYou then project the company’s cash flows in both periods and discount them to their Present\nValues based on the appropriate Discount Rate(s).\nYou compare this sum – the company’s Implied Value – to its Current Value or “Asking Price” to\nsee if it’s valued appropriately."
  },
  {
    "id": "mi-101",
    "sourceNumber": 2,
    "page": 94,
    "question": "Walk me through a DCF analysis.",
    "sampleAnswer": "A DCF values a company based on the Present Value of its Cash Flows in the explicit forecast\nperiod plus the Present Value of its Terminal Value.\nYou start by projecting the company’s Free Cash Flows over the next 5 – 10 years by making\nassumptions for the revenue growth, margins, Working Capital, and CapEx.\nThen, you discount the cash flows using the Discount Rate, usually the Weighted Average Cost\nof Capital, and sum up everything.\nNext, you estimate the Terminal Value using the Multiples Method or the Gordon Growth\nMethod; it represents the company’s value after those first 5 – 10 years into perpetuity.\nYou then discount the Terminal Value to Present Value using the Discount Rate and add it to\nthe sum of the company’s discounted cash flows to get its Implied Enterprise Value.\nFinally, you add Cash and subtract Debt (and add/subtract all other relevant line items) to get\nthe Implied Equity Value, divide by the share count to get the Implied Share Price, and compare\nthis to the company’s Current Share Price."
  },
  {
    "id": "mi-102",
    "sourceNumber": 3,
    "page": 94,
    "question": "How do you move from Revenue to Free Cash Flow in a DCF?",
    "sampleAnswer": "First, confirm that the interviewer is asking for Unlevered Free Cash Flow (AKA Free Cash Flow\nto Firm). If so:\nSubtract COGS and Operating Expenses from Revenue to get Operating Income (EBIT).\nThen, multiply Operating Income by (1 – Tax Rate), add back Depreciation & Amortization, and\nfactor in the Change in Working Capital (which could be either positive or negative).\nIf Working Capital increases, the Change in WC is negative, and if it decreases, the Change in\nWC is positive.\nFinally, subtract Capital Expenditures to calculate Unlevered Free Cash Flow."
  },
  {
    "id": "mi-103",
    "sourceNumber": 4,
    "page": 95,
    "question": "How do you calculate the Terminal Value in a DCF, and which method is best?",
    "sampleAnswer": "You can use the Multiples Method or the Gordon Growth Method (AKA Long-Term Growth\nMethod, Perpetuity Growth Method, etc.).\nWith the first one, you apply a Terminal Multiple to the company’s EBITDA, EBIT, NOPAT, or FCF\nin the final year of the forecast period. For example, if you apply a 10x TEV / EBITDA multiple to\nthe company’s Year 10 EBITDA of $500, its Terminal Value is $5,000.\nWith the Gordon Growth Method, you assign a “Terminal Growth Rate” to the company’s Free\nCash Flows in the Terminal Period and assume they’ll grow at that rate forever.\nTerminal Value = Final Year Free Cash Flow * (1 + Terminal Growth Rate) / (Discount Rate –\nTerminal Growth Rate)\nThe Gordon Growth Method is better from a theoretical perspective because growth always\nslows down over time; all companies’ cash flows eventually grow more slowly than GDP.\nIf you use the Multiples Method, it’s easy to pick a multiple that makes no logical sense\nbecause it implies a growth rate that’s too high.\nHowever, many bankers still use and prefer the Multiples Method because it’s “easier” or\nbecause they don’t understand the issues with Terminal Multiples."
  },
  {
    "id": "mi-104",
    "sourceNumber": 5,
    "page": 95,
    "question": "Suppose you build a Levered DCF instead of an Unlevered DCF. What changes?",
    "sampleAnswer": "First, you use Levered FCF instead of Unlevered FCF, which means you deduct the Net Interest\nExpense from EBIT before multiplying it by (1 – Tax Rate); you also factor in new Debt issuances\nand Debt principal repayments, which could make a net positive or negative impact.\nSecond, you use the Cost of Equity rather than WACC for the Discount Rate because Levered\nFCF is available only to the common shareholders.\nThird, you calculate the Terminal Value using an Equity Value-based multiple such as P / E or\nEquity Value / Levered FCF.\nFinally, there is no “bridge” at the end because in a Levered DCF, you calculate the company’s\nImplied Equity Value directly based on the PV of the cash flows and the Terminal Value."
  },
  {
    "id": "mi-105",
    "sourceNumber": 6,
    "page": 96,
    "question": "Will you get the same results from an Unlevered DCF and a Levered DCF?",
    "sampleAnswer": "No. The simplest explanation is that an Unlevered DCF does not directly factor the Cost of Debt\ninto the FCF projections, while a Levered FCF does. The Unlevered DCF indirectly accounts for it\nvia the WACC calculation, but it won’t be equivalent to the Levered version.\nThat alone creates differences, but the more volatile cash flow in a Levered DCF (due to the\nChange in Net Debt) also plays a role. It’s difficult to pick equivalent assumptions, and it’s not\nworth considering because almost no one uses the Levered DCF in real life."
  },
  {
    "id": "mi-106",
    "sourceNumber": 7,
    "page": 96,
    "question": "A client company plans to change its capital structure. Currently, it has 10% Debt / Total Capital, but it wants to increase this to 30%. Your co-worker claims that if you use an Unlevered DCF to value this company, it won’t be affected by this change in capital structure. Are they correct?",
    "sampleAnswer": "No. It’s true that the Unlevered Free Cash Flow won’t be affected by this change in capital\nstructure and the higher Interest Expense, but the Discount Rate will be affected.\nTo account for this difference, you should calculate WACC under both capital structure\npercentages and use a changing Discount Rate each year in the analysis as the company\nprogresses from 10% to 30% Debt / Total Capital over the forecast period."
  },
  {
    "id": "mi-107",
    "sourceNumber": 8,
    "page": 96,
    "question": "What is the logic behind the main components of Unlevered Free Cash Flow? For example, why does it include the Change in Working Capital but not the Net Interest Expense?",
    "sampleAnswer": "Unlevered FCF reflects the core, recurring line items available to ALL investor groups.\nThat’s because Unlevered FCF corresponds to Enterprise Value, which represents the value of\nthe company’s core business available to all the investor groups.\nSo, if an item is NOT recurring, NOT related to the company’s core business, or NOT available to\nall investor groups, you ignore it in UFCF.\nThe Change in Working Capital is recurring, related to the core business, and available to all the\ninvestor groups, so it is included. The Net Interest Expense is related to the company’s\nfinancing, not its core business, and is only available to the lenders, so it is not included."
  },
  {
    "id": "mi-108",
    "sourceNumber": 9,
    "page": 97,
    "question": "What’s the relationship between subtracting an expense in the FCF projections and the Enterprise-Value-to-Equity-Value “bridge” at the end of the DCF?",
    "sampleAnswer": "If you subtract a certain expense in FCF, then you ignore its corresponding Liability in the\n“bridge” at the end (i.e., the place where you add Cash, subtract Debt, etc., to move from\nEnterprise Value to Equity Value).\nBut if you ignore or exclude a certain expense, you should subtract its corresponding Liability in\nthe bridge.\nThe perfect example is Debt: In an Unlevered DCF, you ignore the Interest Expense, so you\nsubtract the Debt as a Liability in the bridge."
  },
  {
    "id": "mi-109",
    "sourceNumber": 10,
    "page": 97,
    "question": "Should you add back Stock-Based Compensation to calculate Free Cash Flow?",
    "sampleAnswer": "It’s a non- cash add-back on the Cash Flow Statement.\nNo! You should consider SBC a cash expense in the context of a valuation because it creates\nadditional shares and dilutes the existing investors. So, it’s not just a simple “timing difference”\nline item like CapEx and D&A.\nAs a real-life example, imagine owning a house, renting it out, and paying someone to manage\nthe tenants for you. Instead of paying them a salary, you give them a 1% stake in your house\neach year.\nIf you now sell your house after 10 years, you only get 90% of the proceeds rather than 100%.\nYou may not have paid this manager in cash, but you still paid them! SBC works the same way\nbut with a company's existing shareholders and their ownership."
  },
  {
    "id": "mi-110",
    "sourceNumber": 11,
    "page": 97,
    "question": "What’s the intuition behind the Gordon Growth formula for Terminal Value?",
    "sampleAnswer": "The typical formula is:\nTerminal Value = Final Year FCF * (1 + Terminal FCF Growth Rate) / (Discount Rate – Terminal\nFCF Growth Rate)\nA company is worth more if its growth rate is higher in the Terminal Period and less if its growth\nrate is lower; it’s also worth more if its starting FCF in the Terminal Period is higher.\nIf the company’s Discount Rate is higher, the company is worth less because the denominator is\nbigger (and vice versa)."
  },
  {
    "id": "mi-111",
    "sourceNumber": 12,
    "page": 98,
    "question": "If you use the Multiples Method to calculate Terminal Value, do you use the multiples from the Public Comps or Precedent Transactions?",
    "sampleAnswer": "It’s better to start with the multiples from the Public Comps – ideally, the ones from 1-2 years\ninto the future – because you don’t want to reflect the control premium in the Precedent\nTransactions if you’re completing a standalone company valuation.\nIf the selected multiples imply a reasonable Terminal FCF Growth Rate, you might stick with\nyour initial guess; if not, adjust it up or down as necessary."
  },
  {
    "id": "mi-112",
    "sourceNumber": 13,
    "page": 98,
    "question": "How do you pick the Terminal Growth Rate when calculating the Terminal Value using the Gordon Growth Method?",
    "sampleAnswer": "This growth rate should be below the country’s long-term GDP growth rate and in line with\nother macroeconomic variables like inflation.\nFor example, if you’re in a developed country where the expected long-term GDP growth rate is\n3%, you might use numbers ranging from 1% to 2% for the Terminal Growth Rates."
  },
  {
    "id": "mi-113",
    "sourceNumber": 14,
    "page": 98,
    "question": "How can you check whether your Terminal Value estimate is reasonable?",
    "sampleAnswer": "You start by entering a range of assumptions for the Terminal Multiple or Terminal FCF Growth\nRate, and you cross-check them by calculating the Growth Rates or Multiples they imply.\nIf these seem wrong, you adjust the range of Terminal Multiples or Terminal FCF Growth Rates\nuntil you get more reasonable results.\nFor example, if the multiple you pick implies a Terminal FCF Growth Rate of 5%, that’s too high\nfor developed countries, so you should pick a lower Terminal Multiple."
  },
  {
    "id": "mi-114",
    "sourceNumber": 15,
    "page": 99,
    "question": "Does it ever make sense to use a negative Terminal FCF Growth Rate?",
    "sampleAnswer": "Yes. For example, if you’re valuing a biopharmaceutical company, and the patent on its key\ndrug expires within the explicit forecast period, it might be reasonable to assume that the\ncompany never replaces the lost revenue from this drug, which results in declining cash flow.\nA negative Terminal FCF Growth Rate represents your expectation that the company will stop\ngenerating cash flow eventually (even if it happens decades into the future).\nIt doesn’t make the company “worthless”; it’s just worth less."
  },
  {
    "id": "mi-115",
    "sourceNumber": 16,
    "page": 99,
    "question": "Explain how you deal with leases and lease accounting in a DCF.",
    "sampleAnswer": "The easiest solution is to treat the full Lease Expense (from both Finance and Operating Leases)\nas a simple cash operating expense and deduct it in the FCF projections.\nIf you do this, you can ignore the Lease Liabilities in the bridge and the WACC calculation,\ngreatly simplifying the analysis.\nYou could do the opposite and treat Leases as “capital” and add back or exclude the full Lease\nExpense in the projections, deduct the change in Lease Liabilities, deduct Lease Liabilities in the\nbridge, and count Leases in WACC, but this adds significant work and barely changes the results."
  },
  {
    "id": "mi-116",
    "sourceNumber": 17,
    "page": 99,
    "question": "You have just finished building a DCF for a new client. What are some potential “warning signs” that your assumptions may not be correct?",
    "sampleAnswer": "First, the company’s revenue and FCF growth should always decline and fall to very low levels\nby the end of the forecast period (right around GDP growth or inflation).\nSecond, the PV of the Terminal Value might account for far too much value, such as 95% of the\ntotal; if this is the case, you should extend the forecasts so the FCF contributes more. If this\nhappens, you should also check the Implied Terminal Growth Rates and Multiples.\nThird, you may be double-counting items; if you deduct an expense in UFCF, it should not\nappear in the Enterprise Value bridge.\nFinally, be careful with the margin, CapEx, and D&A assumptions. The margins should stabilize\nfurther into the forecast period, and CapEx should remain ahead of D&A even into the Terminal\nPeriod if you are assuming continued growth."
  },
  {
    "id": "mi-117",
    "sourceNumber": 18,
    "page": 100,
    "question": "Why do you use the mid-year convention in a DCF, and how does it affect the results?",
    "sampleAnswer": "You use it because a company’s cash flows do not arrive 100% at the end of each year – the\ncompany generates cash flow throughout each year.\nUsing 1, 2, 3, 4, etc., for the discount periods implies that one full year must pass for the first\ncash flow to arrive (and then another full year after that for the next one).\nIf you use 0.5, 1.5, 2.5, 3.5, etc., instead, you assume that only half a year passes before the\nfirst cash flow is generated, which is closer to real life. A full year still separates each\nsubsequent cash flow, but they now arrive in the middle of each year.\nA DCF using the mid-year convention will produce higher implied values because the discount\nperiods are lower, and money in 0.5 years is worth more today than money in 1.0 years."
  },
  {
    "id": "mi-118",
    "sourceNumber": 19,
    "page": 100,
    "question": "Why might you include a “stub period” in a DCF, and what does it mean?",
    "sampleAnswer": "You might include a “stub period” if you’re valuing a company midway through the year and it\nhas already reported some of its financial results.\nA DCF is based on expected future cash flow, so you should subtract these previously reported\nresults and adjust the discount periods as well.\nFor example, maybe it’s September 30th, and the company’s fiscal year ends on December 31st\n.\nThe company’s future cash flow for this year will be generated between September 30th and\nDecember 31st\n.\nTherefore, you should exclude the cash flow from January 1st to September 30th in your\nprojections since that part of the year has already passed.\nSo, in the first year, you would include only the projected FCF from September 30th to\nDecember 31st. To discount the FCF in those 3 months, you would use 0.25 for the discount\nperiod because 3 months is 25% of the year.\nYou would then use 1.25 for the discount period of the next year, 2.25 for the year after that,\nand so on."
  },
  {
    "id": "mi-119",
    "sourceNumber": 20,
    "page": 101,
    "question": "Suppose that a company goes from using 0% Debt in its capital structure to 20%. How will its WACC and Implied Value from a DCF change?",
    "sampleAnswer": "Most likely, its WACC will decrease because Debt is cheaper than Equity due to the lower\nexpected/targeted returns and the tax-deductibility of interest paid on Debt.\nSo, when most companies go from 0% Debt to a low/moderate amount of Debt, their WACCs\ntend to decrease, which means their Implied Values from a DCF increase.\nAbove this moderate Debt level, WACC will start to increase as the Cost of Debt and Cost of\nEquity begin to increase, which will reduce the company’s Implied Value."
  },
  {
    "id": "mi-120",
    "sourceNumber": 21,
    "page": 101,
    "question": "Let’s say that the central bank has just raised short-term interest rates from 2% to 5% to fight inflation. How will this affect the WACC and the DCF valuation of a company?",
    "sampleAnswer": "Most likely, WACC will increase, and the company’s Implied Value from the DCF will decrease\nbecause the Discount Rate is now higher due to a higher Risk-Free Rate.\nA higher Risk-Free Rate increases both the Cost of Equity and the Cost of Debt, as the Cost of\nEquity is based on Risk-Free Rate + Equity Risk Premium * Levered Beta, and the Cost of Debt is\nbased on the cost of issuing additional Debt today.\nHowever, higher short-term rates do not always translate into higher long-term government\nbond yields, so we hedged this answer with the “most likely” part. If the 10-year yield you’re\nusing for the Risk-Free Rate stays the same, and the other parameters also stay the same,\nnothing changes."
  },
  {
    "id": "mi-121",
    "sourceNumber": 22,
    "page": 101,
    "question": "You have just finished building a DCF model. Will it make more of a difference to change the average revenue growth rate from 10% to 5% or to change the Discount Rate from 10% to 5%?",
    "sampleAnswer": "Most likely, changing the Discount Rate from 10% to 5% will make a bigger difference because\nthe Discount Rate affects both the PV of the Cash Flows and the PV of the Terminal Value, and a\n5% vs. 10% difference is very significant because it compounds over time.\nChanging the revenue growth from 10% to 5% will reduce the company’s Cash Flows and\nTerminal Value, but not by quite the same factor; the Year 10 revenue will be ~35% lower,\nwhich may not even translate into a 35% difference in FCF."
  },
  {
    "id": "mi-122",
    "sourceNumber": 23,
    "page": 102,
    "question": "The government has just decided to cut the corporate tax rate in your country from 35% to 20%. How will WACC and the DCF output of your valuation change?",
    "sampleAnswer": "The tax rate affects both the FCF and the Discount Rate. If a company has Debt, a lower tax rate\nwill increase its Cost of Debt because the interest paid on Debt will produce a reduced tax\nbenefit; the Cost of Equity will also be higher because that same tax rate also factors in when\nlevering and re-levering Beta.\nSo, WACC tends to increase slightly from this tax rate reduction, but FCF also increases, which\ntends to be more significant than the increase in WACC. So, the company’s Implied Value\nshould most likely increase. If the company has no Debt, its Implied Value definitely increases."
  },
  {
    "id": "mi-123",
    "sourceNumber": 24,
    "page": 102,
    "question": "You’re building a 10-year DCF for a growth-oriented tech company. Your VP reviews your model and asks you to extend the forecast period to 20 years. How will the output change?",
    "sampleAnswer": "The main difference with a longer forecast period is that the PV of the Terminal Value should\nnow account for a reduced percentage of the company’s total Implied Value from the DCF (e.g.,\n50% vs. 70%).\nWe can’t say if the Implied Value will go up or down because it depends on the specific\nnumbers and the relative weight of the Terminal Value vs. everything else."
  },
  {
    "id": "mi-124",
    "sourceNumber": 25,
    "page": 102,
    "question": "Two companies have the same financial profiles and operate in the same industry, but one is in an emerging market, and the other is in a developed market. How will their DCF outputs differ?",
    "sampleAnswer": "The one in the emerging market should have a higher Discount Rate and, therefore, a lower\nImplied Value because the geopolitical risk, equity risk, and credit default risk are all higher.\nThis might not always be true if the emerging market company is also growing more quickly, as\nthe higher growth could offset the higher Discount Rate – but the question says these\ncompanies have “the same financial profiles.”\nDiscounted Cash Flow (DCF) – The Discount Rate\nQuestions related to the Discount Rate and WACC in a DCF are surprisingly tricky because it’s\nnot always easy to explain how the assumptions are linked.\nYou don’t need to know every detail of these calculations, but you should know the intuition\nbehind everything.\nIf you understand that the Discount Rate represents the opportunity cost and that the Debt and\nEquity levels affect all investors, you can answer most of these questions."
  },
  {
    "id": "mi-125",
    "sourceNumber": 1,
    "page": 103,
    "question": "What does the Cost of Equity mean intuitively?",
    "sampleAnswer": "It tells you the average percentage a company’s stock “should” return each year over the long\nterm, factoring in both stock-price appreciation and dividends.\nIn a valuation, it represents the average annualized return that equity investors might earn over\nthe long term.\nTo a company, the Cost of Equity represents the cost of funding its operations by issuing\nadditional shares to investors.\nThe company “pays for” Equity via potential Dividends (a real cash expense) and the dilution of\nexisting investors."
  },
  {
    "id": "mi-126",
    "sourceNumber": 2,
    "page": 103,
    "question": "What does WACC mean intuitively?",
    "sampleAnswer": "WACC is your expected or targeted annualized return if you invest proportionately in all parts\nof the company’s capital structure – Debt, Equity, and Preferred Stock.\nTo a company, WACC represents the cost of funding its operations by using all its sources of\ncapital and keeping its capital structure percentages the same over time.\nInvestors might invest in a company if the expected IRR exceeds its WACC, and a company\nmight fund a new project, acquisition, or expansion if the expected IRR exceeds its WACC."
  },
  {
    "id": "mi-127",
    "sourceNumber": 3,
    "page": 104,
    "question": "How do you calculate the Cost of Equity?",
    "sampleAnswer": "Cost of Equity = Risk-Free Rate + Equity Risk Premium * Levered Beta\nThe Risk-Free Rate represents the yield on \"risk-free\" government bonds denominated in the\nsame currency as the company’s cash flows. You usually use 10-year or 20-year bonds to match\nthe explicit forecast period of the DCF.\nLevered Beta represents the volatility of this stock relative to the market as a whole, factoring\nin both intrinsic business risk and risk from leverage.\nAnd the Equity Risk Premium represents how much the stock market in the company’s country\nwill return above the “risk-free” government bond yield in the long term.\nStocks are riskier and have higher potential returns than government bonds, so you take the\nyield on the bonds, add the extra returns you could get from the stock market, and then adjust\nfor this company’s specific risk and potential returns."
  },
  {
    "id": "mi-128",
    "sourceNumber": 4,
    "page": 104,
    "question": "If a company operates in the EU, U.S., and U.K., what should you use for its Risk-Free Rate?",
    "sampleAnswer": "You should use the appropriate yield on the government bonds denominated in the currency of\nthe company’s cash flows.\nSo, if the company reports its financials in USD, you might use the yield on 10-year U.S.\nTreasuries; if it reports them in EUR, you might use the yield on 10-year bonds issued by the\ngovernment in a European country that uses the EUR. And if the financials are in GBP, you\nwould use the yield on 10-year bonds issued by the Bank of England (“gilts”)."
  },
  {
    "id": "mi-129",
    "sourceNumber": 5,
    "page": 104,
    "question": "How do you calculate the Equity Risk Premium for a multinational company operating in many geographies?",
    "sampleAnswer": "You might take the percentage of revenue earned in each country, multiply it by the ERP for\nthat country’s stock market, and then add the terms to get the weighted average ERP.\nTo calculate the ERP in each market, you would calculate the average annualized returns of the\ncountry’s stock market vs. the Risk-Free Rate in that country over the long term. If that is not\nfeasible or the data does not exist, you could also take the U.S. stock market ERP and add a\ndefault spread to represent the additional risk of the other country."
  },
  {
    "id": "mi-130",
    "sourceNumber": 6,
    "page": 104,
    "question": "What does Beta mean intuitively?",
    "sampleAnswer": "Levered Beta tells you how volatile a company’s stock price is relative to the stock market as a\nwhole, factoring in both intrinsic business risk and risk from leverage (i.e., Debt).\nIf Beta is 1.0, when the market goes up 10%, this company’s stock price also increases by 10%.\nIf Beta is 2.0, when the market goes up 10%, this company’s stock price goes up by 20%.\nIf the market drops by 10%, this company’s stock price falls by 10% when the Beta is 1.0 or 20%\nwhen the Beta is 2.0.\nUnlevered Beta excludes the risk from leverage and reflects only the intrinsic business risk, so\nit’s always less than or equal to Levered Beta."
  },
  {
    "id": "mi-131",
    "sourceNumber": 7,
    "page": 105,
    "question": "What are the formulas for un-levering and re-levering Beta, and what do they mean?",
    "sampleAnswer": "Unlevered Beta = Levered Beta / (1 + Debt / Equity * (1 – Tax Rate) + Preferred Stock / Equity)\nLevered Beta = Unlevered Beta * (1 + Debt / Equity * (1 – Tax Rate) + Preferred Stock / Equity)\nYou use a “1 +” before the Debt / Equity * (1 – Tax Rate) term to ensure that Unlevered Beta is\nalways less than or equal to Levered Beta.\nYou multiply the Debt / Equity term by (1 – Tax Rate) because the tax-deductibility of interest\nreduces the risk of Debt.\nWhen you move from Levered Beta to Unlevered Beta, you divide by the “risk from leverage”\nterm to remove it and reduce Beta accordingly; it’s the opposite when moving from Unlevered\nto Levered Beta.\nYou un-lever and re-lever Beta because when you calculate WACC in a DCF, you want to isolate\nthe “inherent business risk” and then take that risk and add the company-specific risk from\nleverage for the company you’re valuing."
  },
  {
    "id": "mi-132",
    "sourceNumber": 8,
    "page": 105,
    "question": "How do you calculate WACC, and why does it pair with Unlevered Free Cash Flow?",
    "sampleAnswer": "The formula for WACC is simple:\nWACC = Cost of Equity * % Equity + Cost of Debt * (1 – Tax Rate) * % Debt + Cost of Preferred\nStock * % Preferred Stock\nThere is some disagreement around the different ways to calculate each component, but the\nbasic formula is straightforward.\nIt pairs with UFCF because they both represent all the investors in the company. It is not\n“capital structure-neutral” because no Discount Rate can be. Each investor group affects the\nothers!"
  },
  {
    "id": "mi-133",
    "sourceNumber": 9,
    "page": 106,
    "question": "Why is Equity more expensive than Debt?",
    "sampleAnswer": "Because it offers higher risk and higher potential returns and lacks the tax benefits of Debt.\nExpected stock market returns usually exceed the Yield to Maturity on Debt, making the Equity\ncost higher. The interest on Debt is also tax-deductible, further reducing the Debt cost and\nmaking Equity even more expensive.\nIn developed markets, the average annualized stock market return is often in the 7 – 10%\nrange, so a company with a Levered Beta of 1.0 will have a Cost of Equity in that range.\nFor the Cost of Debt to be higher, the Pre-Tax Cost would have to be ~9 – 13% at a 25% tax rate.\nMore speculative companies might pay interest rates in that range, but larger/mature\ncompanies tend to pay less than that."
  },
  {
    "id": "mi-134",
    "sourceNumber": 10,
    "page": 107,
    "question": "How do you determine the Cost of Debt and Cost of Preferred Stock in the WACC calculation, and what do they mean?",
    "sampleAnswer": "These Costs represent what the company would pay if it issued additional Debt or Preferred\nStock.\nTo an outside investor, these Costs represent their expected annualized returns if they held the\nDebt or Preferred Stock through their maturities.\nYou can estimate the Cost of Debt by calculating the Yield to Maturity (YTM), which reflects the\ncoupon rates on the company’s bonds and their market values (e.g., a bond with a coupon rate\nof 5% that’s trading at a discount to par value will have a YTM higher than 5%).\nIf you can’t find this information, you could also use a simple weighted average interest rate for\nthe issuances or take the Risk-Free Rate and add a default spread based on the company’s\nexpected credit rating.\nThe Cost of Preferred Stock is similar, but Preferred Dividends are not tax-deductible, so you do\nnot multiply by the (1 – Tax Rate) term in the WACC calculation.\nMerger Models – Concepts\nIt’s important to understand the fundamentals of M&A deals and merger models, but they are\nless important than the accounting and valuation topics.\nThey are more advanced but also less relevant in certain groups (e.g., ECM, DCM, etc.). Unlike\naccounting and valuation, M&A modeling applies mostly to investment banking and other deal-\nbased roles and is less important for “public markets” roles (equity research, asset\nmanagement, hedge funds, etc.).\nYou could certainly get quantitative questions related to merger models, such as quick\naccretion/dilution calculations, but conceptual questions are more likely in entry-level\ninterviews.\n• Interview Guide – M&A Deals and Merger Models | Quiz Questions\n• Core Financial Modeling – M&A and Merger Model Module"
  },
  {
    "id": "mi-135",
    "sourceNumber": 1,
    "page": 108,
    "question": "Walk me through a merger model (accretion/dilution analysis). In a merger model, you start by projecting the financial statements of the Buyer and Seller.",
    "sampleAnswer": "Then, you estimate the Purchase Price and the mix of Cash, Debt, and Stock used to fund the\ndeal. You create a Sources & Uses schedule and Purchase Price Allocation schedule to estimate\nthe after-effects of the deal on the financial statements.\nThen, you combine the Balance Sheets of the Buyer and Seller, reflecting the Cash, Debt, and\nStock used, new Goodwill created, and any write-ups and write-downs. You then combine the\nIncome Statements, reflecting the Foregone Interest on Cash, Interest Paid on New Debt, and\nSynergies.\nThe Combined Net Income equals the Combined Pre-Tax Income times (1 – Buyer’s Tax Rate),\nand the Combined EPS equals the Combined Net Income divided by (Buyer’s Existing Share\nCount + New Shares Issued in the Deal).\nThe EPS accretion/dilution equals the percentage difference between this Combined EPS and\nthe Buyer’s standalone EPS."
  },
  {
    "id": "mi-136",
    "sourceNumber": 2,
    "page": 108,
    "question": "Why might an M&A deal be accretive or dilutive?",
    "sampleAnswer": "A deal is accretive if the extra Pre-Tax Income from a Seller exceeds the cost of the acquisition\nin the form of the Foregone Interest on Cash, Interest Paid on New Debt, and New Shares\nIssued.\nFor example, if the Seller contributes $100 in Pre-Tax Income, but the deal costs the Buyer only\n$70 in additional Interest Expense, and the Buyer doesn’t issue any new shares, the deal will be\naccretive because the Buyer’s Earnings per Share (EPS) will increase.\nA deal will be dilutive if the opposite happens. For example, if the Seller contributes $100 in\nPre-Tax Income, but the deal costs the Buyer $130 in additional Interest Expense, and its share\ncount remains the same, its EPS will decrease."
  },
  {
    "id": "mi-137",
    "sourceNumber": 3,
    "page": 108,
    "question": "How can you tell whether an M&A deal will be accretive or dilutive?",
    "sampleAnswer": "You compare the Weighted Cost of Acquisition to the Seller’s Yield at the Purchase Price.\n• Cost of Cash = Foregone Interest Rate on Cash * (1 – Buyer’s Tax Rate)\n• Cost of Debt = Interest Rate on New Debt * (1 – Buyer’s Tax Rate)\n• Cost of Stock = Reciprocal of the Buyer’s P / E multiple, i.e., Net Income / Equity Value.\n• Seller’s Yield = Reciprocal of the Seller’s P / E multiple, calculated using the Purchase\nEquity Value.\nWeighted Cost of Acquisition = % Cash Used * Cost of Cash + % Debt Used * Cost of Debt + %\nStock Used * Cost of Stock.\nIf the Weighted Cost is less than the Seller’s Yield, the deal will be accretive; if the Weighted\nCost is greater than the Seller’s Yield, the deal will be dilutive."
  },
  {
    "id": "mi-138",
    "sourceNumber": 4,
    "page": 109,
    "question": "That sounds complicated. Are there any shortcuts for guesstimating whether an M&A deal will be accretive or dilutive?",
    "sampleAnswer": "If it is a 100% Stock deal, you can compare the Buyer’s P / E multiple to the Seller’s P / E\nmultiple at the purchase price. If the Buyer’s multiple is higher, the deal will be accretive.\nThis works because the reciprocals of the P / E multiples in a 100% Stock deal are the Weighted\nCost of Acquisition and the Seller’s Yield.\nFor example, let’s say the Buyer’s P / E multiple is 10x, and the Weighted Cost of Acquisition is\n10%.\nIf the Seller’s Current Equity Value is $1000, the Buyer pays a 20% premium, and the Seller’s\nNet Income is $200, its P / E multiple at the purchase price is $1200 / $200 = 6x.\nTherefore, a 100% Stock version of this deal is accretive because the Seller’s Yield is 1 / 6 =\n16.7%, which is higher than the Weighted Cost of Acquisition."
  },
  {
    "id": "mi-139",
    "sourceNumber": 5,
    "page": 109,
    "question": "How do you determine the Purchase Price in an M&A deal?",
    "sampleAnswer": "If the Seller is public, you assume a premium to the Seller’s current share price based on the\naverage premiums for similar deals in the market (usually between 10% and 30%). You can also\nuse the DCF, Public Comps, and other valuation methodologies to cross-check this figure.\nThe Purchase Price for private Sellers is based on the standard valuation methodologies, and\nyou usually link it to a multiple of EBITDA, EBIT, or Revenue since private companies don’t have\neasy-to-determine share prices.\nIf the Buyer expects to realize significant Synergies, it is often willing to pay a higher premium\nfor the Seller because the Present Value of the Synergies might exceed this premium."
  },
  {
    "id": "mi-140",
    "sourceNumber": 6,
    "page": 109,
    "question": "What is the “true price” in an M&A deal: The Purchase Equity Value or Purchase Enterprise Value? Why?",
    "sampleAnswer": "The “true price” is the Purchase Enterprise Value (or something close to it) because that\nrepresents what the Buyer pays all the Seller’s investors for its core assets. However, the\nPurchase Enterprise Value is not necessarily what the Buyer pays in “upfront capital.”\nAlso, the Purchase Equity Value often drives the Cash, Debt, and Stock used to fund a deal. The\nPurchase Equity Value is also what the selling shareholders receive in the deal.\nTherefore, even though the Purchase Enterprise Value is the true price, both metrics are\nimportant in M&A analysis."
  },
  {
    "id": "mi-141",
    "sourceNumber": 7,
    "page": 110,
    "question": "How does an Acquirer determine the mix of Cash, Debt, and Stock to use in a deal?",
    "sampleAnswer": "Since Cash is the cheapest for most Acquirers, they’ll use all they can before moving to the\nother funding sources. So, you might assume that the Cash Available equals the Acquirer’s\ncurrent Cash balance minus its Minimum Cash balance, also factoring in the Target’s Cash and\nMinimum Cash when applicable.\nAfter that, Debt tends to be the next cheapest option. An Acquirer might be able to raise Debt\nto the level where its Debt / EBITDA remains in-line with peer companies’.\nSo, if it’s levered at 2x EBITDA now, and similar companies have 5x Debt / EBITDA, it might be\nable to raise an additional 3x EBITDA worth of Debt. Again, you may also factor in the Target’s\nDebt and EBITDA if they are significant.\nFinally, there’s no strict limit on the amount of Stock an Acquirer might issue, but few\ncompanies would issue enough shares to lose control of the company, and some Acquirers will\nissue Stock only up to the point at which the deal turns dilutive."
  },
  {
    "id": "mi-142",
    "sourceNumber": 8,
    "page": 110,
    "question": "Are there cases where EPS accretion/dilution is NOT important? What other analyses could you look at to assess M&A deals?",
    "sampleAnswer": "Yes, there are many cases where EPS accretion/dilution is less important.\nFor example, if the Buyer is private or has negative EPS as a standalone entity, it won't care\nwhether the deal is accretive or dilutive.\nIt also makes little difference if the Buyer is far bigger than the Seller (e.g., 10x – 100x its size).\nBesides EPS accretion/dilution, you can also analyze the deal's qualitative merits, compare the\nIRR to the Discount Rate, and value the Seller plus the Synergies and compare that to the Equity\nPurchase Price.\nYou can also create a Contribution Analysis to determine how much the Buyer and Seller\n\"contribute\" to each financial metric and then compare the contribution percentages to their\nrespective ownership percentages, assuming it’s a 100% Stock deal.\nValue Creation Analysis to determine how the Buyer’s share price will change after the deal\ncloses may also be useful, especially if the Buyer + Seller together will resemble a larger, more\nvaluable public company."
  },
  {
    "id": "mi-143",
    "sourceNumber": 9,
    "page": 111,
    "question": "How do the assumptions for a cash-free, debt-free deal for a private Seller differ from those of a standard M&A deal for a public Seller?",
    "sampleAnswer": "In a cash-free, debt-free deal, the Seller’s existing Cash and Debt balances go to $0 when the deal closes and are immediately replaced with new Cash and Debt balances.\nThe Cash is brought up to the Seller’s Minimum Cash, and the new Debt balance is usually the\nsame as the old one because it is simply replaced with a new issuance.\nIf Debt > Cash, the Seller uses its Cash balance to repay as much Debt as it can, and the\nremaining Debt is deducted from the proceeds to the selling shareholders (i.e., they earn less\nbecause they must repay some of the Debt).\nIf Cash > Debt, the Seller repays its entire Debt balance using its Cash, and it distributes the\nremaining Cash to shareholders as the deal closes, which reduces its Equity Value.\nIn these types of deals, the purchase price is based on a multiple such as TEV / EBITDA or TEV /\nRevenue rather than a share-price premium because the Seller is private.\nAlso, the Uses side of the Sources & Uses schedule is based on the Purchase Enterprise Value,\nthe Seller’s Minimum Cash, and the Transaction/Financing Fees.\nThe Sources side is standard and includes the usual Cash, Debt, and Stock line items."
  },
  {
    "id": "mi-144",
    "sourceNumber": 10,
    "page": 111,
    "question": "What’s the purpose of a Purchase Price Allocation schedule in a merger model?",
    "sampleAnswer": "The main purpose is to estimate the Goodwill created in a deal.\nGoodwill exists because the Purchase Equity Value in deals almost always exceeds the Seller’s\nCommon Shareholders’ Equity (CSE).\nWhen this happens, the Combined Balance Sheet will go out of balance because the Seller’s CSE\nis written down to $0, but the total amount of Cash, Debt, and Stock used in the deal is greater\nthan the CSE that was written down. Goodwill exists to “plug the gap” and ensure the Balance\nSheet balances.\nSo, you estimate the new Goodwill with this schedule, factor in write-ups of Assets such as\nPP&E and Intangibles, and include other acquisition effects such as the creation of a new\nDeferred Tax Liability and changes to the existing Deferred Tax items."
  },
  {
    "id": "mi-145",
    "sourceNumber": 11,
    "page": 112,
    "question": "Why do Deferred Tax Liabilities get created in many M&A deals?",
    "sampleAnswer": "A Deferred Tax Liability, or DTL, represents the expectation that Cash Taxes will exceed Book\nTaxes in the future.\nDTLs get created because the Depreciation & Amortization on Asset Write-Ups is not deductible\nfor cash-tax purposes in a Stock Purchase (i.e., a standard M&A deal where the Buyer purchases\nall the Seller’s common shares and acquires everything the Seller has).\nAs a result, the Buyer will pay more in Cash Taxes than Book Taxes until the Write-Ups are fully\ndepreciated/amortized. Each time the Buyer pays more in Cash Taxes than Book Taxes, the DTL\ndecreases until it eventually reaches 0."
  },
  {
    "id": "mi-146",
    "sourceNumber": 12,
    "page": 112,
    "question": "Give me an example of how you might estimate the Revenue and Expense Synergies in an M&A deal. With Revenue Synergies, you might assume that the Seller can sell its products to some of the Buyer’s customer base.",
    "sampleAnswer": "So, if the Buyer has 100,000 customers, 1,000 of them might buy widgets from the Seller. Each\nwidget costs $10.00, which is $10,000 in extra Revenue.\nThere will also be COGS and Operating Expenses associated with these extra sales, so you must\nfactor those in. For example, if each widget costs $5.00, the Combined Company will earn only\n$5,000 in extra Pre-Tax Income.\nWith Expense Synergies, you might assume that the Combined Company can close several\noffices or lay off redundant employees, particularly in administrative functions such as IT,\naccounting, and HR.\nFor example, if the Combined Company has 10 offices, management might believe only 8 will\nbe required after the merger.\nIf each office costs $100,000 per year, there will be 2 * $100,000 = $200,000 in Expense\nSynergies, boosting the Combined Pre-Tax Income by $200,000."
  },
  {
    "id": "mi-147",
    "sourceNumber": 13,
    "page": 113,
    "question": "Why do many merger models tend to overstate the impact of Synergies?",
    "sampleAnswer": "First, many merger models do not include the costs associated with Revenue Synergies. Even if\nthe Buyer or Seller can sell more products after the deal closes, those extra units cost\nsomething to produce and deliver, so you must include the extra COGS and OpEx.\nSecond, realizing Synergies takes time. Even if a company expects $10 million in “long-term\nsynergies,” it won’t realize all of them in Year 1; it might take several years, and the percentage\nrealized will increase gradually over time.\nFinally, realizing Synergies costs money. There will always be “integration costs” associated\nwith a deal, and certain types of Synergies, such as headcount reductions, will cost even more\ndue to severance costs.\nMerger Models – Calculations\nYou can determine whether a deal will be accretive or dilutive by comparing the Weighted Cost\nof Acquisition to the Seller’s Purchase Yield (Net Income / Purchase Equity Value), as defined in\nthe previous section.\nIf you get a question about the Combined Equity Value, Combined Enterprise Value, or\nCombined Multiples, the rules are shown below.\nNote that these rules ignore synergies and acquisition effects beyond the Interest Expense on\nNew Debt, Foregone Interest on Cash, and New Shares Issued:\n1. Combined Equity Value = Acquirer’s Equity Value + Market Value of Stock Issued in the\nDeal (but this may change post-announcement if the Acquirer’s share price falls).\n2. Combined Enterprise Value = Acquirer’s Enterprise Value + Purchase Enterprise Value of\nTarget (but this may change post-announcement if the Acquirer’s share price falls).\n3. Combined Valuation Multiples: TEV-based Combined Multiples are in between the\nAcquirer’s current trading multiples and Target’s purchase multiples. Equity Value-based\nCombined Multiples are usually in this range as well, but they do not have to be. TEV-\nbased Combined Multiples are not affected by the deal financing, but Equity Value-\nbased Combined Multiples are.\nThese questions aren’t that important, but many groups like to ask them if you’ve had previous\nbanking or M&A experience."
  },
  {
    "id": "mi-148",
    "sourceNumber": 1,
    "page": 114,
    "question": "Company A has 10 shares outstanding at a share price of $25.00, and its Net Income is $10.",
    "sampleAnswer": "It acquires Company B for a Purchase Equity Value of $150. Company B has a Net Income of\n$10 as well. Both companies have 25% tax rates. How accretive is a 100% Stock deal?\nCompany A’s EPS is $10 / 10 = $1.00.\nCompany A must issue 6 new shares to do the deal since $150 / $25.00 = 6, so the Combined\nShare Count is 10 + 6 = 16.\nSince no Cash or Debt is used and the tax rates are the same, the Combined Net Income =\nCompany A Net Income + Company B Net Income = $10 + $10 = $20.\nTherefore, the Combined EPS is $20 / 16 = $1.25, so it’s accretive by 25% (mental math: 25% of\n16 is 4, and 20 is 4 greater than 16, so take the $1.00 EPS and increase it by 25%)."
  },
  {
    "id": "mi-149",
    "sourceNumber": 2,
    "page": 114,
    "question": "Suppose that Company A now decides to use 100% Cash or 100% Debt to do this deal. If the Cash interest rate is 4%, and the Debt interest rate is 10%, will this deal be accretive or dilutive under these financing structures?",
    "sampleAnswer": "The After-Tax Cost of Cash is 4% * (1 – 25%) = 3%, and the After-Tax Cost of Debt is 10% * (1 –\n25%) = 7.5%.\nThe Seller’s Purchase Yield is $10 / $150 = ~6.7%.\nTherefore, a 100% Cash deal will be accretive, and a 100% Debt deal will be dilutive."
  },
  {
    "id": "mi-150",
    "sourceNumber": 3,
    "page": 114,
    "question": "Company A has a P / E of 11x, a Debt Interest Rate of 8%, a Cash Interest Rate of 4%, and a Tax Rate of 25%.",
    "sampleAnswer": "It wants to acquire Company B at a purchase P / E multiple of 20x using 1/3 Stock, 1/3 Debt,\nand 1/3 Cash. Will the deal be accretive?\nCompany A’s After-Tax Cost of Stock is 1 / 11, or ~9%, its After-Tax Cost of Debt is 8% * (1 –\n25%) = 6%, and its After-Tax Cost of Cash is 4% * (1 – 25%) = 3%.\nCompany B’s Purchase Yield is 1 / 20, or 5%.\nThe Weighted Cost of Acquisition is 9% * 1/3 + 6% * 1/3 + 3% * 1/3 = 3% + 2% + 1% = 6%.\nThe deal will be dilutive since the Weighted Cost exceeds Company B’s Purchase Yield."
  },
  {
    "id": "mi-151",
    "sourceNumber": 4,
    "page": 115,
    "question": "Company A, with a current P / E multiple of 20x, acquires Company B for a P / E purchase multiple of 10x using 100% Debt. What interest rate on Debt would make the deal dilutive? Assume a 25% tax rate.",
    "sampleAnswer": "Company B’s Yield is 1 / 10, or 10%, so the After-Tax Cost of Debt must be above 10% for the deal to be dilutive. At a 25% tax rate, 10% / (1 – 25%) = ~13.3%, which you can round to “Around 13%” (mental math: 75% of 10% is 7.5%, but we’re trying to find the number that 10% is 75% of  So it must be higher by at least 2.5%, which you can round up to ~13%).\nMost companies do not pay 13% interest rates on their Debt, so a 100% Debt will almost\ncertainly be accretive."
  },
  {
    "id": "mi-152",
    "sourceNumber": 5,
    "page": 115,
    "question": "Company A has an Equity Value of $2,000 and a Net Income of $200. Company B has a Purchase Equity Value of $1,200 and a Net Income of $100. How much in Synergies must be realized for a 100% Stock deal to be accretive?",
    "sampleAnswer": "Company A’s P / E is $2,000 / $200 = 10x, so its Cost of Stock is 1 / 10 = 10%. Company B’s\nPurchase P / E is $1,200 / $100 = 12x, so its Yield is 1 / 12, or ~8.3%.\nTherefore, without Synergies, this deal would be slightly dilutive.\nCompany B’s Purchase Yield must exceed 10% for the deal to turn accretive. This means its\nPurchase P / E multiple must be below 10x, which means its Net Income must be above $120\n(since $1,200 / $120 = 10x).\nTherefore, there must be $20 in After-Tax Synergies for this deal to be accretive. At a 25% tax\nrate, that means ~$27 in Pre-Tax Synergies."
  },
  {
    "id": "mi-153",
    "sourceNumber": 6,
    "page": 116,
    "question": "Continuing with this same example, Company A is paying a 20% premium for Company B, so Company B’s Current Equity Value is $1,000. Suppose the market doesn’t “like” this 20% premium, and investors sell off Company A’s stock. How would Company A’s stock price change? Assume it has 200 shares outstanding at $10.00 per share and assume that Company B gets a fixed share count in the deal.",
    "sampleAnswer": "The Combined Equity Value in a deal normally equals the Acquirer’s Equity Value + Stock Issued\nin the Deal, so it’s $2,000 + $1,200 = $3,200 here before the market’s reaction.\nIf the market does not believe in this premium, the Combined Equity Value will fall by the\npremium paid, so it will go from $3,200 to $3,000 here.\nWe know that Company A has 200 shares and that Company B gets $1,200 / $10.00 = 120\nshares because the question states “fixed share count.”\nTherefore, the post-market-reaction share price is $3,000 / 320 = ~$9.38, which you could\nround to “between $9.00 and $10.00” (mental math: $3,000 / 300 = $10.00 and $3,000 / ~333\n= $9.00).\nThe intuition is that this drop of $0.62 is ~6.2% of Company A’s share price, and $200 is ~6.2%\nof the $3,200 Combined Equity Value."
  },
  {
    "id": "mi-154",
    "sourceNumber": 7,
    "page": 116,
    "question": "Continuing with the same scenario, your co-worker reviews the changes and claims that Company A's share price would not have fallen if this had been a 100% Cash or Debt deal. Are they correct?",
    "sampleAnswer": "No. In this case of a “disappearing purchase premium,” both the Combined Equity Value and\nthe Combined Enterprise Value fall by the purchase premium regardless of the financing.\nIn this example, Company B still gets a $1,200 Purchase Equity Value in a 100% Cash deal, even\nif the market disapproves of this 20% premium.\nSo, Company A still pays $1,200 of Cash to do the deal, which means the Combined Cash\nbalance is lower by $1,200. That normally boosts the Combined Enterprise Value by $1,200.\nBut in this case, Company A’s Equity Value will fall by $200 to reflect the “disappeared purchase\npremium,” so the Combined Enterprise Value will be up by $1,000 rather than $1,200.\nThe only difference is that if it’s a 100% Cash or Debt deal, Company A’s share price falls by\n$1.00 rather than $0.62 since $200 / 200 shares = $1.00."
  },
  {
    "id": "mi-155",
    "sourceNumber": 8,
    "page": 117,
    "question": "An Acquirer with an Equity Value of $500 million and an Enterprise Value of $600 million buys another company for a Purchase Equity Value of $100 million and a Purchase Enterprise Value of $150 million. What are the Combined Equity Value and Enterprise Value in a 100% Stock deal?",
    "sampleAnswer": "The Combined Enterprise Value equals the Enterprise Value of the Buyer plus the Purchase\nEnterprise Value of the Seller, so it’s $600 + $150 = $750 million.\nIf it’s a 100% Stock deal, the Combined Equity Value = Acquirer’s Equity Value + Value of Stock\nIssued = $500 + $100 = $600 million."
  },
  {
    "id": "mi-156",
    "sourceNumber": 9,
    "page": 117,
    "question": "How do these figures change if it’s a 50% Cash / 50% Stock deal instead?",
    "sampleAnswer": "The Combined Enterprise Value stays the same regardless of the deal financing, so it’s still $750\nmillion.\nThe Combined Equity Value changes based on the financing because it equals the Acquirer’s\nEquity Value + Value of Stock Issued.\nSo, in a 50% Cash / 50% Stock deal, the Combined Equity Value is $500 + $50 = $550 million."
  },
  {
    "id": "mi-157",
    "sourceNumber": 10,
    "page": 117,
    "question": "An Acquirer with an Equity Value of $500 million and an Enterprise Value of $600 million has a Net Income of $50 million and an EBITDA of $100 million.",
    "sampleAnswer": "The Target, with a Purchase Equity Value of $100 million and a Purchase Enterprise Value of\n$150 million, has a Net Income of $10 million and an EBITDA of $15 million.\nWhat are the Combined P / E and TEV / EBITDA multiples in a 100% Stock deal? Assume 25%\ntax rates for the Acquirer and Target.\nThe Combined Equity Value in a 100% Stock deal is $500 + $100 = $600 million, and the\nCombined Enterprise Value is $600 + $150 = $750 million.\nThe Combined EBITDA is $115 million, and the Combined Net Income, assuming the same tax\nrates and no interest effects since it’s a 100% Stock deal, is $50 + $10 = $60 million.\nTherefore, the Combined P / E multiple is $600 million / $60 million = 10x, and the Combined\nTEV / EBITDA multiple is $750 million / $115 million = ~6.5x."
  },
  {
    "id": "mi-158",
    "sourceNumber": 11,
    "page": 118,
    "question": "How do the multiples change if this is a 100% Debt deal funded with an 8% interest rate issuance?",
    "sampleAnswer": "The Combined EBITDA and Enterprise Value stay the same because they do not depend on the\ndeal financing, so the Combined TEV / EBITDA is still ~6.5x.\nThe Combined Equity Value is now just the Acquirer’s Equity Value of $500 million.\nThe Combined Net Income equals $50 + $10 – $100 * 8% * (1 – 25%) = $50 + $10 – $6 = $54.\nTherefore, the Combined P / E multiple is now $500 million / $54 million = ~9.3x, which you can\nestimate as “between 9x and 10x” (since $500 / $50 = 10x and $500 / ~$56 = 9x)."
  },
  {
    "id": "mi-159",
    "sourceNumber": 12,
    "page": 118,
    "question": "Will the Combined TEV / EBITDA and P / E multiples always be between the Acquirer’s multiples and the Target’s purchase multiples in a deal?",
    "sampleAnswer": "Ignoring synergies and acquisition effects, the Combined Enterprise Value-based Multiples will\nbe between the Buyer’s standalone multiples and the Seller’s purchase multiples.\nThe Combined Equity Value-based Multiples are often in that range as well, but they do not\nhave to be because the two companies could have very different capital structures.\nGenerally, the combined multiples will be closer to the larger company’s multiples (normally\nthe Acquirer), but you can’t use a simple average because the company sizes and financial\ncontribution percentages could be very different.\nLBO Models – Concepts\nLeveraged buyout models are another more advanced concept in investment banking\ninterviews, but you will likely get a few questions about the fundamentals.\nHowever, you’re unlikely to get detailed questions about case studies involving LBO models;\nthese are far more likely in private equity interviews, which are covered in a separate course.\n• Interview Guide – Leveraged Buyouts and LBO Models | Quiz Questions\n• Core Financial Modeling – LBO Model Module"
  },
  {
    "id": "mi-160",
    "sourceNumber": 1,
    "page": 119,
    "question": "What is a leveraged buyout, and why does it work?",
    "sampleAnswer": "In a leveraged buyout (LBO), a private equity firm acquires a company using a combination of Debt and Equity, operates it for several years, and then sells the company at the end of the period to realize a return on its investment.\nDuring the ownership period, the PE firm uses the company’s cash flows to pay for the interest\nexpense on the Debt and to repay the Debt principal.\nLBOs work because leverage amplifies returns: If the deal performs well, the PE firm will realize\nhigher returns than if it had bought the company with 100% Equity.\nBut leverage also presents risks because the returns will be even worse if the deal does not\nperform well."
  },
  {
    "id": "mi-161",
    "sourceNumber": 2,
    "page": 119,
    "question": "Walk me through a basic LBO model (without the full financial statements). In an LBO model, in Step 1, you make assumptions for the Purchase Price, Debt and Equity, Interest Rate on Debt, and other drivers such as the company’s revenue growth and margins. In Step 2, you create a Sources & Uses schedule to show how much Investor Equity the PE firm contributes and how items like the transaction fees and the company’s Cash balance affect this contribution. In Step 3, you project the company’s Income Statement and its partial Cash Flow Statement down to Free Cash Flow.",
    "sampleAnswer": "Then, in Step 4, you use the Free Cash Flow, Beginning Cash, and Minimum Cash to determine\nhow much Debt principal the company repays each year. You then link the Interest Expense on\nthis changing Debt balance to the Income Statement so that FCF deducts the Interest.\nFinally, in Step 5, you make the exit calculations based on an assumed EBITDA Exit Multiple, and\nyou calculate the IRR and Money-on-Money multiple based on the proceeds the PE firm earns\nat the end vs. its Investor Equity in the beginning."
  },
  {
    "id": "mi-162",
    "sourceNumber": 3,
    "page": 120,
    "question": "Which assumptions impact a leveraged buyout the most?",
    "sampleAnswer": "The Purchase Price and Exit assumptions, usually based on EBITDA multiples, impact a\nleveraged buyout the most.\nA lower Purchase Multiple results in higher returns, and a higher Exit Multiple results in higher\nreturns.\nAfter those, the Debt used, based on a percentage of the Purchase Price or a multiple of the\ninitial EBITDA, makes the biggest impact.\nIf the deal performs well, more leverage will make the numbers even better, and vice versa if it\ndoes not perform well.\nNext, the company’s revenue growth, EBITDA margins, and cash flow profile also make an\nimpact because they influence the exit proceeds and the Debt repaid in the holding period.\nFinally, the interest rates, principal repayments, and other terms attached to the Debt may\nmake a difference, but they tend to be less significant than the other drivers."
  },
  {
    "id": "mi-163",
    "sourceNumber": 4,
    "page": 120,
    "question": "How do you select the Purchase Multiple and Exit Multiple in an LBO model?",
    "sampleAnswer": "Typically, you assume a share-price premium for public companies and check the implied\nPurchase Multiple against the valuation methodologies to ensure it’s reasonable.\nFor example, you might assume a 30% premium to the company’s share price of $10.00, which\nimplies an EBITDA multiple of 10x.\nFor private companies, you determine the Purchase Multiple via the standard valuation\nmethodologies (comparable companies, precedent transactions, and the DCF analysis).\nThe Exit Multiple is often close to the Purchase Multiple but could be higher or lower\ndepending on the company’s growth rates, margins, and ROIC upon exit.\nIn robust models, you always sensitize these assumptions and consider the outcomes across\ndifferent ranges."
  },
  {
    "id": "mi-164",
    "sourceNumber": 5,
    "page": 120,
    "question": "What is an \"ideal\" candidate for an LBO?",
    "sampleAnswer": "Almost any deal can work at the right price. Assuming the price is reasonable, ideal LBO\ncandidates should also:\n• Have stable and predictable cash flows (so they can repay Debt);\n• Have relatively modest requirements for CapEx and other ongoing re-investments;\n• Operate in an industry that is at least modestly fragmented (to enable add-on\nacquisitions);\n• Have opportunities to cut costs and increase margins;\n• Have strong management teams;\n• Have solid asset bases to use as collateral for Debt;\n• Have realistic exit paths, with returns driven by varied sources (e.g., EBITDA growth and\nDebt repayment rather than only multiple expansion)."
  },
  {
    "id": "mi-165",
    "sourceNumber": 6,
    "page": 121,
    "question": "Walk me through the Free Cash Flow calculation in an LBO model. How is it different from EBITDA, and why do we need both?",
    "sampleAnswer": "In an LBO, Free Cash Flow = Net Income + D&A +/- Change in Working Capital – CapEx.\nYou could also calculate it starting from EBITDA like this:\nFree Cash Flow = EBITDA – Net Interest Expense – Cash Taxes +/- Change in Working Capital –\nCapEx.\nFCF differs from EBITDA because EBITDA ignores Interest Income, Interest Expense, Taxes,\nWorking Capital, and Capital Expenditures – but all these items affect a company’s cash flow in\nreal life and, therefore, how much Debt it can repay.\nEBITDA is a quick proxy for cash flow from operations for the core business, ignoring capital\nstructure, but FCF is “the real thing” and factors in the capital structure because of the Net\nInterest Expense deduction."
  },
  {
    "id": "mi-166",
    "sourceNumber": 7,
    "page": 121,
    "question": "Explain how a company’s Free Cash Flow and the Debt principal it can repay in an LBO are related.",
    "sampleAnswer": "A company’s repayment of Debt principal is related to its Free Cash Flow, but it is not the same\nthing because all companies have Minimum Cash requirements and start with different\namounts of Cash in each period. The general formula is:\nCash Flow Available for Optional Debt Repayment = Beginning Cash + Free Cash Flow –\nMinimum Cash – Mandatory Debt Repayments.\nYou can ignore the last part if there are no required principal repayments."
  },
  {
    "id": "mi-167",
    "sourceNumber": 8,
    "page": 122,
    "question": "What are the different exit strategies in an LBO? Which one do most PE firms prefer?",
    "sampleAnswer": "The main strategies are M&A and IPO exits. In an M&A exit, the PE firm sells the company to\nanother PE firm or a normal company in the industry (called a “strategic”).\nIn an IPO exit, the PE firm takes the company public and sells off its stake gradually over time\n(selling the entire stake upfront in the IPO would be a huge negative signal).\nIn certain emerging and frontier markets, some PE firms also use Dividend Recapitalization\nstrategies to “exit” by having the company issue ever-increasing Dividends, but this works only\nif the company’s Dividend Yield reaches very high levels.\nPE firms almost always prefer M&A exits because they are clean and simple and result in\nimmediate proceeds. IPO exits take longer and carry more risk because of the need to sell the\nstake over several years."
  },
  {
    "id": "mi-168",
    "sourceNumber": 9,
    "page": 122,
    "question": "How could a private equity firm boost its returns in an LBO?",
    "sampleAnswer": "The main returns drivers are Multiple Expansion, EBITDA Growth, and Debt Paydown and Cash\nGeneration, so a PE firm could boost its returns by improving any of these.\nIn practice, this means:\n• Multiple Expansion – Reduce the Purchase Multiple (e.g., by negotiating a lower price)\nor increase the Exit Multiple (likely via higher ROIC or growth rates).\n• EBITDA Growth – Increase the company’s revenue growth rate or boost its EBITDA\nmargins by cutting expenses.\n• Debt Paydown and Cash Generation – Boost Free Cash Flow by reducing CapEx and\nWorking Capital requirements, cutting expenses, and aiming for higher growth. In some\ncases, using more initial Debt could improve returns from this source (e.g., if the\ncompany comfortably repays all the initial Debt currently)."
  },
  {
    "id": "mi-169",
    "sourceNumber": 10,
    "page": 123,
    "question": "How do you determine how much Debt a PE firm might use in an LBO and how many tranches there would be?",
    "sampleAnswer": "You look at recent, similar LBOs and use the median Debt / EBITDA levels from them as\nreferences; you could also look at highly leveraged public companies in the industry and check\ntheir Debt / EBITDA levels.\nFor example, if the median Debt / EBITDA for LBOs has been 5x, with 2x Term Loans and 3x\nSubordinated Notes, you might use these figures for your deal.\nThen, you would test these assumptions by projecting the company’s leverage and coverage\nratios (Debt / EBITDA and EBITDA / Interest) over time.\nIf they hold up reasonably well – e.g., the company’s interest coverage ratio always stays above\n2x – you might use the original numbers. If not, you would try different assumptions."
  },
  {
    "id": "mi-170",
    "sourceNumber": 11,
    "page": 123,
    "question": "Can you describe the different types of Debt a PE firm might use in a leveraged buyout?",
    "sampleAnswer": "Broadly speaking, Debt is split into Secured Debt and Unsecured Debt, which some people also\nlabel “Bank Debt” and “High-Yield Debt” or “Senior Debt” and “Junior Debt.”\nSecured Debt consists of Term Loans and Revolvers, is backed by collateral, tends to have\nlower, floating interest rates, may have amortization (required principal repayments), and uses\nmaintenance covenants such as limits on the company’s Debt / EBITDA and EBITDA / Interest.\nEarly principal repayment is allowed, maturity periods tend to be shorter (~5 years up to 10\nyears), and the investors tend to be more conservative.\nUnsecured Debt consists of Senior Notes, Subordinated Notes, and Mezzanine and is not\nbacked by collateral; interest rates tend to be higher and fixed rather than floating, there is no\namortization, and it uses incurrence covenants (the company is restricted from taking specific\nactions, such as selling certain assets).\nEarly repayment is not allowed, maturity periods tend to be longer (8-10+ years), and the\ninvestors tend to be hedge funds, merchant banks, and mezzanine funds."
  },
  {
    "id": "mi-171",
    "sourceNumber": 12,
    "page": 123,
    "question": "How do you use a Revolver in an LBO model?",
    "sampleAnswer": "You draw on the Revolver when the company doesn’t have enough cash flow to make its\nMandatory Debt Repayments while maintaining its Minimum Cash balance.\nFor example, let’s say the Beginning Cash is $50, the Mandatory Repayments are $100, the FCF\nis $75, and the Minimum Cash is $100.\nIn this case, Cash Flow Available for Debt Repayment = $50 + $75 – $100 – $100 = ($75).\nTherefore, the company must draw on its Revolver for $75 to boost its cash flow to make the\n$100 in Mandatory Repayments while maintaining the $100 in Minimum Cash.\nThe company will then pay interest and fees on this additional borrowing and repay the\nRevolver balance as soon as possible."
  },
  {
    "id": "mi-172",
    "sourceNumber": 13,
    "page": 124,
    "question": "How do you set up the Mandatory and Optional Debt Repayments in an LBO model?",
    "sampleAnswer": "Mandatory Principal Repayment for a tranche of Debt is based on the percentage that\namortizes each year, the initial amount of Debt raised, and the amount of Debt remaining.\nYou should take the minimum between Amortization % * Initial Amount and the Debt\nRemaining because you never want to repay more than the remaining balance (e.g., 20% *\n$100 million = $20 million per year, but if only $10 million is left, repay only $10 million).\nThe Optional Debt Repayment formula is similar, but it’s based on the minimum between the\nCash Flow Available right now and the Debt balance remaining right now.\nFor example, if, after Mandatory Repayments, the company has $100 million in cash flow and\n$250 million of Debt remaining, it would repay $100 million.\nBut if it had only $50 million remaining, it would repay the remaining $50 million."
  },
  {
    "id": "mi-173",
    "sourceNumber": 14,
    "page": 124,
    "question": "How do you use an LBO model to value a company, and why does it set the \"floor valuation\"?",
    "sampleAnswer": "You use it to value a company by setting a targeted IRR, such as 25%, and then using Goal Seek\nin Excel to determine the price the PE firm could pay to achieve that IRR.\nFor example, if the exit multiple is 11x, which means $1,000 in Exit Equity Proceeds for the PE\nfirm, Goal Seek might tell you that the firm could pay $328 in Investor Equity to achieve a 25%\nIRR over 5 years.\nAt a 50 / 50 Debt / Equity split, that means a Purchase Enterprise Value of $656 (ignoring fees).\nThis method produces a “floor valuation” because it tells you the maximum amount a PE firm\ncould pay to realize a minimum IRR. Other methodologies are not constrained in the same way."
  },
  {
    "id": "mi-174",
    "sourceNumber": 15,
    "page": 125,
    "question": "Would you rather achieve a high IRR or a high MoM multiple in a leveraged buyout?",
    "sampleAnswer": "It depends on the time frame. Over a short period, such as 6 months, a high IRR, such as 50%, is\nmeaningless because you’ve barely made money (~1.25x multiple).\nBut over a long period, such as 10 years, a high MoM multiple, such as 3x, means less because it\ncorresponds to a ~12% IRR.\nLimited Partners judge private equity funds by their IRRs, but they also don’t want the money\nto be returned to them too quickly.\nSo, the best answer is: “PE firms care more about IRR because that’s how they’re measured, but\nover short time frames, it’s better to earn a high multiple, and over longer time frames, it’s\nbetter to earn a high IRR. Also, if the PE firm has already exceeded its hurdle rate, it will focus\nmore on MoM multiples.”\nLBO Models – Calculations\nDetailed questions here are unlikely outside of private equity interviews, but you could still get\na few basic “LBO math” questions about how to approximate the IRR or multiple in a deal.\nThe basic rules of thumb are:\n• 2x Multiple in 3 Years = ~25% IRR\n• 2x Multiple in 5 Years = ~15% IRR\n• 3x Multiple in 3 Years = ~45% IRR\n• 3x Multiple in 5 Years = ~25% IRR\nBe prepared to use these rules to solve for the purchase multiple, exit multiple, initial Debt\nused, Debt repaid over the holding period, or the initial or final EBITDA. You can always solve\nfor the unknown variable if they give you all the required information."
  },
  {
    "id": "mi-175",
    "sourceNumber": 1,
    "page": 126,
    "question": "A PE firm acquires a $100 million EBITDA company for a 10x purchase multiple and funds the deal with 60% Debt.",
    "sampleAnswer": "The company’s EBITDA grows to $150 million by Year 5, but the exit multiple drops to 9x. The\ncompany repays $250 million of Debt in this time and generates no extra Cash.\nWhat’s the IRR?\nInitially, the PE firm uses 40% Equity, which means $100 million * 10x * 40% = $400 million.\nThe Exit Enterprise Value = $150 million * 9x = $1,350 million (Mental Math: $150 million * 10x\n= $1.5 billion and subtract $150 million).\nThe initial Debt amount was $600 million, and the company repaid $250 million, so $350 million\nof Debt remains upon exit.\nThe Equity Proceeds to the PE firm are $1,350 million – $350 million = $1 billion.\n$1 billion / $400 million = 2.5x. Since a 2x multiple over 5 years is 15% and 3x is 25%, this IRR is\napproximately 20%."
  },
  {
    "id": "mi-176",
    "sourceNumber": 2,
    "page": 126,
    "question": "A PE firm acquires a business for a 12x EBITDA multiple, using 5x Debt / EBITDA, and plans to sell it in 5 years. The company’s initial EBITDA is $100, which grows to $200 by Year 5.",
    "sampleAnswer": "If there’s no Debt repayment and no additional Cash generation, what exit multiple do we\nneed for a 25% IRR?\nInitially, we buy the company for an Enterprise Value of $1,200 using Debt of $500 and Investor\nEquity of $700.\nTo realize a 25% IRR over 5 years, we need to triple our money by earning $2,100 in proceeds at\nthe end.\nNo Debt is repaid, so we need to sell the company for an Exit Enterprise Value of $2,600.\nTherefore, if EBITDA grows to $200 by Year 5, we need an exit multiple of $2,600 / $200 = 13x."
  },
  {
    "id": "mi-177",
    "sourceNumber": 3,
    "page": 126,
    "question": "Now assume the company repays 75% of the initial Debt balance over 5 years. What exit multiple do we need for a 25% 5-year IRR?",
    "sampleAnswer": "75% of $500 in Debt is $375, which means that $125 in Debt remains at the end.\nWe still contributed $700 in Investor Equity initially and, therefore, need to earn back $2,100 in\nproceeds at the end.\nSo, we must sell the company for an Exit Enterprise Value of $2,100 + $125 = $2,225.\nAs a result, we need an exit multiple of $2,225 / $200 = 11.1x (you can round this to 11x since\n$2,200 / $200 = 11x)."
  },
  {
    "id": "mi-178",
    "sourceNumber": 4,
    "page": 127,
    "question": "You’re reviewing the output of an LBO model that a co-worker built. In the model, the 5- year IRR is 20%, and the company’s EBITDA grows from $100 to $150 over the holding period.",
    "sampleAnswer": "The EBITDA purchase multiple is 10x, and the exit multiple is 11x. If the PE firm uses 5x Debt /\nEBITDA in the initial deal, how much Debt does the company repay over time?\nA 20% IRR over 5 years means the MoM multiple is approximately 2.5x.\nThe Purchase TEV is $100 * 10x = $1,000, and $100 * 5x = $500 of Debt is used, so the Investor\nEquity is $500.\nTherefore, the PE firm must earn back $500 * 2.5x = $1,250 in exit equity proceeds.\nThe Exit TEV is $150 * 11 = $150 * 10 + $150 = $1,500 + $150 = $1,650, which means that $400\nof Net Debt remains at the end. Assuming Cash stays the same, the company must repay $100\nof the initial Debt balance over this period."
  },
  {
    "id": "mi-179",
    "sourceNumber": 5,
    "page": 128,
    "question": "A PE firm acquires a business for a 10x EBITDA multiple, using 6x Debt / EBITDA, and plans to sell it in 5 years. The company’s initial EBITDA is $100, which grows to $150 by Year 5.",
    "sampleAnswer": "Approximately $300 of Debt is also repaid during the holding period, while Cash stays the\nsame.\nWhat exit multiple does the firm need for a 25% IRR?\nInitially, we buy the company for an Enterprise Value of $1,000 using Debt of $600 and Investor\nEquity of $400.\nTo realize a 25% IRR over 5 years, we need to triple our money by earning $1,200 in proceeds at\nthe end.\nOf the $600 in initial Debt, $300 is repaid, so the ending Debt balance is $300. Ignoring Cash for\nsimplicity, the Exit Enterprise Value must be $1,200 + $300 = $1,500.\nTherefore, if EBITDA grows to $150 by Year 5, we need an exit multiple of $1,500 / $150 = 10x,\nwhich is the same as the purchase multiple.\nIndustry and Group-Specific Technical Questions\nThese questions are important primarily if you’re interviewing with one of these groups. Some\ngroups, such as FIG, are extremely technical, which explains why some sections here are much\nlonger than others.\nFor all these questions, we strongly recommend reading the relevant industry group primers\nand product group primers on Mergers & Inquisitions.\nThe M&I articles have descriptions of each vertical, overviews of the technical differences, and\nlinks to real pitch books and valuations from banks.\nConsumer/Retail\nThis section is short because consumer/retail\ncompanies are very standard in terms of\naccounting and valuation.\nMost of the differences relate to the key\ndrivers, a few industry-specific metrics, and\nan understanding of the main verticals."
  },
  {
    "id": "mi-180",
    "sourceNumber": 1,
    "page": 129,
    "question": "What are the main verticals within consumer/retail, and how would you expect valuation to differ in each one?",
    "sampleAnswer": "The main verticals are consumer staples (required items for everyday living) and consumer\ndiscretionary (“optional” items like cars, appliances, fashion, and restaurants). Some also\nconsider pure-play retailers that distribute but do not produce to be another segment.\nConsumer discretionary companies tend to have higher Betas because they perform well when\nthe economy is doing well but poorly during recessions; consumer staples are the opposite\nbecause people always buy products such as toothpaste and toilet paper even if the economy is\npoor.\nSo, consumer discretionary companies tend to trade at higher multiples than consumer staples\nin good economies and lower multiples in poor economies; retail varies and depends on the\nspecific products sold."
  },
  {
    "id": "mi-181",
    "sourceNumber": 2,
    "page": 129,
    "question": "Would you expect a franchise restaurant or a restaurant that directly owns its locations to trade at higher multiples? Why?",
    "sampleAnswer": "Generally, franchise restaurants trade at higher multiples because they are capital-light\nbusinesses that do not require much CapEx to grow; they license their brand to individuals who\nopen and operate locations in exchange for a franchise fee.\nThis business model tends to produce high-margin, predictable businesses, which investors like\n(though a poorly managed franchise is also risky because a poor reputation could sink it)."
  },
  {
    "id": "mi-182",
    "sourceNumber": 3,
    "page": 129,
    "question": "Let’s say you’re building a 3-statement model for a retailer. What are some of the key drivers in your model?",
    "sampleAnswer": "Key drivers include the # of stores, the sales per store, the same-store sales, the total number\nof square feet/meters, and the sales per square foot/meter.\nYou might look at Gross Margins on a product or segment basis, and the Contribution Margin\n(i.e., the Operating Margin in different segments or geographies) is also important.\nSeparating Maintenance and Growth CapEx is also essential because it costs significantly more\nto open new locations than to maintain existing ones."
  },
  {
    "id": "mi-183",
    "sourceNumber": 4,
    "page": 130,
    "question": "What is the “4-Wall EBITDA” for a retailer, and how does it differ from standard EBITDA?",
    "sampleAnswer": "“4-Wall EBITDA” is the asset-level EBITDA for the company. In other words, it starts with\nrevenue from all stores, subtracts COGS, and subtracts store-related operating expenses, such\nas the rent and the employee salaries and benefits required to operate all the stores.\nIt excludes corporate overhead, such as salaries and benefits for the accounting, IT, and HR\nteams in the corporate headquarters; some companies might also exclude store opening and\nclosing costs, but this is questionable.\nNormal EBITDA does not distinguish between asset-level and corporate-level expenses."
  },
  {
    "id": "mi-184",
    "sourceNumber": 5,
    "page": 130,
    "question": "Suppose you are creating a set of comparable public companies in the consumer/retail sector. In which cases are the EBITDAR metric and its corresponding valuation multiple most important?",
    "sampleAnswer": "Under IFRS, EBITDAR is irrelevant because the standard EBITDA metric adds back the entire\nlease expense from both Operating and Finance Leases; it matters only if you include U.S.-\nbased companies in the set. In this case, EBITDAR is essential for normalizing and comparing\ncompanies that follow different accounting systems.\nUnder U.S. GAAP, EBITDAR and the (TEV + Operating Lease Liabilities) / EBITDAR metric are\nmost important when the companies in the set have very different mixes of Operating and\nFinance Leases (e.g., one company is 90% Operating Leases, but another is only 10%).\nEBITDAR normalizes these differences by adding back or excluding the full expense for both\nOperating and Finance Leases.\nDebt Capital Markets (DCM) & Leveraged Finance (LevFin)\nThis section does not re-explain the\nbasics, such as what the DCM and LevFin\ngroups do; all those points are covered\nin the Understanding Banking section.\n(We recommend reviewing the DCM and\nLevFin articles on M&I for more.)\nThese questions here focus on credit\nanalysis, bond math, and debt vs. equity\nfinancing decisions for companies.\nYou don’t need to know the advanced\ndetails, but you should understand the basics, such as the different yields and bond valuation."
  },
  {
    "id": "mi-185",
    "sourceNumber": 1,
    "page": 131,
    "question": "Why might a company issue Debt rather than Equity?",
    "sampleAnswer": "A company might do this if Debt is cheaper than Equity, if it fits the typical profile of a Debt\nissuer (a mature/value-oriented company), and if it can issue additional Debt because its credit\nstats are in acceptable ranges.\nMost companies have targeted Debt / EBITDA and EBITDA / Interest levels, and lenders might\nrequire them to stay within certain ranges if they issue additional Debt.\nIf the company cannot comply with these ratios, if Equity is cheaper than Debt (rare but\npossible for growth companies trading at high multiples), or if it doesn’t fit the profile of a\ntypical borrower, it might issue Equity instead."
  },
  {
    "id": "mi-186",
    "sourceNumber": 2,
    "page": 131,
    "question": "Walk me through a Debt vs. Equity analysis to recommend the best financing for a company.",
    "sampleAnswer": "First, assess the company’s business profile (growth vs. value/mature), its After-Tax Costs of\nDebt and Equity, and how its WACC would change with additional Debt or Equity.\nIf it’s more of a “growth” company or Equity is cheaper, recommend an issuance such as a\nFollow-On Offering for a public company.\nIf Debt is cheaper or it’s more of a “value” company, create projections with the anticipated\nDebt terms, including the covenants, and see if the company could comply with these\nrequirements, even in downside cases (e.g., lower-than-expected growth and margins).\nIf the company can comply with targets for metrics such as Debt / EBITDA even with poor\nfinancial performance, issue Debt; if not, consider a mix of Equity and Debt or a Convertible\nBond, depending on the specific problems (a Convertible is best if the cash interest costs on\ntraditional Debt are too high)."
  },
  {
    "id": "mi-187",
    "sourceNumber": 3,
    "page": 132,
    "question": "You’re considering 3 companies that want to raise capital: A utility company, a railroad company, and a branded pharmaceutical company. Which company is most appropriate for 100% Equity, which is most appropriate for 50% Debt / 50% Equity, and which is most appropriate for 100% Debt?",
    "sampleAnswer": "Think about each company's growth vs. value profile and remember that lenders’ #1 priority is\nto avoid losing money.\nThe least risky company is the utility firm since consumers always need electricity, heating, and\nwater, and many firms have local monopolies. Utility companies are also more predictable and\noffer less growth potential than the others on this list. Therefore, this company is the best\ncandidate for 100% Debt.\nThe railroad company is riskier than the utility company but less risky than the branded\npharmaceutical company because it’s subject to market forces, and its freight pricing and\nvolume can shift dramatically based on the economy.\nHowever, it’s still relatively predictable because you can estimate business declines based on\npast economic cycles, and it has significant collateral in the form of its factories and physical\nrailroad assets. So, the railroad company is the best candidate for 50% Debt / 50% Equity.\nThe branded pharmaceutical company is incredibly risky because its products are protected by\npatents, which expire over time, and it constantly needs to acquire or invent new drugs to\nreplace older ones that have lost patent protection.\nOn the other hand, there’s also huge potential upside if the company discovers a drug that\ncures cancer. So, this company is the best candidate for 100% Equity."
  },
  {
    "id": "mi-188",
    "sourceNumber": 4,
    "page": 133,
    "question": "How might you decide whether a company should raise Debt via Term Loans or Subordinated Notes?",
    "sampleAnswer": "You should start with the cheapest form of financing, which means Term Loans. You would\ncreate different operational scenarios for the company, project its cash flows, and evaluate\nhow well it can comply with the maintenance covenants (e.g., Debt / EBITDA cannot exceed 5x)\nand other restrictions on the Term Loans in the downside cases.\nIf it complies with these restrictions, recommend the Term Loans. If not, consider the\nSubordinated Notes next since they lack the same restrictions as the Term Loans, albeit at\nhigher interest rates.\nIf the company’s credit stats and ratios decline too much in the downside cases (e.g., its EBITDA\n/ Interest falls to 1.5x when the company doesn’t want to go below 2.0x) or it has trouble\npaying for the cash interest on these Subordinated Notes, you might have to consider a mix of\nTerm Loans and Subordinated Notes.\nIf that still doesn’t work, you might recommend some percentage of Equity instead.\nFinally, you should also consider the company’s qualitative profile: A pre-revenue biotech\nstartup can’t issue Term Loans or Subordinated Notes, but a mature industrial company could."
  },
  {
    "id": "mi-189",
    "sourceNumber": 5,
    "page": 133,
    "question": "You are analyzing a company whose Debt / EBITDA stays below the maximum of 4.0x and whose EBITDA / Interest stays above the minimum of 2.0x, but whose Debt Service Coverage Ratio (DSCR) falls below the minimum of 1.5x in the more pessimistic cases. Why might this happen, and how could the company improve its numbers?",
    "sampleAnswer": "Definitions of the DSCR vary, but it’s usually defined as (FCF Excluding Interest and Other Fixed\nCharges) / (Interest and Other Fixed Charges) or something close to that.\nSo, it includes more items than EBITDA-based metrics and might reflect the lease expense in\naddition to Net Interest.\nHealthy leverage and coverage ratios with an unhealthy DSCR tend to happen if the company’s\nFCF Conversion (FCF / EBITDA) is low, which could be a result of high CapEx, a negative Change\nin Working Capital, or other items in Cash Flow from Operations that reduce its FCF.\nIt might also happen if the company can easily cover its normal interest payments but has other\nfixed charges, such as lease payments, that consume significant portions of its cash flow.\nTo improve its DSCR, the company could reduce its CapEx, improve its Working Capital\nmanagement, reduce its lease obligations, or refinance and negotiate for Debt with reduced\ninterest rates."
  },
  {
    "id": "mi-190",
    "sourceNumber": 6,
    "page": 133,
    "question": "A company wants to reduce its cash interest expense on Debt by negotiating with lenders to get a lower coupon rate. However, the lenders want to maintain or increase their yield. What are the company’s options?",
    "sampleAnswer": "Assuming this is relatively senior Debt, the main options are to offer the lenders something else that boosts their yield in exchange for a lower coupon rate. For example, the company could issue the new Debt with an Original Issue Discount (OID) that effectively gives lenders an upfront discount; they could also offer generous call premiums or\nMake-Whole Premiums that result in penalty fees in an early repayment.\nIf this is more of a stressed, distressed, or restructuring scenario, other options to boost the\nyield for lenders might include equity options, such as warrants attached to the Debt or\nsomething like a Debt-for-Equity swap."
  },
  {
    "id": "mi-191",
    "sourceNumber": 7,
    "page": 134,
    "question": "What would cause a company's credit rating to change?",
    "sampleAnswer": "A company’s credit rating might change if its credit stats, such as Debt / EBITDA or EBITDA /\nInterest, change significantly or its qualitative risk factors change.\nFor example, if peer companies with “BB+” credit ratings have Debt / EBITDA between 4x and\n5x, and the Debt / EBITDA of the company you’re analyzing suddenly jumps to 6x, rating\nagencies will likely downgrade the company.\nBut even if a company’s financial stats stay the same, its credit rating might decline if its\nindustry experiences a downturn, a major new competitor enters, or its growth outlook\ndeclines (for example)."
  },
  {
    "id": "mi-192",
    "sourceNumber": 8,
    "page": 134,
    "question": "Explain the difference between a bond’s Coupon Rate, Current Yield, and Yield to Maturity (YTM).",
    "sampleAnswer": "The Coupon Rate represents the fixed interest the bond pays based on its par value. If the\nCoupon Rate is 6% on a $1,000 par value bond, the bond pays $60 in annual interest.\nThe Current Yield equals the bond's Annual Coupon Payment / Current Market Price. So, if this\nbond currently trades at $1,080, the Current Yield is $60 / $1,080 = ~5.6%.\nThe Yield to Maturity is the internal rate of return (IRR) on a bond, with its current market price\nused as the upfront purchase price.\nThe YTM assumes that you hold the bond until maturity, the company makes all interest and\nprincipal payments in full on the scheduled dates, and that you reinvest the cash flows you earn\nfrom the bond at the same rate of return.\nTo calculate the YTM, we need the bond’s maturity and the Discount Rate. Without that\ninformation, we can only say that the YTM is less than the Current Yield of ~5.6% because this\nbond trades at a premium to par value."
  },
  {
    "id": "mi-193",
    "sourceNumber": 9,
    "page": 135,
    "question": "How do you value a bond?",
    "sampleAnswer": "The same way you value any other asset: You discount its future cash flows (interest + principal\nrepayments) to their Present Values based on an appropriate Discount Rate and add them up.\nWith bonds, the “appropriate Discount Rate” is linked to the prevailing yields on similar bonds.\nIn other words, if investors bought similar companies’ bonds on the secondary market today\nand held them to maturity, what would their annualized returns be?\nIf a company issues a 5% fixed coupon rate bond, but similar bonds have 6% yields when held\nto maturity, the Discount Rate is 6%."
  },
  {
    "id": "mi-194",
    "sourceNumber": 10,
    "page": 135,
    "question": "You purchase a $100 bond at a 5% discount to par value. The bond's coupon rate is 8%, and it matures in 5 years. What is the bond's approximate YTM?",
    "sampleAnswer": "You can approximate the YTM with:\n(Annual Interest + (Redemption Value – Bond Price) / # Years to Maturity) / ((Redemption Value\n+ Bond Price) / 2)\nThe intuition is that you take the interest earned each year, add the annualized return from the\nchange in the bond’s price, and divide by the bond’s “average price” over the period.\nThe annual interest is $8, the redemption value is 100 (since the YTM assumes full repayment),\nthe bond price is 95, and there are 5 years to maturity, so:\nYTM = (8 + (100 – 95) / 5) / ((100 + 95) / 2)\nYTM = (8 + 1) / 97.5 = 9.2%\nYou could say “Just above 9%” or “between 9% and 10%” (mental math: 9 / 90 = 10%, and 9 /\n100 = 9%, so 9 / 97.5 should be below 10% and closer to 9%).\nYou earn 8% each year from the interest and “amortize” the 5% discount over the 5-year\nmaturity, so 8% + ~1% = ~9%."
  },
  {
    "id": "mi-195",
    "sourceNumber": 11,
    "page": 135,
    "question": "Will a 10% or 5% coupon rate bond be more sensitive to changes in the Discount Rate?",
    "sampleAnswer": "The 5% coupon rate bond will be more sensitive because bondholders receive less in interest\npayments during the holding period, so they depend more on the final principal repayment at\nthe end – and the PV of that final repayment is affected only by the Discount Rate.\nA higher percentage of the total cash flows on a 10% bond comes from the interest paid during\nthe holding period, and the PV of each interest payment is affected by both the coupon rate\nand the Discount Rate."
  },
  {
    "id": "mi-196",
    "sourceNumber": 12,
    "page": 136,
    "question": "Intuitively, what do a bond’s Duration and Convexity mean, and how do you use them?",
    "sampleAnswer": "Duration is the first derivative of the bond’s price with respect to its YTM, and Convexity is the\nsecond derivative of the bond’s price with respect to its YTM.\nThey both measure the bond price’s sensitivity to changes in the Discount Rate, allowing us to\npredict how a bond’s price will change when the Discount Rate changes by small amounts.\nYou can also think of Duration as: “How long does it take for the market price of a bond to be\nrepaid with its internal cash flows (on a weighted-average year basis)?”\nFor investors, these metrics measure interest-rate risk; higher numbers mean the prices of\ntheir bonds will change by greater percentages when overall interest rates change."
  },
  {
    "id": "mi-197",
    "sourceNumber": 13,
    "page": 136,
    "question": "Interest rates have fallen, and prevailing bond yields are now down by ~2% compared to when a company first issued an 8%, 7-year bond.",
    "sampleAnswer": "This company wants to refinance and issue a new bond to the same investors with a 6%\ncoupon rate and a 10-year maturity.\nWhy might it not be able to do this?\nThe problem is the Duration, which measures interest-rate risk. We can glance at these\nnumbers and tell the Duration will be significantly higher for the 10-year bond with a lower\ncoupon rate than for the 7-year bond with a higher coupon rate.\nEven if overall interest rates fall, bond investors want to maintain their interest-rate risk in a\nsimilar range, and they manage their portfolios based on metrics like Duration.\nThis company would likely have to offer a shorter maturity or boost the bond’s YTM via other\nmethods (such as an issuance discount or repayment penalty fee) to compensate investors for\nthis higher Duration."
  },
  {
    "id": "mi-198",
    "sourceNumber": 14,
    "page": 137,
    "question": "What is the Yield to Worst (YTW), and how is it related to the Yield to Maturity (YTM)?",
    "sampleAnswer": "The Yield to Worst is the minimum between the bond’s Yield to Call (YTC) on each possible call\ndate and its Yield to Maturity (YTM).\nThe “Yield to Call” measures a bond’s IRR if an investor buys it at its current market price and\nholds it until the company “calls it” by repaying it early, usually at a premium.\nThe YTW helps investors evaluate the worst-case outcome for the bond’s yield, assuming the\ncompany still repays it in full.\nIf the bond trades at a discount, the YTW = YTM; if the bond trades at a premium to par value,\nthe YTW <= YTM.\nThe intuition is that for discount bonds, investors get a higher yield if the bond is repaid early\nbecause the discount is spread out over fewer years, so a bond held to maturity is the worst\noutcome. For premium bonds, early repayment often results in a lower yield because the\npenalty fees (call premiums) may not offset the premium paid."
  },
  {
    "id": "mi-199",
    "sourceNumber": 15,
    "page": 138,
    "question": "What are the most important statistics in an analysis of Comparable Debt Issuances?",
    "sampleAnswer": "You typically screen the issuances by industry, geography, size, time, and credit rating (e.g., only\nthe bonds of investment-grade media companies based in the U.S. over the past 4 years, worth\nat least $100 million).\nYou look at statistics such as the median coupon rate, offering amount, bond price, maturity,\nYTW, YTM, and the leverage and coverage ratios to determine the proper terms to offer on a\npotential issuance for the company you are advising.\nFor Convertible Bonds, you also look at the median Conversion Ratio and Conversion Premium\nto ensure that your offering is in-line with similar, recent issuances.\nDistressed & Restructuring\nInterviews for Restructuring, Special\nSituations, and Distressed M&A groups\ntend to be quite technical, but you will still\nget the standard accounting, valuation, and\nfinancial modeling questions.\nCertain questions could get very technical,\nbut we take a high-level view here and\nfocus on the most common advisory\nscenarios and some basic “Restructuring\nmath.”\nMake sure you also review the M&I articles on restructuring IB, distressed private equity, and\ndistressed debt hedge funds for more."
  },
  {
    "id": "mi-200",
    "sourceNumber": 1,
    "page": 138,
    "question": "Why Restructuring?",
    "sampleAnswer": "You like how it involves many different skill sets: M&A, valuation, credit analysis, and\nunderstanding the legal code. Also, there’s a wide variety of possible outcomes to each deal,\nand the technical work is more challenging than in other groups where the outcome is binary\n(e.g., the company sells itself or does not sell itself in sell-side M&A deals).\nYou also tend to work on mostly live deals rather than pitches because each engagement is\nintense and requires more back-and-forth negotiating than other deal types.\nFinally, you like how Restructuring lets you understand different perspectives on companies\nsince you advise both debtors and creditors."
  },
  {
    "id": "mi-201",
    "sourceNumber": 2,
    "page": 138,
    "question": "What are the two different “sides” of a Restructuring deal? Do you know which one we usually advise?",
    "sampleAnswer": "Bankers can advise either the debtor (the company itself) or the creditors (anyone who has lent\nthe company money). It’s like sell-side vs. buy-side M&A – in one, you’re advising the company\non a sale or resolution of its troubles, and in the other, you’re advising the buyer or lenders that\nare trying to recover what they can from the company.\nMost banks with Restructuring teams advise both sides, but some favor one or the other (you\nshould research this with a quick search of the bank’s recent deals before interviewing)."
  },
  {
    "id": "mi-202",
    "sourceNumber": 3,
    "page": 139,
    "question": "How are stressed, distressed, and bankrupt companies different?",
    "sampleAnswer": "• Stressed – The company can still pay interest on its debt, but it may have trouble with\nan upcoming maturity or be heading toward a cash crunch.\n• Distressed – The company has already defaulted by missing an interest payment or\nmaturity or violating a covenant, such as a minimum EBITDA / Interest or maximum\nDebt / EBITDA requirement.\n• Bankrupt – The company has already entered a Chapter 7 (liquidation) or Chapter 11\n(reorganization) process and wants to achieve the best possible outcome."
  },
  {
    "id": "mi-203",
    "sourceNumber": 4,
    "page": 139,
    "question": "OK, so what factors might cause a company to become “stressed” and then “distressed?”",
    "sampleAnswer": "A company could become stressed due to either macro or micro factors. Macro factors might include an industry downturn or a shock such as a war, energy crisis, or pandemic.\nMicro factors could include poor management decisions, such as expanding into the wrong\nmarkets, taking on too much Debt, or making too many value-destructive acquisitions.\nTo go from stressed to distressed, a specific catalyst is required. This is usually something like a\nmissed interest or principal repayment on Debt, a violated covenant, a credit rating downgrade,\nor the Cash balance falling below a minimum level."
  },
  {
    "id": "mi-204",
    "sourceNumber": 5,
    "page": 139,
    "question": "Suppose that you are advising a distressed company. What are its main options, and what are the advantages and disadvantages of each one?",
    "sampleAnswer": "First, the company could attempt to refinance by raising additional debt or equity, which is less\ndisruptive than other options but also very difficult to execute because investors normally stay\naway from companies approaching bankruptcy.\nSecond, the company could sell, either in parts via a liquidation or as an entire entity; this has a\ndecent chance of repaying at least some creditors, but the company’s sale value is likely to be\nquite low.\nThird, the company could restructure by renegotiating the terms of its debt with the lenders or\ndoing a debt-for-equity swap; this might resolve its problems without 3rd party involvement,\nbut it can be difficult to get all parties to compromise.\nFinally, the company could declare bankruptcy, which means a significant business disruption\nand a likely total loss for the common shareholders. But it might also be the best way to\nnegotiate with the lenders and raise additional funding."
  },
  {
    "id": "mi-205",
    "sourceNumber": 6,
    "page": 140,
    "question": "What’s the difference between a Chapter 7 and Chapter 11 bankruptcy under the U.S. tax and legal code?",
    "sampleAnswer": "A Chapter 7 bankruptcy is also known as a “liquidation bankruptcy.” The company is too far\npast the point of reorganization and must instead sell off its assets and repay creditors. A\ntrustee ensures that all this happens according to plan.\nChapter 11 is more of a “reorganization” – the company survives, renegotiates the terms of its\ndebt, or does a debt-for-equity swap so that the creditors are repaid or receive something of\nvalue in the transaction."
  },
  {
    "id": "mi-206",
    "sourceNumber": 7,
    "page": 140,
    "question": "What is debtor-in-possession (DIP) financing, and how do distressed companies use it?",
    "sampleAnswer": "It is money borrowed by the distressed company that has repayment priority over all other\nexisting secured/unsecured debt, equity, and other claims and is considered “safe” by lenders\nbecause it is subject to stricter terms than other financing.\nTheoretically, DIP financing makes it easier for distressed companies to emerge from\nbankruptcy. However, some argue that it could also hurt companies, as some DIP lending firms\nare known for trying to stage company takeovers at big discounts due to the significant\ncollateral they own.\nSometimes, companies file for Chapter 11 bankruptcy specifically to gain access to DIP\nfinancing."
  },
  {
    "id": "mi-207",
    "sourceNumber": 8,
    "page": 140,
    "question": "What is a Section 363 asset sale, and why might a distressed company pursue it?",
    "sampleAnswer": "A Section 363 asset sale is a faster version of a normal asset sale process that gives the debtor\n(the company) more control over the process than the same type of asset sale in a Chapter 7\nbankruptcy.\nFirst, the debtor picks the highest bidder for its assets, and this entity becomes the “stalking\nhorse bidder,” with its offer acting as the base price in the auction process (in exchange for\nbreakup fees, expense reimbursements, and other perks).\nNext, the debtor wins court approval for an auction process and tries to maximize the price\nreceived for each asset; the bankruptcy court then approves the process and sale of each asset.\nThe process benefits debtors by getting them better prices via the competitive auction process,\nand it benefits creditors by giving them the chance to object to the sale of certain assets."
  },
  {
    "id": "mi-208",
    "sourceNumber": 9,
    "page": 141,
    "question": "What is a 13-week cash flow model, and how do you use it for a distressed company?",
    "sampleAnswer": "A 13-week cash flow model is a combined Income Statement and Cash Flow Statement forecast\nwith more granular detail in terms of both time (weeks rather than quarters) and line items\nsince it shows cash receipts and disbursements from different sources in more detail than the\nnormal financial statements contain.\nIt’s split into operating cash receipts (revenue), operating cash disbursements (OpEx), and non-\noperating disbursements (interest, principal repayments, restructuring fees, etc.), and it tracks\nthe company’s beginning and ending cash each week to determine when it will have to draw on\nits DIP financing or Revolver to fund its operations.\nThis forecast is almost always required for lenders to extend DIP financing."
  },
  {
    "id": "mi-209",
    "sourceNumber": 10,
    "page": 141,
    "question": "How does valuation change for a distressed company?",
    "sampleAnswer": "You use the standard methodologies most of the time (comparable public companies,\nprecedent transactions, and the DCF), but you often focus on the lower end of the range of\nmultiples and make numerous adjustments to factor in possible issues such as inflated COGS\nand Working Capital levels.\nThe DCF might reflect some type of turnaround over the long term, with a wide variety of\nscenarios built in, and you focus on Enterprise Value-based multiples because distressed\ncompanies often have extremely low Equity Values.\nYou could also use a liquidation valuation (see below) to value a company under the worst-\ncase scenario (a wind-down and sale of its assets) and determine its “floor value.”\nFinally, sometimes you value companies on an assets-only and a current liabilities-assumed\nbasis because you may need to make significant adjustments to the liabilities."
  },
  {
    "id": "mi-210",
    "sourceNumber": 11,
    "page": 142,
    "question": "Walk me through a typical liquidation valuation.",
    "sampleAnswer": "First, you assign a “recovery percentage” to each Asset and multiply its book value by the\ncorresponding percentage. Cash is almost always set to 100%, while AR, Inventory, and Other\nAssets could range from 50% to 90%, depending on the specific company and deal.\nNet PP&E could be worth almost anything, depending on whether it’s equipment/factories or\nland/buildings; it may require a mini-DCF to value properly.\nGoodwill is set to 0%, and Other Intangibles often get a substantial discount (e.g., 50%+).\nOn the Liabilities side, you multiply almost everything by 100% (perhaps with minor\nadjustments to reflect points like penalty fees, accrued interest, etc.).\nThen, you take the adjusted Assets and subtract the adjusted Liabilities to get the Implied\nEquity Value. Divide it by the diluted share count to get the company’s Implied Price per Share."
  },
  {
    "id": "mi-211",
    "sourceNumber": 12,
    "page": 142,
    "question": "A distressed company with $100 of EBITDA sells for 3x EBITDA. It has Cash of $50, a $100 Revolver, a $300 Term Loan, and $200 in Subordinated Notes, with no other Liabilities. What are the recovery percentages for each Debt tranche?",
    "sampleAnswer": "The company’s Exit TEV is 3x * $100 = $300, and it has $50 of Cash, so $350 is available for Debt\nrepayment.\nThese proceeds can fully repay the Revolver (the most senior debt), and the company is now\ndown to $250 in remaining proceeds.\nThese repay $250 / $300 or ~83% of the Term Loan, and nothing is left for the Subordinated\nNotes.\nTherefore, the Revolver recovery is 100%, the Term Loan recovery is ~83%, and the\nSubordinated Note recovery is 0%."
  },
  {
    "id": "mi-212",
    "sourceNumber": 13,
    "page": 143,
    "question": "A holding company (“Hold Co.”) has $100 of Debt at the holding company level and owns 100% of 3 companies: Company A: Enterprise Value of $100 and Debt of $20. Company B: Enterprise Value of $50 and Debt of $100. Company C: Enterprise Value of $100 and Debt of $50. What are the Recovery percentages for Companies A, B, and C and Hold Co. in a liquidation?",
    "sampleAnswer": "Company A’s Recovery is 100% because proceeds of $100 can easily repay $20 of Debt in a sale.\nCompany B’s Recovery is 50% because $50 of proceeds can only repay 50% of the Debt.\nCompany C’s Recovery is 100% because proceeds of $100 can repay the full $50 of Debt.\nIf Hold Co owns 100% of each company, Hold Co's Enterprise Value should equal the sum of\ntheir individual TEVs:\n$100 + $50 + $100 = $250\nYou must also consolidate all the Debt because consolidation accounting applies when the\nparent’s ownership exceeds 50%.\nSo, the consolidated Debt is $100 + $20 + $100 + $50 = $270.\nTherefore, Hold Co's recovery is $250 / $270 = ~93%.\nThe intuition is that this ~93% represents the approximate \"TEV-weighted\" recovery for all 3\ncompanies (not an exact match, but close):\n=(50 / 250) * 50% + (100 / 250) * 100% + (100 / 250) * 100% = ~90%"
  },
  {
    "id": "mi-213",
    "sourceNumber": 14,
    "page": 143,
    "question": "A distressed company with $50 of EBITDA has $150 in Secured Senior Notes and $100 in Unsecured Senior Notes. Peer companies that are not currently distressed trade at 5x EBITDA. What would you expect each Debt tranche to trade at?",
    "sampleAnswer": "If this distressed company were healthy, its Enterprise Value would be 5x * $50 = $250, enough\nto cover both Debt tranches fully. So, they should trade at face value (i.e., no discount).\nHowever, this company is distressed, which means it trades at a lower multiple, and if it sells, it\nwill sell for a lower multiple.\nFor example, if it trades at 3x EBITDA, the Secured Senior Notes should trade at 100% of par\nvalue, while the Unsecured Senior Notes should be worth 0% because they will not be repaid.\nIn reality, however, the Secured Senior Notes might trade at slightly less than 100% of par value\nto reflect the risk of selling for a lower multiple, and the Unsecured Notes might trade at\nslightly more than 0% to reflect the chance of a slightly higher multiple or company turnaround."
  },
  {
    "id": "mi-214",
    "sourceNumber": 15,
    "page": 144,
    "question": "A distressed company’s Debt is currently trading at a 50% discount to par value with a cash coupon rate of 10% and a 5-year maturity.",
    "sampleAnswer": "Because of this discount, several investors just bought the issuance at a very high YTM, which\nassumes full interest payments and full repayment upon maturity.\nThe company is at risk of being unable to pay for the interest on this issuance, so it wants to\nrestructure via a Debt-for-Equity swap based on a solid turnaround plan. How might you\nstructure such a swap?\nStart by estimating the yield to maturity (YTM) or yield to exit the investors would get if the\ncompany repaid this issuance upon maturity.\nAs a simple approximation, if it’s a $100 par value bond, the YTM is ($10 + ($100 – $50) / 5) /\n($100 + $50) / 2 = ~27% (it’s closer to 30% in Excel).\nSo, you would structure the swap such that the investors are granted an Equity percentage that\nmight produce this same 5-year annualized return.\nA 25% IRR over 5 years is a 3.0x multiple, so we need a swap that could produce $50 * 3x =\n$150 in exit proceeds (in reality, slightly more than that since the IRR is closer to 30%).\nSo, if the company’s Equity is worth $1,500 by Year 5 based on its turnaround plan and the peer\ncompany multiples, you might propose 10% Equity in exchange for this current Debt issuance.\nDepending on the investors’ confidence in this plan, this percentage might be higher to account\nfor the execution and market risks.\nEquity Capital Markets (ECM)\nYou’re more likely to get\nquestions about the\nprocess for equity\nissuances than the\nanalyses, and many articles\non M&I cover these points\n(see: Equity Capital\nMarkets, SPACs vs. IPOs,\netc.).\nAlso, the Understanding Banking section had questions related to these topics.\nTherefore, the questions in this section cover the technical analysis for Initial Public Offerings,\nFollow-On Offerings, Special Purpose Acquisition Company (SPAC)-facilitated IPOs, and\nConvertible Bonds."
  },
  {
    "id": "mi-215",
    "sourceNumber": 1,
    "page": 145,
    "question": "Walk me through an IPO model for a private company that wants to go public.",
    "sampleAnswer": "You start by assuming a range of forward multiples that the company will trade at once it is\npublic and then apply these to your company’s projected financial metrics.\nFor example, maybe you assume a range of 12x – 16x for the forward EBITDA multiples, with\n14x as the midpoint.\nYou then multiply by the company’s projected EBITDA to determine its Post-Money Enterprise\nValue at Trading.\nThen, you back into its Post-Money Equity Value at Trading by adding Cash, including the Net\nIPO Proceeds from the offering, and subtracting Debt.\nNext, you assume the company offers a Pricing Discount to the IPO investors to compensate\nthem for the risk they’re taking; this discount might be in the 10 – 20% range.\nYou reduce the Post-Money Equity Value by this Pricing Discount and base the Offering Price\nper Share on (Post-Money Equity Value at Pricing – IPO Offering Size) / Diluted Shares Before\nOffering.\nThen, you calculate the Primary Shares Issued based on the Post-Money Equity Value at Pricing\n/ Offering Price – Diluted Shares Before Offering.\nFor example, a Post-Money Equity Value of $2 billion / $50.00 Offering Price = 40 million shares,\nso if the company currently has 30 million shares, it must issue 10 million new shares.\nYou determine the Secondary Shares and Overallotment Shares based on separate assumptions\nfor those (if applicable).\nFinally, you calculate the % of the company sold in the IPO and its valuation multiples at pricing\nand trading, reflecting the Net IPO Proceeds in its Equity Value and Enterprise Value."
  },
  {
    "id": "mi-216",
    "sourceNumber": 2,
    "page": 145,
    "question": "Wait a minute, how does an IPO model set the valuation? What you just described does not seem to “value” the company.",
    "sampleAnswer": "The IPO model does not “set the valuation”; it determines the number of new shares sold, the\ndiscount on these shares, and each group’s post-deal ownership percentage.\nValuation in an IPO context is still based on the forward multiples from the comparable public\ncompanies, perhaps with a DCF used for additional support."
  },
  {
    "id": "mi-217",
    "sourceNumber": 3,
    "page": 146,
    "question": "Can you explain Primary vs. Secondary Shares in an IPO or Follow-On Offering?",
    "sampleAnswer": "“Primary Shares” are new ones issued by the company in an equity offering. Investors pay the\ncompany cash to buy these shares.\nThey dilute the company’s existing investors by reducing their ownership stakes, but they also\ngive the company cash that it can use for different purposes.\n“Secondary Shares” are existing shares sold to new investors in the offering. They do not dilute\nexisting investors, but the company also receives no cash from them.\nThe percentages of Primary and Secondary Shares should be within reasonable ranges in an\nequity offering so the market perceives it positively. For example, if an IPO consists of 90%\nSecondary Shares, new investors will rightfully wonder why so many existing investors want to\nsell their shares rather than holding them for the long term."
  },
  {
    "id": "mi-218",
    "sourceNumber": 4,
    "page": 146,
    "question": "What's the impact of a “Greenshoe” or Overallotment provision in an IPO or FO, and when might a bank offer it?",
    "sampleAnswer": "A “Greenshoe” lets a company sell more shares than originally planned in an equity offering. A\ncompany might use it if there’s higher-than-expected demand for its shares and it wants to\nraise additional capital to take advantage of this demand.\nFor example, the company initially planned to offer 10 million shares at $10.00 each, but with a\n15% Greenshoe, it can offer 11.5 million shares and raise $115 million instead of $100 million.\nIn an IPO or FO, a Greenshoe increases the deal size, resulting in a higher percentage of the\ncompany sold to new investors."
  },
  {
    "id": "mi-219",
    "sourceNumber": 5,
    "page": 147,
    "question": "How do you set up a Follow-On Offering model differently from an IPO model?",
    "sampleAnswer": "Unlike IPO models, the key drivers are the company’s current share price and a range of\ndiscounts to that price.\nYou determine the shares issued based on the amount of capital the company wants to raise\nand the discount it offers; a higher discount means more shares and a lower discount means\nfewer shares.\nThen, you factor in the Overallotment (Greenshoe) and the Primary vs. Secondary Share split\nand determine the Net Proceeds or Total Primary Shares Sold * Offering Price – Fees.\nYou still calculate the % of the company sold in the offering based on the Primary Shares Issued\n/ Post-Offering Share Count."
  },
  {
    "id": "mi-220",
    "sourceNumber": 6,
    "page": 147,
    "question": "Walk me through how a company might go public via a Special Purpose Acquisition Company (“SPAC”). In Step 1 of the SPAC process, a “Sponsor” (a wealthy individual, financial firm, etc.) forms an empty holding company and takes it public, typically at a $10.00 share price. Investors buy these shares and end up with ~80% of the SPAC, while the Sponsor gets a “Promote” that gives them 20% of the SPAC for very little capital. The Sponsor also pays for warrants at exercise prices modestly higher than $10.00; this cash payment covers a small upfront underwriting fee. In Step 2, the Sponsor identifies a private target company that wants to go public and negotiates an acquisition in which this target company becomes the majority owner (i.e., it’s a reverse merger).",
    "sampleAnswer": "If the SPAC shareholders approve the deal, the SPAC issues so many shares that the target ends\nup owning the vast majority (80-90%+) of the combined company. The Cash raised in the IPO\ngoes on the combined company’s Balance Sheet, and other investors might also contribute\ncapital in this step via a private investment in public equity (PIPE)."
  },
  {
    "id": "mi-221",
    "sourceNumber": 7,
    "page": 147,
    "question": "What are the trade-offs of a SPAC vs. an IPO for a company going public?",
    "sampleAnswer": "The SPAC process is typically faster than a traditional IPO (months rather than one year+), the\nregulatory burden is much lower, and there’s no IPO Pricing Discount; the private target\ncompany just negotiates the best deal it can.\nHowever, SPACs also tend to create more dilution than traditional IPOs, the fees are often the\nsame or higher, and investors often view companies that went public via SPACs as lower\nquality, resulting in “mixed” stock-price performance (at best)."
  },
  {
    "id": "mi-222",
    "sourceNumber": 8,
    "page": 148,
    "question": "Your co-worker is creating a Payoff Diagram for a Convertible Bond. He claims that the market price will exceed the bond’s payoff value when the company’s share price reaches the Conversion Price and that above the Conversion Price, the market price will remain above the payoff value. Is he correct, incorrect, or partially correct?",
    "sampleAnswer": "He is partially correct. In a Payoff Diagram, the bond’s market price will remain above its payoff\nvalue when the stock price exceeds the Conversion Price because the bond offers downside\nprotection to investors, unlike the underlying shares.\nHowever, he is incorrect about the first part: The market price typically starts to exceed the\nbond’s payoff value at a share price below the Conversion Price.\nThis is because the possibility of converting into common shares increases the bond’s market\nprice and makes it worth more than its payoff value, even at this level."
  },
  {
    "id": "mi-223",
    "sourceNumber": 9,
    "page": 148,
    "question": "Explain intuitively why a Convertible Bond is not necessarily “cheaper” than traditional Debt, even though some people claim it is.",
    "sampleAnswer": "The cash cost of a Convertible Bond is lower than the cash cost of a traditional bond because\nthe coupon rate is lower, meaning the company pays less in interest each year.\nHowever, a Convertible Bond is not truly cheaper than traditional Debt because of the\nembedded conversion option, which makes the bond act more like Equity at share prices\naround and above the Conversion Price.\nThis possibility of conversion into common shares and the resulting dilution makes Convertible\nBonds more expensive than traditional Debt if you consider the total costs.\nConvertible Bonds are usually cheaper than traditional Equity because of their Liability\ncomponent, which acts more like traditional Debt."
  },
  {
    "id": "mi-224",
    "sourceNumber": 10,
    "page": 149,
    "question": "Convertible Bonds seem “too good to be true” since they offer the upside potential of common shares and downside protection if the company’s stock price falls. Why would anyone purchase common shares if the company also has Convertible Bonds?",
    "sampleAnswer": "The disadvantage is that Convertible Bonds cost more than the equivalent number of common\nshares, particularly if an investor buys them on the secondary market.\nFor example, if the Conversion Premium is 30%, getting the same number of shares via a\nConvertible Bond will cost at least 30% more than buying the underlying shares.\nSo, investors get downside protection from Convertible Bonds but also pay extra for it, which is\nwhy it’s not “too good to be true.”\nFinancial Institutions Group (FIG)\nAside from Distressed / Restructuring, FIG is perhaps the most technical group in investment\nbanking and requires significant industry-specific knowledge of the accounting, valuation, and\nmodeling differences.\nYou can’t “learn” everything here – that would require a full course – but this summary gets\nyou up to speed on the most important points."
  },
  {
    "id": "mi-225",
    "sourceNumber": 1,
    "page": 150,
    "question": "How do commercial banks differ from normal companies?",
    "sampleAnswer": "Unlike normal companies, commercial banks make money based on the interest rate spread:\nThey issue Loans to customers, collect interest income, and find funding sources to back up\nthose Loans via Deposits and Debt, which both carry interest and fees.\nThis business model creates the following differences:\n1) 2) 3) 4) 5) Balance Sheet First – The Balance Sheet drives banks’ performance, and you start the\nfinancial statements by projecting the Balance Sheet first.\nEquity Value Only – You cannot separate a bank’s operating and financing activities, so\nthe concept of Enterprise Value does not apply, and you use Equity Value and Equity\nValue-based multiples instead.\nDividend Discount Models in Place of DCFs – “Free Cash Flow” doesn’t mean anything\nfor banks because the Change in Working Capital and CapEx do not represent\nreinvestment in the business. So, you use Dividends as a proxy for FCF, Cost of Equity\ninstead of WACC, and the Dividend Discount Model instead of the DCF analysis.\nRegulations and Capital – Banks are highly regulated, and they must always maintain\nminimum amounts of “capital” (Tangible Common Equity with a few modifications).\nThese requirements constrain their growth.\nDifferent Valuation Multiples – The Price / Book Value (P / BV), Price / Tangible Book\nValue (P / TBV), and Price / Earnings (P / E) multiples are all important because these\nfirms are Balance Sheet-driven, and Interest is a huge part of their revenue.\nHere’s a summary:"
  },
  {
    "id": "mi-226",
    "sourceNumber": 2,
    "page": 151,
    "question": "How are insurance companies different?",
    "sampleAnswer": "Most of the key differences above (Equity Value only, Dividend Discount Models, different\nvaluation multiples, regulations, etc.) also apply to insurance firms, but the financial projections\ndo not start with the Balance Sheet.\nInstead, Premiums, which appear on the Income Statement, act as the key driver rather than\nLoans and Deposits.\nA few other differences include:\n• Non-Interest Revenue tends to be a higher percentage of total revenue than it is for\nbanks because of the Premiums that insurance firms collect.\n• They use Statutory Accounting, a system different from IFRS / U.S. GAAP that is closer\nto cash accounting.\n• Valuation is like commercial bank valuation, but Embedded Value is an important\nadditional methodology for Life Insurance.\n• Regulatory Capital requirements differ and are usually linked to “Risk-Based Capital”\nand the RBC Ratio, which equals Total Adjusted Capital (a variation of Common\nShareholders’ Equity) divided by the risk-adjusted Total Assets."
  },
  {
    "id": "mi-227",
    "sourceNumber": 3,
    "page": 151,
    "question": "You’ve explained commercial banks and insurance firms, but what about other companies in FIG coverage, such as specialty finance, asset management, broker-dealer, and financial technology (fintech) firms?",
    "sampleAnswer": "“Specialty finance” companies are like commercial banks because they still earn money based\non borrowing and lending and the interest rate spread; it’s just that their regulatory capital\nrequirements are slightly different.\nAsset management, broker-dealer, and fintech firms operate more like normal companies since\nthey are based on fees, transactions, or subscriptions.\nTherefore, you can still use multiples such as TEV / Revenue and TEV / EBITDA to value them,\nand the traditional Unlevered DCF still works.\nIf you’re not sure of a company’s category, look at the components of its revenue and expenses\nand how much it earns based on its Balance Sheet."
  },
  {
    "id": "mi-228",
    "sourceNumber": 4,
    "page": 151,
    "question": "For normal companies, there is often a relationship between the growth rates of metrics such as Revenue and EBITDA and the corresponding valuation multiples, such as TEV / Revenue and TEV / EBITDA. What types of relationships exist for banks and insurance firms?",
    "sampleAnswer": "In these verticals, there tends to be a strong correlation between Return on Equity (ROE) and P / BV multiples (and variations, such as ROTCE and P / TBV multiples).\nYou can even link the multiples and metrics formulaically for “stabilized” banks:\n• P / BV = (ROE – Net Income Growth Rate) / (Cost of Equity – Net Income Growth Rate)\n• P / TBV = (ROTCE – Net Income to Common Growth Rate) / (Cost of Equity – Net Income\nto Common Growth Rate)\nThere may also be some correlation between P / E multiples and Net Income Growth, but it\ntends to be weaker than the others.\nYou can spot a possibly mispriced bank or insurance firm if its ROE-based metrics are similar to\npeer companies’, but its P / BV or P / TBV multiples differ significantly."
  },
  {
    "id": "mi-229",
    "sourceNumber": 5,
    "page": 152,
    "question": "What is “Regulatory Capital”? Why do banks and insurance firms need it?",
    "sampleAnswer": "Both banks and insurance firms expect to lose money from customers defaulting on loans or\ngetting in accidents, dying, and filing claims (not to be morbid – this is life insurance).\nThey handle expected losses with specific items on their Balance Sheets: The Allowance for\nLoan Losses for banks and the Claims Reserve for insurance companies.\nBut there are also unexpected losses, which Regulatory Capital covers. It consists mostly of\nTangible Common Equity (with adjustments and variations), which serves as a “buffer” against\nthese potential, unexpected losses.\nFor example, if a bank writes down a Loan on the Assets side of its Balance Sheet, something\nmust decrease on the L&E side to balance the change. If the bank has enough Regulatory\nCapital, that “something” will be its Equity rather than customer Deposits.\nBanks must maintain ratios based on Regulatory Capital / Some Type of Assets above certain\npercentages, such as 7% or 10%.\nThey must also maintain enough Liquid Assets to cover cash outflows and enough Stable\nFunding to meet their “Required Stable Funding” (Assets multiplied by adjustment factors)."
  },
  {
    "id": "mi-230",
    "sourceNumber": 6,
    "page": 152,
    "question": "What is Common Equity Tier 1 (CET 1), and why must banks maintain a certain level?",
    "sampleAnswer": "CET 1 equals Common Shareholders’ Equity – Goodwill – Other Intangibles +/- Other\nAdjustments. It’s like Tangible Common Equity, but not the same due to the adjustments.\nCET 1 is the most basic and important type of Regulatory Capital, which exists to cover\nunexpected losses.\nThe CET 1 Ratio equals CET 1 / Risk-Weighted Assets. To calculate Risk-Weighted Assets, a bank\nmultiplies all its on-BS and off-BS Assets by “risk weights” such as 50%, 75%, or 150%, and adds\nup everything.\nThe minimum CET 1 Ratio under Basel III is 4.5%, but that climbs to 9.5% when you include\nvarious buffers, and it’s even higher for large, systemically important banks."
  },
  {
    "id": "mi-231",
    "sourceNumber": 7,
    "page": 153,
    "question": "A commercial bank has set aside sufficient Regulatory Capital for unexpected loan losses and a sufficient Allowance for Loan Losses for expected losses.",
    "sampleAnswer": "After reviewing data from its borrowers, the bank realizes it could lose more than expected.\nWalk me through the financial statements if it increases its loss estimates by $100 and\nexplain how the CET 1 Ratio changes.\nThis is recorded as a $100 increase in the Provision for Credit Losses on the Income Statement,\nwhich is a non-cash expense that represents an increase in the expected loan losses.\n• IS: Pre-Tax Income is down by $100, and Net Income is down by $75 at a 25% tax rate.\n• CFS: Net Income is down by $75, but you add back the $100 of Provisions, so Cash is up\nby $25 at the bottom.\n• BS: Cash is up by $25, but Net Loans is down by $100 (since the Allowance is a contra-\nasset netted against Net Loans), so the Assets side is down by $75. The L&E side is also\ndown by $75 because Equity is down due to the reduced Net Income.\n• CET 1 Ratio: This decreases, but we don’t know the exact percentage because we don’t\nknow the bank’s Risk-Weighted Assets (RWAs) or current CET 1. The RWAs stay the\nsame because they are based on Gross Loans, not Net Loans, but the CET 1 falls because\nit is linked to Common Shareholders’ Equity, which is down by $75.\nThe intuition is that this bank expects to charge off more of its Loans, so its “buffer capital”\ndecreases to reflect this expected loss. Cash increases due to the tax savings from this non-cash\nProvision expense. The CET 1 served its purpose by “absorbing” this unexpected loss that has\nnow turned into an expected loss."
  },
  {
    "id": "mi-232",
    "sourceNumber": 8,
    "page": 154,
    "question": "An insurance company records $100 in Net Written Premiums and $40 in Net Earned Premiums and pays Commissions of 10%. What happens on the financial statements? Ignore the Claims and Losses corresponding to these premiums for now.",
    "sampleAnswer": "The key point here is that the commissions are paid in cash based on the Net Written Premiums\nin this period, but only $40 / $100 = 40% can be recognized on the Income Statement because\nthis portion corresponds to the Net Earned Premiums.\nSo, the cash commissions are 10% * $100 = $10, but only $4 appears on the Income Statement.\n• IS: Revenue is up by $40, we’re ignoring Claims/Losses, and Commissions are up by $4,\nso the Pre-Tax Income is up by $36. At a 25% tax rate, Net Income is up by $27.\n• CFS: Net Income is up by $27, and the Unearned Premium Reserve is up by $60, so cash\nflow is up by $87 so far. The Deferred Acquisition Costs (DAC) asset increases by $6 to\nreflect the additional cash commissions, reducing cash flow by $6. Cash at the bottom is\nup by $81.\n• BS: Cash is up by $81 on the Assets Side, and the DAC asset is up by $6, so Total Assets\nare up by $87. On the L&E side, the Unearned Premium Reserve is up by $60, and Equity\nis up by $27 due to the increased Net Income, so both sides are up by $87 and balance.\n• Intuition: The firm collects $100 in Cash for the written premiums but pays taxes on\nonly ($40 – $4) of this amount and pays an additional $6 in Cash Commissions, so its\nCash increases by less than $100."
  },
  {
    "id": "mi-233",
    "sourceNumber": 9,
    "page": 154,
    "question": "What is the Combined Ratio for insurance firms, and how does it make sense mathematically?",
    "sampleAnswer": "The Combined Ratio equals the Expense Ratio plus the Loss & LAE Ratio and gives a sense of the\ncompany’s underwriting profitability, i.e., how much in profits it earns from collecting\npremiums and paying claims, ignoring its investing activities.\nThe Expense Ratio equals (Net Commission Expense + Underwriting Expense) / Net Written\nPremiums, and the Loss & LAE Ratio equals the Loss & Loss Adjustment Expense on the Income\nStatement divided by the Net Earned Premiums.\nMathematically, this is inconsistent because you can’t add two fractions with different\ndenominators, but it’s an industry quirk that has persisted for decades. Although it’s\ninconsistent, it’s not that bad if the company’s NEP / NWP ratio stays in a tight range."
  },
  {
    "id": "mi-234",
    "sourceNumber": 10,
    "page": 155,
    "question": "Can you explain, at a high level, how you forecast a bank’s financial statements?",
    "sampleAnswer": "You start by projecting the bank’s Balance Sheet, usually beginning with its Loans, Deposits,\nand other Interest-Earning Assets and Interest-Bearing Liabilities.\nThen, you project the interest rates for all these items and link them to a prevailing rate like the\nFederal Funds rate or the interbank lending rate.\nUse that information to calculate the Interest Income and Interest Expense on the Income\nStatement. Estimate the Non-Interest Income and Expenses with simple percentage growth,\npercentage-of-revenue, or percentage-of-Balance-Sheet-line-item estimates.\nProject the bank’s Dividends based on the Regulatory Capital it’s targeting vs. how much it\ncurrently has. Complete the full Cash Flow Statement by linking to the relevant IS and BS line\nitems and separately projecting a few additional ones, such as CapEx and D&A.\nEverything flows from the Balance Sheet, and the Regulatory Capital constrains both the Loan\nGrowth and the allowed Dividends."
  },
  {
    "id": "mi-235",
    "sourceNumber": 11,
    "page": 155,
    "question": "How do you calculate the Liquidity Coverage Ratio (LCR) and the Net Stable Funding Ratio (NSFR) for banks, and what do they tell you?",
    "sampleAnswer": "The LCR ensures that the bank has enough high-quality Liquid Assets to cover 100% of net cash\noutflows during a “stressed 30-day period.”\nYou calculate it with Liquid Assets / Stressed Net Cash Outflows; the minimum is 100%.\nThe NSFR ensures that the bank has enough stable, long-term funding for its Assets (i.e., the\nbank should not depend on short-term borrowings that might disappear overnight).\nYou calculate it with Available Stable Funding / Required Stable Funding, and the minimum is\n100%; “Available Stable Funding” is linked to long-term Deposits and Total Capital, while\nRequired Stable Funding is linked to the bank’s Assets multiplied by various adjustment factors.\nThese metrics are important because the CET 1 Ratio and Total Capital Ratio tell you nothing\nabout a bank’s liquidity or stability; the bank could still be in trouble if there are significant cash\noutflows in an emergency."
  },
  {
    "id": "mi-236",
    "sourceNumber": 12,
    "page": 156,
    "question": "Walk me through a basic Dividend Discount Model (DDM) for a commercial bank.",
    "sampleAnswer": "First, assume an Asset Growth Rate and make the Risk-Weighted Assets a percentage of Total\nAssets.\nThen, project Assets and Risk-Weighted Assets based on these figures. Assume a Return on\nAssets (ROA) for the bank and use that to project Net Income.\nThen, assume a Targeted CET 1 Ratio (e.g., 10% or 12%) and calculate the bank’s CET 1 for the\nyear based on that percentage times its Risk-Weighted Assets.\n“Back into” the Dividends Issued by taking the bank’s CET 1, adding Goodwill and Other\nIntangibles, subtracting the beginning Common Shareholders’ Equity, and subtracting Net\nIncome and anything else that might affect CET 1.\nThen, discount the Dividends based on the Cost of Equity, and sum up all the discounted values.\nCalculate the Terminal Value using the Multiples Method (typically based on P / TBV) or the\nGordon Growth method and discount it to its Present Value using the Cost of Equity.\nAdd the Present Value of the Dividends to the Present Value of the Terminal Value to\ndetermine the bank’s Implied Equity Value and compare this to its Current Equity Value."
  },
  {
    "id": "mi-237",
    "sourceNumber": 13,
    "page": 156,
    "question": "Walk me through an Embedded Value model for a Life Insurance firm.",
    "sampleAnswer": "Embedded Value = Net Asset Value + Present Value of Future Cash Profits from Current Policies.\nYou start by calculating the firm’s Net Asset Value by marking the Balance Sheet to market\nvalue and then subtracting all the Liabilities from all the Assets.\nThen, you assume the insurance company writes no new policies in future years so that its\nexpected after-tax cash flows depend 100% on its policies as of today.\nYou project the firm’s revenue based on its Net Earned Premiums and “Lapse Rate,” which\nrepresents cancellations, and you add Interest and Investment Income.\nThe main expenses include Cash Claims, Cash Commissions, and other Cash Operating\nExpenses. You might estimate these based on historical trends.\nYou multiply Pre-Tax Income by (1 – Tax Rate) to calculate the After-Tax Cash Flow from the\npolicies in each year; if the company needs more or less capital, you also factor that in, along\nwith the after-tax interest on it.\nYou project these figures until the current insurance policies “run out,” and you discount the\nAfter-Tax Cash Flows to Present Value based on the Cost of Equity and add them to the NAV to\ndetermine the firm’s Embedded Value."
  },
  {
    "id": "mi-238",
    "sourceNumber": 14,
    "page": 157,
    "question": "How do Property & Casualty (P&C) and Life Insurance companies compare?",
    "sampleAnswer": "Both types of companies collect Premiums upfront, recognize them as revenue over time,\nrecognize Claims as expenses and pay them in Cash over time, and make money from both\nUnderwriting and Investing.\nBut the specifics are quite different:\n• Policy Length: Life insurance policies last much longer: 20 – 30+ years vs. 1 – 3 years for\nP&C.\n• Business Model: P&C is more of a flow business, dependent on winning and servicing\nnew customers and profiting from underwriting activities. Life is more of a spread\nbusiness, dependent on investments and interest rates.\n• Financial Statements: Life insurance firms have more complex Balance Sheets with\nadditional items, such as Separate Accounts for policyholders.\n• Valuation: You can use the Dividend Discount Model and the P / E, P / BV, and P / TBV\nmultiples to value both types of firms, but Life also has Embedded Value and related\nmetrics and multiples, such as P / EV and ROEV."
  },
  {
    "id": "mi-239",
    "sourceNumber": 15,
    "page": 158,
    "question": "How does a merger model differ for commercial banks?",
    "sampleAnswer": "The basic setup and approach of combining the financial statements and measuring\naccretion/dilution for metrics such as EPS is the same, but several points differ:\n• Transaction Funding: Most bank M&A deals use 100% Stock, or at least > 100% Stock,\nbecause banks’ “available Cash” is limited, and they tend to be highly leveraged already.\n• New Line Items and Adjustments: The Acquirer must mark the Target’s Balance Sheet\nto market value and amortize these “loan marks”; the Target’s Allowance for Loan\nLosses is written down and replaced, and new items such as Core Deposit Intangibles\nare created.\n• Deposit Divestitures: The Acquirer may have to divest some of the Target’s Deposits if\nthe combined company’s Deposits exceed the maximum allowed to be held by a single\nbank in the country; corresponding Assets must also be divested.\n• Evaluation Methods: Besides EPS, you can analyze the accretion/dilution of BV and TBV\nper Share; the IRR vs. Discount Rate Analysis and Contribution Analysis are both\nimportant, as is a Synergies valuation.\nFinancial Sponsors Group (FSG)\nThe Financial Sponsors Group (FSG) is tricky\nbecause it could be more of a “relationship\nmanagement” role with light technical work\nor involve many private equity deals.\nWe recommend reading the full article on\nM&I for the details, industry trends, and\ndifferences vs. similar groups, such as FIG\nand LevFin; this section presents a few\nquestions about the technical aspects of\nfinancial sponsors."
  },
  {
    "id": "mi-240",
    "sourceNumber": 1,
    "page": 158,
    "question": "What are the key metrics and valuation multiples for a financial sponsor?",
    "sampleAnswer": "You can still value financial sponsors with traditional multiples, like TEV / EBITDA and P / E, and\na traditional DCF, but Assets Under Management (AUM) and the TEV / AUM multiple are also\nquite important.\n“Fee-Related Earnings” (FRE, or management fees) vs. “Performance Fees” (carried interest) are\nother important metrics, as is the split between AUM and permanent capital (the capital that\nmust be returned to investors within a specific time frame vs. the amount held/invested on an\nopen-ended basis).\nTo evaluate individual funds held at a financial sponsor, you can use metrics such as Total Value\nto Paid-In Capital (TVPI), Distributions to Paid-In Capital (DPI), and Residual Value to Paid-In\nCapital (RVPI).\nTVPI tells you how much the fund has already returned to investors plus the value of the\nremaining assets held, all divided by the investors’ cash contributions.\nTVPI can be split into DPI (distributions so far) and RVPI (the remaining value or “residual\nvalue”). They indicate how much the fund has returned in cash vs. its potential future returns if\nyou believe its portfolio company valuations."
  },
  {
    "id": "mi-241",
    "sourceNumber": 2,
    "page": 159,
    "question": "Suppose that you are valuing a single private equity firm that uses the same strategy and targets the same size company in each of its separate funds. Why would you use a Sum-of-the-Parts (SOTP) valuation, given that there are no different business segments?",
    "sampleAnswer": "Although there are no different business segments, there are different earnings sources: The\nmanagement fees charged on each fund’s committed capital and the performance fees (carried\ninterest) charged on each fund’s returns.\nThe management fees (“Fee-Related Earnings”) are more stable and predictable, so they are\noften valued at higher multiples, such as ~20x vs. only ~10x for the performance fees.\nIn SOTP valuations for financial sponsors, you value each income stream separately and then\nadd them to the firm’s Net Asset Value from its most recent Balance Sheet to determine its\nImplied Value."
  },
  {
    "id": "mi-242",
    "sourceNumber": 3,
    "page": 159,
    "question": "Suppose you are an FSG banker advising a private equity client. How would you decide when to pitch the client on bringing one of its portfolio companies to the market for a sale or IPO?",
    "sampleAnswer": "It depends on the holding period of the asset, the timing of the client’s next fund, and the\ncurrent M&A and IPO markets.\nGenerally, General Partners (GPs) at PE firms want to hold assets for 5 – 7 years to maximize\ntheir value, so you would normally wait close to that long before pitching anything. But GPs also\nwant to show evidence of strong performance when they raise their next funds, so if they plan\nto raise a new fund soon, you might be more likely to pitch an M&A or IPO process.\nIf the M&A and IPO markets are currently weaker, you might be less likely to pitch one of these\nprocesses, but it depends heavily on the context (e.g., is this a short-term downturn or a\nprolonged, multi-year slow period?)."
  },
  {
    "id": "mi-243",
    "sourceNumber": 4,
    "page": 160,
    "question": "Again, pretend you are an FSG banker advising a private equity client. When is the ideal time to suggest that the client review its investments and deploy its remaining committed capital?",
    "sampleAnswer": "This type of review is most appropriate when the GPs are preparing to raise their next fund –\nbecause they want to show their Limited Partners (LPs) that they have deployed as much\ncapital as possible from their previous funds. LPs might be skeptical if it seems like the PE firm is\nraising significant capital but not investing all of it.\nSometimes, GPs currently raising a new fund might even invest in new companies before they\nfinish fundraising to illustrate what the new investments might look like and win commitments\nfrom more LPs.\nFor example, if the GPs plan to raise a new $1 billion fund over 18 months, they might start\ninvesting within 6 months if they’ve raised $300 million so far – as that could be enough for\nseveral deals, depending on the strategy.\nIf prospective LPs like these early deals, they might be more likely to commit capital."
  },
  {
    "id": "mi-244",
    "sourceNumber": 5,
    "page": 161,
    "question": "Can you explain the different types of private equity deals that we might advise clients on?",
    "sampleAnswer": "A few of the most common PE deal types include:\n• Carve-Out – This occurs when a company sells a business unit or division (often a non-\ncore asset). Private equity firms acquire the carved-out entity and then improve it as a\nstandalone business.\n• Founder Succession – In cases where a business founder is looking to retire or transition\nout, private equity firms might step in to facilitate the succession by acquiring a majority\nstake and helping to professionalize the management team.\n• Management Buyout (MBO) – This is a deal in which the existing management team\npartners with a private equity firm to acquire the company they operate, often using\nleverage. This aligns the management team and PE firm and ensures operational\ncontinuity.\n• Take-Private – A private equity firm acquires a publicly traded company, delisting it\nfrom the stock market. This allows for operational improvements away from public\nscrutiny, often to restructure and sell or relist later at a higher valuation.\n• Add-on Acquisition – A private equity-owned portfolio company acquires smaller\ncompanies to increase its market share and potential valuation. This is a common\ngrowth strategy for buy-and-build platforms.\n• Dividend Recap – A private equity-owned company takes on additional debt to issue a\ndividend to its investors. This allows PE firms to extract value from the investment\nbefore officially exiting via an M&A deal or IPO.\n• Secondary Buyout – Not to be confused with a “secondaries” deal, in this transaction,\none buyout fund sells the entire company to another buyout fund.\nHealthcare & Biotech\nHealthcare investment banking is known as a\ndiverse group with good deal flow in any\nmarket environment and not too much\nspecialized accounting or valuation.\nThat’s mostly correct, but some verticals, such\nas branded biotech companies, are more\nspecialized (which is why we have a separate\nBiotech Valuation course)."
  },
  {
    "id": "mi-245",
    "sourceNumber": 1,
    "page": 161,
    "question": "Can you explain the different verticals within healthcare and how valuation differs?",
    "sampleAnswer": "The main verticals are Pharmaceuticals, Biotechnology, and Life Sciences and Healthcare\nEquipment & Services.\nThe first category includes firms that make branded (patented) or generic drugs and tools to\nsupport them; the second includes hospitals, nursing facilities, labs, managed care, and medical\ndevice companies.\nValuation in this sector is fairly standard for most companies, so the DCF and multiples such as\nTEV / EBITDA and P / E apply, as there are no special accounting rules.\nHowever, branded pharmaceutical/biotech companies differ because their revenue must be\nprobability-adjusted and will “expire” in the future once patent protection goes away; you tend\nto use a long-term DCF or Sum-of-the-Parts DCF for valuation in this vertical."
  },
  {
    "id": "mi-246",
    "sourceNumber": 2,
    "page": 162,
    "question": "Walk me through a valuation for a pre-revenue biotech company that’s currently in Phase II clinical trials, aiming to develop and sell branded drugs.",
    "sampleAnswer": "Start by forecasting the R&D expenses required to get the drug(s) through the remaining clinical\ntrials and win regulatory approval. Probability-adjust this in the development period based on\nthe chances of passing each phase.\nThen, forecast revenue in the commercial period based on Total Patient Count * Market Share\n* Price per Patient, and probability-adjust it based on the chance of passing all the phases and\nwinning approval. Also, make sure this revenue falls by ~90%+ when the drug’s exclusivity\nexpires and generics enter the market.\nMost expense and cash flow items in the commercial period will be simple percentages of\nrevenue. Unlevered FCF = NOPAT + D&A +/- Change in Working Capital – CapEx, and you can\ndiscount and sum up all the UFCFs to get the company’s Implied Enterprise Value.\nYou normally ignore Terminal Value in pre-revenue biotech DCFs and adjust for the normal\nbridge items (add Cash, subtract Debt, etc.) to move from the Implied Enterprise Value to the\nImplied Equity Value.\nIf the company has multiple products, you may use a Sum-of-the-Parts DCF that values each\ndrug separately, aggregates their values, and subtracts the capitalized values of the corporate-\nlevel expenses."
  },
  {
    "id": "mi-247",
    "sourceNumber": 3,
    "page": 162,
    "question": "Are valuation multiples from public comps and precedent transactions relevant for pre- revenue / clinical-stage biotech companies? If so, which ones are useful? If not, why not?",
    "sampleAnswer": "Valuation multiples may be useful if the company is far enough along for long-term revenue\nforecasts to make sense (e.g., Phase II of clinical trials, but not the “idea generation” phase).\nThe most common multiples include variations of forward revenue, such as “L + 5” Revenue\n(Launch Date of Drug + 5 Years). The “Peak Sales” metric is also common for drugs with\nconsensus opinions about their market potential.\nYou will see references to multiples such as TEV / Peak Sales and TEV / L + 5 Revenue in biotech\nvaluations based on these metrics."
  },
  {
    "id": "mi-248",
    "sourceNumber": 4,
    "page": 163,
    "question": "Suppose you are valuing a “platform biotech company” with a mix of existing, patent- protected drugs that already generate sales and new drugs in its pipeline. How does the valuation approach differ from a pre-revenue firm?",
    "sampleAnswer": "The main difference is that you use more of a standard DCF and the standard valuation\nmultiples, such as TEV / Revenue and TEV / EBITDA.\nIn the DCF, you split the drugs into different categories, such as “drugs with known patent\nexpiration dates,” “drugs with unknown expiration or competition entry dates,” and “pipeline\ndrugs” currently under development.\nFor the revenue-generating drugs, you make the normal assumptions about the Patient Count\nand Pricing to determine revenue and assume a huge price decrease once generics enter.\nThe pipeline drug projections are like the revenue forecasts for a pre-revenue company: Risk-\nadjust sales and cash flows for the success probabilities and assume that their revenue will\neventually decline to low levels even if they pass clinical trials.\nThe Discount Rate follows the standard WACC calculation but may change over time as the\ncompany’s risk profile changes. The Terminal Value still exists but may be “haircut” or use a\nnegative long-term growth rate to reflect the added risk of a company that must constantly\ncreate or acquire new products."
  },
  {
    "id": "mi-249",
    "sourceNumber": 5,
    "page": 164,
    "question": "What are the key drivers for a healthcare facilities company, such as a nursing home provider? How would you forecast its cash flows?",
    "sampleAnswer": "It’s like a retailer: Revenue depends on the total number of facilities, the average number of\nbeds in each one, the utilization rate, and the average revenue per bed, which depends on the\n“Net Revenue per Adjusted Admission” (the base price) and “Average Length of Stay” (ALOS).\nMost expenses are linked to the total number of facilities or their total size, and the employee\ncount depends on the number of beds.\nThe CapEx and Change in Working Capital lines depend on how much the company spends to\nexpand and maintain its facilities.\nIndustrials\nLike healthcare, industrials is known as a solid group with a\ngood variety of deals, steady deal flow, and standard\naccounting and valuation.\nThe difference is that it is much more sensitive to macro\nfactors and overall economic conditions than most verticals\nwithin healthcare, which helps when times are good and\nhurts when they’re not.\nThere is one vertical within industrials that has unique\nvaluation metrics and methodologies (maritime/shipping),\nso we feature exactly 1.5 questions about it here."
  },
  {
    "id": "mi-250",
    "sourceNumber": 1,
    "page": 164,
    "question": "Can you explain how industrials is different from other groups and what the main verticals are?",
    "sampleAnswer": "Industrials companies make machinery or large physical products, transport them, or service them; the customers are usually corporations or governments rather than consumers, and the sector is highly sensitive to the economy and macro conditions, such as credit availability, interest rates, and trade policies.\nMany sources divide the industry into capital goods (aerospace/defense, building products,\nmachinery, etc.), transportation (air freight, airlines, maritime, railroads, etc.), and\ncommercial/professional services.\nAccounting and valuation are standard in most verticals, but the key drivers and KPIs differ."
  },
  {
    "id": "mi-251",
    "sourceNumber": 2,
    "page": 164,
    "question": "Walk me through how you would forecast an airline’s cash flows, including its key metrics and drivers.",
    "sampleAnswer": "Airlines are unique in the industrials space because their customers are mostly consumers\nrather than companies or governments.\nTo forecast an airline’s cash flows, start with Available Seat Kilometers (ASK) or Available Seat\nMiles (ASM) as the top-line driver. Then, assume a load factor and say that the Revenue\nPassenger Kilometers = ASK * Load Factor.\nPassenger Revenue equals the RPK times the Passenger Yield, or Revenue per RPK. There may\nbe Ancillary Revenue from sources such as freight/cargo delivery as well.\nExpenses are divided into Fuel Costs and Non-Fuel Costs (staff, maintenance, rent, etc.).\nThe Cash Flow Statement follows the usual format, starting with Net Income and adding back a\npotentially very large Depreciation & Amortization expenses, adjusting for Deferred Taxes and\nthe Change in Working Capital, and deducting all forms of CapEx."
  },
  {
    "id": "mi-252",
    "sourceNumber": 3,
    "page": 165,
    "question": "What are some accounting and valuation differences in the maritime/shipping sector within the transportation vertical?",
    "sampleAnswer": "First, many companies in this vertical, such as “dry bulk” shipping firms that own huge fleets\nand transport cargo around the world, have a General Partner / Limited Partner structure (like\nPE firms), which means that cash flows may be split up for distribution to each group.\nDistributable Cash Flow, or EBITDA minus CapEx, is a common valuation metric and multiple\nbecause CapEx is so high for many of these companies that EBITDA is not always useful.\nLeases are very important, and since shipping companies operate globally under different\naccounting systems, you may use metrics like EBITDAR or EBITDAR minus CapEx to normalize\nthe financials for different systems and lease mixes.\nFinally, the Net Asset Value (NAV) model is an important valuation methodology; in this\nversion, you estimate the market value of the company’s ships and other assets and subtract its\nliabilities to determine its Implied Equity Value.\nP / NAV, based on Equity Value / Net Asset Value, is also a common multiple."
  },
  {
    "id": "mi-253",
    "sourceNumber": 4,
    "page": 165,
    "question": "Many industrials companies, such as plane and railroad manufacturers, have long lead times to produce and deliver orders. What differences does this create in their key metrics and financial statements?",
    "sampleAnswer": "These timing differences mean that you need to track the Backlog as a key metric, add the\nOrder Intake each year, and subtract the Revenue Recognized from deliveries.\nThe Book-to-Bill Ratio, defined as Order Intake / Revenue Recognized in a year, is a key driver\nthat determines how quickly these orders turn into sales.\nFulfilling these orders over time also creates assets and liabilities linked to them, such as Works\nin Progress and Deferred Expenses; they could significantly impact the company’s Change in\nWorking Capital in the cash flow projections."
  },
  {
    "id": "mi-254",
    "sourceNumber": 5,
    "page": 166,
    "question": "In which verticals within industrials is the Sum-of-the-Parts (SOTP) valuation most and least useful?",
    "sampleAnswer": "SOTP valuation is most useful when you’re valuing a conglomerate that has multiple business\nsegments in very different markets or a maritime/shipping company with a huge variety of\nships or fleet types.\nIn both these cases, it’s useful to assign different values to each asset type or different\nmultiples to income from each segment.\nThe SOTP valuation is less useful elsewhere, such as for a pure-play airline or building products\ncompany, because the income streams are not valued at very different multiples.\nMetals & Mining\nMetals & mining is similar to oil & gas, but some of\nthe accounting practices, metrics, and valuation\nmultiples differ.\nThey’re both extractive industries in which\ncompanies are valued based on their cash flows\ndecades into the future, but mining is simpler\nbecause there are fewer verticals and company types\nto explain."
  },
  {
    "id": "mi-255",
    "sourceNumber": 1,
    "page": 167,
    "question": "Explain the main verticals within metals & mining and the valuation differences.",
    "sampleAnswer": "Some people divide the sector by metal type: Base metals and bulk commodities (coal, iron,\ncopper, etc.), precious metals (gold, silver, palladium, etc.), and diversified miners.\nYou could also divide the industry into producers (they buy the raw materials and turn them\ninto steel and other industrial alloys), miners, and diversified companies that do both.\nProducers follow standard accounting and valuation because they’re manufacturing companies\nthat purchase raw materials, sell finished products, and profit based on their margins.\nMiners are quite different because they are valued based on their long-term cash flows (going\ndecades into the future), so multiples such as P / NAV (Equity Value / Net Asset Value) and TEV\n/ Reserves or TEV / Resources are more common.\nThe NAV Model is also used instead of the DCF; it’s a decades-long DCF with no Terminal Value\nthat values asset and corporate-level cash flows separately.\nBoth producers and miners are highly dependent on commodity prices, which they cannot\ncontrol. So, any valuation should consider different scenarios for the long-term prices."
  },
  {
    "id": "mi-256",
    "sourceNumber": 2,
    "page": 167,
    "question": "Walk me through the valuation of a steel producer in the base metals/bulk commodities segment (i.e., this company produces steel but does not mine the raw materials).",
    "sampleAnswer": "You would forecast this producer’s financials based on its production capacity, utilization rate,\nand average realized product prices. You would assume a gross margin on each sale and use the\nemployee count and other operating expenses to drive the overall operating margin.\nThis type of company is very CapEx-intensive, so you would forecast Maintenance CapEx for its\nexisting factories and Growth CapEx for the new ones it plans to build, which will boost its\nproduction capacity.\nYou would use these assumptions as inputs to the DCF and build scenarios for the commodity\nprices and margins or sensitize them heavily.\nYou would select comparable public companies and transactions via the normal criteria\n(industry, geography, financials, and dates for the transactions) and use multiples such as TEV /\nEBITDA and P / E."
  },
  {
    "id": "mi-257",
    "sourceNumber": 3,
    "page": 167,
    "question": "Your VP reviews your valuation of this steel producer and says that you should use TEV / NOPAT rather than TEV / EBITDA to value the firm. Is he correct?",
    "sampleAnswer": "It depends on the purpose of this valuation. If you want to reflect differences in tax rates and\nindirectly reflect each company’s capital intensity (since NOPAT is based on EBIT, which deducts\nD&A), then TEV / NOPAT is a better choice.\nSo, if these factors heavily influence these companies’ values, your VP may be correct.\nEBITDA ignores the tax rates and the reinvestment required for maintenance and growth, which\nis useful if you want to normalize companies with very different policies but not ideal if you\nwant to factor these into the valuation."
  },
  {
    "id": "mi-258",
    "sourceNumber": 4,
    "page": 168,
    "question": "Walk me through a NAV model for a gold mining company.",
    "sampleAnswer": "First, split the company into “developed mines” and “undeveloped/potential mines” and\nassume the existing mines continue to produce until they are no longer economically feasible.\nAssume the company spends CapEx to develop the new mines, forecast the development time\nand eventual production volume for each one, and assume that production peaks and\neventually declines to near 0.\nTo forecast revenue, build a price deck with different long-term gold prices, such as\nHigh/Base/Low cases, based on the historical price levels.\nCapEx should be linked to the individual mines, while the OpEx might have a fixed per-mine\ncomponent and a larger variable component linked to the production volumes.\nAggregate the cash flows from all the mines, add corporate overhead, and use these to\nestimate the company’s cash flows over the next few decades. There is no Terminal Value since\nyou forecast production until the mines cease economically feasible production.\nDiscount the cash flows to Present Value, add them, and add/subtract the usual bridge items to\ncalculate the Net Asset Value, which you can compare to the company’s Current Equity Value.\nThe Discount Rate is often set to some industry-standard level, such as ~5% for gold or ~8 –\n10% for copper. You might also add a risk premium for emerging/frontier markets."
  },
  {
    "id": "mi-259",
    "sourceNumber": 5,
    "page": 168,
    "question": "Can you explain the differences between Reserves and Resources and Measured, Indicated, and Inferred Resources?",
    "sampleAnswer": "Mining companies split their minerals into “Reserves” and “Resources.”\nReserves have a higher probability of successful recovery, and they’re divided into the “Proved”\nand “Probable” categories.\nResources are a broader category that includes all the Reserves but also more speculative\nmineral deposits with a lower probability of successful, economically feasible extraction.\nThe Proved and Probable Reserves roughly correspond to “Measured Resources.”\nThe more speculative Resources categories are Indicated and Inferred; some “Indicated\nResources” may be part of the Probable Reserves, but Inferred Resources are separate.\nWhen you build a NAV model for a mining company, you need to decide which Reserve or\nResource category to use in the baseline assumptions, and you should risk-adjust if you include\nthe more speculative ones."
  },
  {
    "id": "mi-260",
    "sourceNumber": 6,
    "page": 169,
    "question": "While it is possible to value mining companies using traditional TEV / EBITDA and P / E multiples, there are other options. Which industry-specific multiples are common in the mining sector, and why do you use them?",
    "sampleAnswer": "The most common alternative multiples are P / NAV (Equity Value / Net Asset Value), TEV /\nResources, TEV / Reserves, and P / CF (Equity Value / CFO or FCF).\nThe NAV, Resources, and Reserves multiples are common because companies in this sector\ntrade based on “how much stuff” they have in the ground and what the future cash flows from\nproducing it might be worth today.\nThe P / CF multiple is common because it reflects the company’s CapEx, Taxes, and Change in\nWorking Capital, unlike EBITDA (though this depends on the specific type of “cash flow” used)."
  },
  {
    "id": "mi-261",
    "sourceNumber": 7,
    "page": 169,
    "question": "You’re comparing two sets of comparable companies: Pure-play gold miners and pure-play copper miners. How would you expect their valuation multiples to differ? Why?",
    "sampleAnswer": "If both sets of companies are about the same “size” in terms of Reserves and Annual Production\nand they operate in similar regions, you would expect the pure-play gold miners to trade at\npremium P / NAV multiples (e.g., 1x or above vs. under 1x for copper miners).\nUnlike base metals, which are mostly used for industrial purposes, gold is primarily used as a\n“store of value” and inflation/geopolitical hedge, so its demand is perceived to be more stable,\nwhich boosts gold miners’ valuations.\nAlso, gold is one of the most expensive metals (even next to other precious metals), which\ncontributes to miners’ premium valuations, as irrational as this may sound."
  },
  {
    "id": "mi-262",
    "sourceNumber": 8,
    "page": 169,
    "question": "Why do you create and use “equivalent” metrics, such as “Au Eq.” for gold or “Cu Eq.” for copper?",
    "sampleAnswer": "You use these metrics when you’re analyzing one company that mines different metals or\nyou’re comparing companies with different metal mixes. They let you “convert” from several\ndifferent metals into a single “type” for comparison purposes based on the current dollar values\nof these metals.\nFor example, if a company has 1,000 ounces of gold and 10,000 pounds of copper, and prices\nare currently $2,000 per ounce for gold and $4.00 per pound for copper, the “Gold Equivalent”\nresources are 1,000 + 10,000 * $4.00 / $2,000 = 1,020 ounces."
  },
  {
    "id": "mi-263",
    "sourceNumber": 9,
    "page": 170,
    "question": "How would you select a set of comparable public companies in the mining sector?",
    "sampleAnswer": "You still screen based on industry, geography, and financial criteria, but for the financial criteria,\nyou should use Resources, Reserves, or Annual Production rather than metrics such as Revenue\nor EBITDA.\nAlso, you might use a wider geographic screen than usual, such as “the Americas,” because\nmany mining companies operate globally across developed and emerging markets.\nFinally, you should screen by primary metal type for the industry criteria or select other\ndiversified miners if you’re valuing a diversified miner."
  },
  {
    "id": "mi-264",
    "sourceNumber": 10,
    "page": 171,
    "question": "Would you expect NAV growth and P / NAV to have a strong correlation for mining companies?",
    "sampleAnswer": "No, probably not. The issue is that NAV growth in a set of comparable public companies only\nmeasures short-term changes over one or several years, but a NAV model is based on the\ncompany’s cash flows for decades into the future. Small variations in growth rates over 1 – 2\nyears barely make a difference in projections extending for 50 or 100 years.\nOil & Gas\nOil & gas investment banking is arguably\nmore specialized than mining, with\nmore verticals and accounting/valuation\ndifferences.\nIf you’re interviewing with an O&G\nteam, it helps to be familiar with the\nbasic concepts, such as the NAV model\nfor E&P companies and valuation\ndifferences in the other verticals, but\nyou’re unlikely to get detailed technical\nquestions unless you have previous\nwork experience.\nWe have presented a mix of basic and more advanced questions here because the existing M&I\narticle about this group already covers a lot."
  },
  {
    "id": "mi-265",
    "sourceNumber": 1,
    "page": 171,
    "question": "What are the main verticals in oil & gas, and how does valuation differ in each one?",
    "sampleAnswer": "The main verticals are exploration & production (E&P) or “upstream” companies, storage &\ntransportation or “midstream” companies, refining & marketing or “downstream” companies,\noilfield services, and integrated oil & gas firms.\nValuation is the most different in the E&P vertical because companies cannot control oil/gas\nprices, they operate based on depleting assets, they are highly cyclical, and accounting\nstandards differ.\nTo value E&P companies, you normally use the NAV model, a variant of the DCF built at the\nasset level and with no Terminal Value, along with multiples such as TEV / EBITDAX, TEV /\nProved Reserves, and TEV / Daily Production.\nValuation in most other verticals is standard, but the key drivers and KPIs differ.\nMidstream is the second most different after E&P because many firms are structured as Master\nLimited Partnerships (MLPs). MLPs are pass-through entities (no corporate-level taxes) that\ndistribute a high percentage of their distributable cash flows and constantly issue debt and\nequity (since they do not maintain significant cash balances).\nValuation may use standard multiples such as TEV / EBITDA, but yield and cash flow-based\nmultiples are also common, and the Dividend Discount Model may be used in place of the DCF."
  },
  {
    "id": "mi-266",
    "sourceNumber": 2,
    "page": 172,
    "question": "Walk me through a NAV model for an E&P company.",
    "sampleAnswer": "Start by splitting the company into “existing production” and “undeveloped regions,” and\nassume that its existing oil & gas production declines until its Proved Developed Reserves are\nno longer economically feasible.\nIn the undeveloped regions (Proved Undeveloped Reserves and, if you want to be more\nspeculative, Probable and Possible Reserves), assume the company drills X new wells per year\nuntil its current inventory is exhausted decades into the future.\nAssume that each new well starts producing at its “IP Rate” (Initial Production Rate) and\ndeclines over time until its total cumulative production reaches the average EUR, or Estimated\nUltimate Recovery, for wells in the region.\nBuild scenarios for commodity prices, such as high/mid/low for oil, gas, and natural gas liquids\n(NGLs), and use these to forecast revenue based on the production volume * average\ncommodity price.\nMost of the company’s CapEx is linked to new wells in the form of “Drilling & Completion”\n(D&C) Costs, but some maintenance and general corporate CapEx is also required. Operating\nExpenses consist of Production Taxes, Lease Operating Expenses (LOE), and Transportation\nCosts.\nAggregate the cash flows from all the wells to create a cash flow roll-up and factor in Cash\nTaxes and the value of G&A and Corporate Overhead at this level.\nDiscount the company’s cash flows to Present Value at the industry-standard 10% Discount\nRate (there is no Terminal Value), add them up, and then add Cash, undeveloped acreage, and\nthe values of other businesses, and subtract the TEV bridge liabilities such as Debt and\nPreferred Stock to calculate the Net Asset Value.\nYou can then compare this NAV to the company’s Current Equity Value (or do so on a per-share\nbasis)."
  },
  {
    "id": "mi-267",
    "sourceNumber": 3,
    "page": 173,
    "question": "You are analyzing a new oil well with a 12-month IP rate of 1,000 Barrels of Oil per day. The EUR is 1 million Barrels, the Decline Rate is 20%, and the D&C Costs are $10 million. The production company has an 80% Working Interest in the well and must pay a 10% Royalty on sales. Walk me through the IRR calculation for this specific well. To calculate the IRR, you need the upfront investment, which is the $10 million D&C Costs here. But since the company has an 80% Working Interest, it’s $8 million.",
    "sampleAnswer": "After that, you forecast production, which starts at 1,000 * 365 = 365,000 Barrels of Oil per year\nand then declines by 20% per year.\nYou reduce the remaining amount of oil by 365,000 Barrels in the first year and then keep\nreducing it by the annual production until it reaches ~0.\nMultiply the annual production by the assumed oil price(s) to determine revenue and distribute\n10% to the Royalty holder and 20% to the Working Interest holder that owns the other 20%.\nTo calculate the pre-tax cash flows, deduct expenses such as the Lease Operating Expense\n(LOE), Production Taxes, and Transportation/Processing Costs, and multiply each by the same\n80% to reflect the Working Interest.\nIf you want to factor in corporate-level taxes, multiply each pre-tax cash flow by (1 – Tax Rate)\nbefore feeding it into the IRR calculation; if not, you can use the pre-tax cash flows with the\nD&C costs as the first negative to represent the upfront investment."
  },
  {
    "id": "mi-268",
    "sourceNumber": 4,
    "page": 173,
    "question": "You are working with an E&P client company that claims it is undervalued. According to its internal model, its Net Asset Value is $5 billion, but its Current Equity Value is only $3 billion.",
    "sampleAnswer": "The company’s Reserve Life Ratio is 7.0, and its Production Replacement Ratio is 80%. Is the\ncompany correct about being undervalued?\nThe most likely issue is that the company is incorporating more than just Proved Reserves into\nits internal valuation and attributing significant value to the more speculative Probable and\nPossible Reserves.\nThis is because the Reserve Life Ratio is based on Proved Reserves / Annual Production, and it’s\non the low side (below 10.0), while the Production Replacement Ratio indicates the company is\nproducing more than it is finding each year. These are both negative signs for the valuation.\nSo, either the company’s cash flow forecast differs significantly from the market’s expectations,\nor it is attributing far more value to its more speculative reserves. The company might be\nundervalued, but it could also be making overly aggressive forecasts."
  },
  {
    "id": "mi-269",
    "sourceNumber": 5,
    "page": 174,
    "question": "Can you explain successful efforts and full cost accounting and their valuation impact?",
    "sampleAnswer": "The main difference is that unsuccessful exploration is expensed for a successful efforts\ncompany but capitalized and amortized over time for a full-cost company.\nSuccessful exploration that results in productive oil wells is capitalized under both standards.\nSuccessful efforts companies tend to have lower Operating Income, Net Income, and PP&E,\nwhile full-cost companies have higher DD&A (Depletion, Depreciation & Amortization) and\nmore frequent write-downs and impairments to adjust their PP&E values.\nTo adjust for these issues, you often use the EBITDAX metric, which starts with EBITDA and\nadds back the Exploration expense on the Income Statement to normalize for these treatments."
  },
  {
    "id": "mi-270",
    "sourceNumber": 6,
    "page": 174,
    "question": "A company is natural gas-dominant and has 10 billion cubic feet equivalent (10 Bcfe) in Proved Reserves. It produces 600 million cubic feet (600 MMcf) of natural gas and 50,000 barrels of oil (50 MBbl) annually. What is its approximate Reserve Life Ratio? For conversion purposes based on energy content, 1 Bbl of oil = 6 Mcf of natural gas, and 1 MBbl of oil = 6 MMcf of natural gas.",
    "sampleAnswer": "Therefore, 50 MBbl oil = 300 MMcf of natural gas, or 300 million cubic feet of gas.\nWe can add this to the natural gas production and say the company produces 900 million of\n“natural gas equivalent,” or 900 MMcfe, per year.\nThe Proved Reserves are 10 Bcfe or 10,000 Mmcfe, so the Reserve Life Ratio is 10,000 / 900 =\n~11.1, which you can round to “Just above 11” (mental math: 900 * 10 = 9,000 and 900 * 11 =\n9,900, and 10,000 is just above this number)."
  },
  {
    "id": "mi-271",
    "sourceNumber": 7,
    "page": 174,
    "question": "How would you select comparable public companies for an E&P company?",
    "sampleAnswer": "You still screen by geography, industry, and financial criteria, but the financial criteria typically\nrelate to the companies’ Proved Reserves or Annual Production rather than Revenue or\nEBITDA (due to commodity price fluctuations).\nYou should never compare pure-play E&P companies to integrated/diversified oil & gas\ncompanies; if an E&P company operates in other verticals, split it into parts or find other\ncompanies with a similar mix.\nYou must be careful with the geographic screens because of U.S. GAAP vs. IFRS differences,\nespecially around leases; it’s normally best not to mix U.S. and non-U.S. companies."
  },
  {
    "id": "mi-272",
    "sourceNumber": 8,
    "page": 175,
    "question": "How would you value a midstream company, such as an oil & gas pipeline operator?",
    "sampleAnswer": "Forecasts are based on the company’s gathering capacity, utilization rate, and average gathering fee, with OpEx based on both capacity and volumes processed; CapEx is linked to maintenance needs for existing pipelines and any expansion efforts.\nYou can still use a traditional DCF model and multiples such as TEV / EBITDA, but you could also\nuse a Dividend Discount Model since MLPs distribute high percentages of their Distributable\nCash Flow.\nAlso, you could look at slightly different metrics and multiples, such as Distribution Yields, Cash\nAvailable for Distribution (CAFD), and P / CAFD; these are important because different amounts\nmight be distributed to the different investor groups (see below)."
  },
  {
    "id": "mi-273",
    "sourceNumber": 9,
    "page": 175,
    "question": "How does the MLP structure used for many midstream companies in the U.S. affect their valuation?",
    "sampleAnswer": "There are no corporate-level taxes if the company complies with the MLP requirements in the\nU.S., which changes the valuation, and the General Partner / Limited Partner split means that\nthe distributions for each group might differ.\nTherefore, the company might be worth different amounts to different groups depending on\nthe rules around these distributions, which are specified in the partnership agreement."
  },
  {
    "id": "mi-274",
    "sourceNumber": 10,
    "page": 176,
    "question": "How would you value a downstream company like an oil refinery operator?",
    "sampleAnswer": "Valuation is standard and uses the DCF and normal multiples, such as TEV / EBITDA and P / E.\nThe differences lie in the forecasts: Cash flows are based on factors such as the number of\nrefineries, average capacity, utilization rate, and refining margins.\nPower & Utilities\nThe Power & Utilities group in\ninvestment banking is somewhat\nspecialized but far less so than\ngroups like Oil & Gas, FIG, or Real\nEstate.\nYou can translate that as: “There are\na few valuation, forecasting, and\naccounting differences, but many of\nthe same methodologies and\nmultiples still apply.”"
  },
  {
    "id": "mi-275",
    "sourceNumber": 1,
    "page": 176,
    "question": "Can you explain the main verticals within power & utilities and how valuation differs?",
    "sampleAnswer": "One common split is regulated utilities for electricity, gas, and water, independent power producers (unregulated), and multi-utilities that do a bit of everything.\nUnregulated independent power producers are standard companies that buy fuel/raw\nmaterials, turn it into electricity, and sell it; some of the metrics differ, but the valuation\nmultiples and approach (e.g., a basic DCF) are the same.\nRegulated utility companies are quite different because they operate based on a Rate Base (Net\nPP&E with some adjustments), have an allowed Debt / Total Capital Ratio, and an allowed ROE,\nso they must “back into” the utility rates they are allowed to charge based on that.\nYou can still use a DCF to value them, but alternative multiples, such as TEV / Rate Base and TEV\n/ Power Capacity (in $ per MW), are common; multiples such as P / BV and P / TBV are also\nimportant due to the Equity contribution to the Rate Base."
  },
  {
    "id": "mi-276",
    "sourceNumber": 2,
    "page": 177,
    "question": "Walk me through how you would determine the rates charged by a regulated electric utility company with the following profile (financials are in millions): • Rate Base: $2,000 • Allowed Debt / Total Capital: 50% • Authorized ROE: 12% • Pre-Tax Cost of Debt: 6% • Operating & Maintenance Expense: $60",
    "sampleAnswer": "• Depreciation: $20\n• Electricity Sold: 1,500 GWh\nTo create this forecast, start with the company’s Equity and ROE and “back into” the rate it can\ncharge customers.\nIn this case, the Rate Base is $2,000, and the Debt / Total Capital is 50%, so the company has\n$2,000 * (1 – 50%) = $1,000 in Equity. A 12% Authorized ROE means the “allowed” Net Income\nis $1,000 * 12% = $120.\nAssuming a 25% tax rate, the Pre-Tax Income is $120 / (1 – 25%) = $160.\nThe company has $1,000 of Debt and pays 6% interest per year on it, so we add the $60 of\nInterest to this $160 and then add the O&M of $60 and Depreciation of $20. $160 + $60 + $60 +\n$20 = $300 million since the financials are all in millions.\nTherefore, this company can charge $300 million / 1,500 GWh, or $0.20 / kWh (mental math:\nthe financials are in millions, but gigawatts are in billions; if you divide 1 million by 1 billion, you\nshould get 1,000 in the denominator, corresponding to kilowatts. Also, 300 is 20% of 1,500, so\nthe result of the numerical division should be 0.20)."
  },
  {
    "id": "mi-277",
    "sourceNumber": 3,
    "page": 177,
    "question": "What advantages do multiples such as TEV / Rate Base or TEV / Power Capacity provide over TEV / EBITDA?",
    "sampleAnswer": "Essentially, these multiples let you analyze power & utility companies based primarily on their\nability to distribute and transmit electricity/gas/water, independent of their capital structures,\noperational spending, and local regulations.\nYes, TEV / EBITDA is supposed to be “capital structure-neutral,” but it’s not quite that way in\nthis sector because companies’ Net Incomes are constrained by their Equity and Authorized\nROE – which reflects capital structure and regulatory decisions. EBITDA is strongly linked to Net\nIncome as a result.\nEBITDA might be better if you do want to factor in these issues because they are important\nvalue drivers for the comparable companies in your set."
  },
  {
    "id": "mi-278",
    "sourceNumber": 4,
    "page": 178,
    "question": "Suppose you are valuing a regulated multi-utility company that distributes electricity, gas, and water. If you built a Sum-of-the-Parts valuation for it, which segment would you expect to be valued at the highest multiples?",
    "sampleAnswer": "It’s impossible to answer this question without knowing each segment's Rate Base, capital\nstructure, and Authorized ROE.\nGenerally, you would expect the segment with the highest ROE to be valued at the highest\nmultiples because a higher ROE means margins and growth can be higher.\nIf these numbers are similar for each segment, you would expect the one with the lowest\noperating costs to be valued at the highest multiples because it has more scope to increase its\nrates eventually.\nYou would also have to factor in each segment’s expansion plans and CapEx requirements\nbecause, as in other sectors, higher growth in the fundamentals (Rate Base and Power Capacity)\nshould drive higher valuations."
  },
  {
    "id": "mi-279",
    "sourceNumber": 5,
    "page": 178,
    "question": "Would you expect an independent power producer (IPP) to be valued at higher or lower multiples than a regulated utility focusing on distribution?",
    "sampleAnswer": "It depends on the current market environment. If power prices are relatively high and fuel costs\nand sources are reasonable, the IPP will benefit disproportionately because it is not constrained\nby an “Authorized ROE” and can charge whatever rates it wants.\nBut when power prices fall, or fuel prices increase by more than electricity (i.e., the “gross\nutility margin” or “spark spread,” “dark spread,” or “quark spread” falls), IPPs tend to do poorly\nbecause the lack of regulated prices hurts their profits.\nIn short, IPP firms tend to have higher Betas than regulated utilities.\nPrivate Capital Advisory (Secondaries)\nThe Private Capital Advisory group within\ninvestment banks facilitates all types of\n“secondaries,” i.e., deals in which a private\nequity firm sells a stake in a fund or a specific\nportfolio company to another PE firm.\nDepending on your group’s focus (GP-led vs.\nLP-led), you can expect to work on company-\nlevel deals, similar to M&A, or fund-level\ntransactions, which require a different skill\nset."
  },
  {
    "id": "mi-280",
    "sourceNumber": 1,
    "page": 179,
    "question": "How do LP-led and GP-led secondaries transactions differ?",
    "sampleAnswer": "Both types of transactions relate to buying stakes in existing funds or assets rather than\ninvesting capital in a new fund that is currently raising money.\nIn an LP-led deal, one investor buys a stake in an entire fund, such as a $50 million commitment\nthat a pension fund wants to sell out of a $6 billion total fund commitment. This requires both a\nfund-level analysis and a review of each asset the fund holds.\nIn a GP-led deal, the investor buys specific assets from an existing fund, such as 1 – 2 portfolio\ncompanies. The GP first sets up a continuation fund to transfer the asset(s), and the secondary\ninvestors provide capital to that continuation fund. The continuation fund then uses this capital\nto purchase the asset(s) from the existing fund, and existing LPs have the option to reinvest\ntheir proceeds from this sale into the continuation fund if they want to continue owning stakes\nin these assets."
  },
  {
    "id": "mi-281",
    "sourceNumber": 2,
    "page": 179,
    "question": "You are evaluating a $100 million commitment in a private equity fund with a 2.0x TVPI multiple, a 0.2x DPI, and a 1.8x RVPI. What factors could influence the pricing of this stake?",
    "sampleAnswer": "First, it depends on the timing of the fund. If this is a growth-oriented fund early in its lifecycle,\nsuch as Year 3 of 10, it might be acceptable to have a total value heavily skewed toward\nunrealized gains. On the other hand, if it’s a mature fund near the end of its lifecycle, these\nmultiples suggest that it may be exaggerating its performance.\nSecond, it depends on asset-level performance and valuation. For optimal pricing, each asset\nshould demonstrate strong performance and use valuation multiples in line with comparable\npublic companies and transactions; for a secondaries investor to earn a 1.5x multiple, the fund\nmust eventually reach a 3.0x TVPI, which requires a substantial valuation increase.\nThird, it depends on the GP’s track record. Some GPs consistently generate 2.5 – 3.5x TVPI\nthrough their funds, while others are less consistent with performance and valuations. A\nstronger track record and more conservative valuation history would improve the pricing of this\nstake."
  },
  {
    "id": "mi-282",
    "sourceNumber": 3,
    "page": 180,
    "question": "Why might a PE fund’s Limited Partners liquidate their stakes early, even if the fund has performed well?",
    "sampleAnswer": "First, there can be a denominator effect, where an institution is overly exposed to private\nequity because public market valuations have recently fallen; institutions often rebalance their\nportfolios by selling PE fund stakes in this scenario.\nSecond, there may be investor-specific reasons, such as a change in the head of investments at\nan institution, which often triggers the divestment of non-core positions and the liquidation of\nPE fund stakes.\nFinally, there might be a strategy shift because of new targeted returns or\nbureaucratic/political reasons, such as reducing PE exposure due to recent negative news."
  },
  {
    "id": "mi-283",
    "sourceNumber": 4,
    "page": 180,
    "question": "Why might the GPs of a PE firm set up a continuation fund?",
    "sampleAnswer": "The most common reasons for setting up continuation funds include:\n1) 2) To return capital to the existing LPs.\nTo extend the harvest runway on a performing asset – This allows the GP to continue\ncreating value and generating returns from a strong-performing asset instead of selling\nearly due to the normal fund timeline.\n3) To enhance carry opportunities and annual fee revenue – Continuation funds typically\nreset fund economics, allowing the GP to earn additional management fees and carried\ninterest.\n4) To facilitate further value creation through new unfunded commitments – This is\nespecially useful when a company is planning large follow-on investments or add-on\nacquisitions.\n5) To introduce new LPs to continuation funds – This is useful because many investors\nhave both secondary and primary funds."
  },
  {
    "id": "mi-284",
    "sourceNumber": 5,
    "page": 181,
    "question": "From a banker’s perspective, what are the differences between LP-led and GP-led secondaries transactions?",
    "sampleAnswer": "GP-led transaction processes are like typical M&A processes, where advisors help the GPs\ncreate marketing materials, conduct financial analysis, find potential buyers, and coordinate the\nprocesses to close deals.\nTherefore, fees are high, and the deals can be somewhat cyclical, depending on the M&A and\nIPO markets. There tends to be a higher volume of GP-led transactions when there is a lot of\ndry powder, and markets are stable/certain.\nLP-led transactions are more of a “volume business,” in which advisors act like middlemen\nbetween the buyers and sellers.\nBankers still coordinate processes and due diligence but do not create company-specific\nteasers, CIMs, or company-level models.\nFees are lower, but transaction sizes are often quite large, and the LP-led transaction volume\nmay be more stable because there tends to be consistent demand from sellers and buyers\nregardless of the market cycle.\nPrivate Companies\nThe “Private Companies” category spans a huge range of\nfirms, from companies that are so large they could be\npublic (e.g., SAS Institute) to high-growth tech startups to\nyour local coffee shop.\nMost of the accounting and valuation differences apply to\n“small business” private companies, as they are much riskier than public companies and have\nmuch more uncertain cash flows.\nWe cover the startup-oriented questions, such as SaaS metrics, in the section on TMT."
  },
  {
    "id": "mi-285",
    "sourceNumber": 1,
    "page": 181,
    "question": "How are private companies different from public companies?",
    "sampleAnswer": "Private companies do not have shares you can buy and sell on the stock market; as a result,\ntheir liquidity is far lower, and they don’t have the same reporting requirements as public\ncompanies.\nPrivate companies often have non-standard financial statements that you must adjust, and you\noften discount their valuations due to a lack of liquidity, dependence on key people, and, in\nsome cases, a much smaller size than public companies.\nIn M&A and leveraged buyout deals, the purchase price for a private company is linked to an\nEnterprise Value-based valuation multiple rather than a share-price premium, and deals are\ntypically done on a cash-free, debt-free basis. Part of the price may also be deferred or\ncontingent on future performance."
  },
  {
    "id": "mi-286",
    "sourceNumber": 2,
    "page": 182,
    "question": "How might you adjust a private company's financial statements in a valuation or deal analysis?",
    "sampleAnswer": "First, note that you make major adjustments mostly for “small business” private companies;\nventure-backed startups and large, established private companies should already have\nGAAP/IFRS-compliant statements.\nFor small businesses, you often re-classify revenue and expenses into more standard categories\n(e.g., Revenue, COGS, SG&A, R&D, and S&M), you re-classify the “Owner’s Draw” or\n“Dividends” as employee compensation, and you remove intermingled personal expenses.\nYou may also apply a different tax rate, such as the acquirer’s or the standard rate for public\ncompanies in the country, if the small business has been paying taxes at the owner’s personal\nrate.\nFinally, you might apply a “Key Person Discount” to the future cash flows under the assumption\nthat the most important person(s) might leave in the future, resulting in lower sales."
  },
  {
    "id": "mi-287",
    "sourceNumber": 3,
    "page": 182,
    "question": "At a high level, how is private company valuation different?",
    "sampleAnswer": "Assuming you are valuing a “small business,” you start the valuation after making the financial statement adjustments described in the previous question. In the valuation itself, you often discount the output of certain methodologies because private companies have illiquid shares, tend to be smaller than public companies, and are often dependent on key individuals.\nThis translates into literal discounts on the multiples from the Public Comps (e.g., 20 – 40%\nreductions), a higher Discount Rate in the DCF, and a “haircut” Terminal Value to reflect the risk\nof the company shutting down or declining.\nTrue small businesses are worth significantly less than public companies with Boards and\nprofessional managers, so the EBITDA and cash flow multiples should be much lower.\nYou would not make these adjustments to the same degree for VC-backed startups or\nlarge/mature private companies."
  },
  {
    "id": "mi-288",
    "sourceNumber": 4,
    "page": 183,
    "question": "How does the WACC calculation change for a private company?",
    "sampleAnswer": "You still calculate the Risk-Free Rate, Equity Risk Premium, Cost of Debt, and Cost of Preferred\nStock in the same ways.\nIf you cannot determine the Cost of Debt from the firm’s filings, you could use the comparable\npublic companies’ costs or estimate its credit default spread and add it to the Risk-Free Rate to\nestimate the Cost of Debt.\nThe Cost of Equity calculation changes because private companies do not have share prices or\nmarket caps, and their Equity tends to be riskier than public companies’.\nSo, you often use higher values for Beta when calculating the Cost of Equity (i.e., you may add a\nrisk or illiquidity premium), and you use the median capital structure of the comparable public\ncompanies when re-levering Beta and calculating WACC.\nPrivate companies do not have easy-to-determine current capital structures or historical Betas,\nso you must rely on the data from comparable companies."
  },
  {
    "id": "mi-289",
    "sourceNumber": 5,
    "page": 184,
    "question": "How might the acquisition of a private company be different from a public company deal?",
    "sampleAnswer": "You still combine the financial statements, create Goodwill based on the Equity Purchase Price\nminus the seller’s Book Value (and other adjustments), factor in the new shares, new interest\non Debt, and foregone interest on Cash, and calculate EPS accretion/dilution.\nThe main difference is that the purchase price is based on a multiple, such as TEV / EBITDA or\nTEV / Revenue, instead of a share-price premium. Also, deals are typically done on a cash-free,\ndebt-free basis, with the Sources & Uses schedule based on the Purchase Enterprise Value.\nBuyers frequently use “Earnouts” to defer some of the purchase price and make it contingent\non the seller achieving certain financial goals.\nTerms such as Escrows and Management Retention Pools are also common in many private\ncompany acquisitions for similar reasons: The Buyer wants to reduce the risk and ensure the\nmanagement teams of both companies are aligned.\nProject Finance & Infrastructure\nProject Finance deals with the debt\nfunding for infrastructure assets, such\nas power plants, airports, toll roads,\nand mines. It’s like DCM or LevFin but\nfor these assets specifically.\nMeanwhile, infrastructure investing is\nabout the equity side: Firms raise\ncapital from outside investors and then\nuse it to acquire existing infrastructure\nassets and develop new ones.\nThese groups are highly specialized, just like FIG, Oil & Gas, and Real Estate, so we have a\nseparate course that covers the topic and includes more detailed questions."
  },
  {
    "id": "mi-290",
    "sourceNumber": 1,
    "page": 184,
    "question": "How does Project Finance differ from Corporate Finance?",
    "sampleAnswer": "Here’s a complete answer in tabular format:"
  },
  {
    "id": "mi-291",
    "sourceNumber": 2,
    "page": 185,
    "question": "Walk me through an acquisition model for a “brownfield asset” that already exists.",
    "sampleAnswer": "You start by making assumptions for the purchase price, start/end dates, and timeline,\nincluding “flags” for different operational phases.\nThen, you forecast the revenue, expenses, and cash flows, which are linked to drivers such as\nthe electricity generated, ore mined, or traffic throughput, and you focus on the “Cash Flow\nAvailable for Debt Service” (CFADS), defined as EBITDA – Cash Taxes – Maintenance CapEx +/-\nChange in Working Capital +/- Reserve Contributions and Withdrawals.\nNext, you size and sculpt the Debt, typically based on a minimum Debt Service Coverage Ratio\n(DSCR) or Loan Life Coverage Ratio (LLCR). You “back into” the starting Debt based on the Debt\nService in each period and its maturity (i.e., the date on which the balance should reach $0).\nFinally, you calculate the returns by deducting the Debt Service from the CFADS to determine\nthe Cash Flow to Equity in each period; the IRR and MOIC calculations are based on these\nnumbers and the initial Equity investment."
  },
  {
    "id": "mi-292",
    "sourceNumber": 3,
    "page": 185,
    "question": "How does the modeling process differ for a “greenfield asset” that does not yet exist?",
    "sampleAnswer": "Most of the process above is the same, but there are additional steps in the beginning to\nforecast the development period, including the Debt and Equity the sponsor draws on to\ncomplete the construction. Interest and fees in this period are normally capitalized to the\nConstruction Loan balance or paid for with Equity since no cash flows exist to fund them.\nOnce the development is done, you assume the Construction Loan is refinanced and replaced\nwith a “Permanent Loan,” typically sized and sculpted based on the targeted DSCR or LLCR.\nAlso, the initial Construction Loan’s size may be linked to this Permanent Loan so that the\nrefinancing does not impact net cash flow."
  },
  {
    "id": "mi-293",
    "sourceNumber": 4,
    "page": 186,
    "question": "How would you forecast the revenue and expenses for an individual power asset, such as a natural gas plant?",
    "sampleAnswer": "The top-line driver is the plant’s Capacity, typically measured in Megawatts (MW) or Gigawatts\n(GW). The Energy Generation is then based on the Capacity * Hours in Period * Capacity Factor,\nwhich is often ~50%+ for gas plants (i.e., they produce electricity for about half the day).\nRevenue is based on a mix of Capacity Payments (fixed) and Energy Payments (variable); the\nbaseline rates and escalations are often specified in power purchase agreements (PPAs).\nExpenses include labor, operations & maintenance, and natural gas fuel costs. Labor and fuel\ncosts are variable, while the O&M expense is usually linked to Capacity and an escalation factor.\nBesides that, there are also Depreciation and Interest expenses, Taxes, and items such as\nMaintenance CapEx and the Change in Working Capital; these tend to be linked to Revenue,\nCapacity, or the purchase price and Debt used in the deal."
  },
  {
    "id": "mi-294",
    "sourceNumber": 5,
    "page": 186,
    "question": "Consider three infrastructure assets: An airport, a utility-scale solar plant governed by a 10- year PPA, and a utility-scale solar plant governed by merchant pricing. How would you compare the risk and potential returns of each one?",
    "sampleAnswer": "The solar plant governed by a 10-year PPA has the lowest risk and potential returns, the solar\nplant governed by merchant pricing has higher risk and potential returns, and the airport has\nthe highest risk and potential returns.\nA PPA locks in electricity prices and escalations at certain levels over many years, reducing the\nrisk if market prices fall and limiting the upside if they increase.\nWith merchant pricing, electricity prices are linked to the market rates, which means greater\npotential upside and downside.\nThe airport has the highest risk and potential returns because even a small airport is vastly\nmore complex to build and operate than any solar plant, and delays and budget overruns are\nextremely common.\nHowever, the potential upside is also higher because airports can increase their passenger\ntraffic and fees at any rate; they are not “locked into” specific growth rates. They can even\nexpand by adding new terminals and runways if there's enough demand."
  },
  {
    "id": "mi-295",
    "sourceNumber": 6,
    "page": 187,
    "question": "Why is Debt often “sized and sculpted” based on the future cash flows of assets in the infrastructure sector?",
    "sampleAnswer": "Many assets in this sector have predictable cash flows due to contracts such as power purchase\nagreements (PPAs) that lock in prices and even volumes in some cases.\nAlso, linking the Debt size, interest, and principal repayments to the future cash flows reduces\nthe risk for lenders and aligns the interests of all parties: There’s more repayment when cash\nflows are stronger and less when cash flows are weaker.\nEquity investors also favor this approach because, in most cases, it means they can use more\nDebt to fund their deals, which increases their returns if the deals perform well. They can use\nmore Debt because this approach gives the asset “credit” for its future cash-flow growth."
  },
  {
    "id": "mi-296",
    "sourceNumber": 7,
    "page": 187,
    "question": "What are the DSCR and LLCR, and how do you use them in this Debt sculpting/sizing process?",
    "sampleAnswer": "The DSCR equals the Cash Flow Available for Debt Service / (Interest Expense + Scheduled\nPrincipal Repayments + Other Loan Fees), and it represents how easily the asset’s cash flows\ncan pay for the required Debt Service in each period.\nCFADS definitions vary, but it normally equals EBITDA – Cash Taxes – Maintenance CapEx +/-\nChange in Working Capital +/- Reserve Contributions and Withdrawals.\nThe LLCR is the Present Value of the CFADS Over the Loan’s Remaining Tenor / Current Debt\nbalance.\nIn PF models, you use the DSCR and LLCR to size the initial or refinanced Debt balances, “stress\ntest” models, and assess the risks of budget overruns, delays, and operational problems."
  },
  {
    "id": "mi-297",
    "sourceNumber": 8,
    "page": 187,
    "question": "If you can use simple formulas to sculpt and size the Debt based on the DSCR and LLCR requirements, why are they complex to implement in Excel?",
    "sampleAnswer": "First, there’s an inherent circular relationship if you’re using after-tax numbers and factoring in\nthe Interest tax deduction (the future cash flows determine the Debt balance, but the Debt\nbalance also determines the future cash flows due to the Interest deduction); you can use Goal\nSeek or VBA to resolve this.\nSecond, the issuance and maturity dates and interest rate on the Debt may vary, making it\nmore complicated to size the Debt based on the proper discount factors.\nFinally, additional features like Cash Flow Sweeps, Refinancings, Debt Service Reserves, and a\nRevolver could affect the cash flows and Debt Service in each period, making the exercise more\ndifficult."
  },
  {
    "id": "mi-298",
    "sourceNumber": 9,
    "page": 188,
    "question": "From a lender’s perspective, how would you evaluate infrastructure assets and determine “worst-case outcomes”?",
    "sampleAnswer": "You normally consider everything that could go wrong with an asset and create scenarios to\nassess the cash flow reduction and its impact on the initial Debt balance you would fund.\nFor example, for a solar development, you might assume cost overruns or delays during\nconstruction, higher-than-expected expense inflation, or availability problems resulting in\noperational downtime. A “worst case” scenario might combine all these to greatly reduce the\nasset’s cash flows.\nIf the Debt is not sized/sculpted based on future cash flows, this might look more like a\ntraditional credit analysis, where you examine the covenants against future downside case\nperformances."
  },
  {
    "id": "mi-299",
    "sourceNumber": 10,
    "page": 189,
    "question": "Why do Construction Loans create circular references in models, and how can you avoid or eliminate them?",
    "sampleAnswer": "A Construction Loan creates circular references because the Issuance and Commitment Fees\ndepend on the maximum Loan size, but the maximum Loan size depends on these fees because\nthey’re capitalized to the loan principal during construction and represent part of the total\nfunding required for the asset.\nYou can resolve this by ignoring the fees and interest during construction (IDC) in the Max Loan\nSize calculation or, more accurately, by using a copy/paste macro to feed the hard-coded Total\nDevelopment Costs (including the fees and IDC) into the model.\nUsing the average Construction Loan balance to calculate the IDC also creates circular\nreferences, but you can easily avoid this by using the beginning balance in each period.\nReal Estate (Properties)\nThe questions in this section are about individual properties – not entire real estate companies,\nREITs, homebuilders, gaming/lodging companies, or anything else like that.\nTherefore, they are more relevant for roles at real estate private equity, real estate lending, and\nreal estate development firms. If you’re interviewing with a real estate investment banking\nteam, it helps to know the basics, but you’re more likely to get questions about REITs."
  },
  {
    "id": "mi-300",
    "sourceNumber": 1,
    "page": 189,
    "question": "Explain the main property types and how they differ.",
    "sampleAnswer": "Here’s a summary table:\nThe main types are office, industrial, retail, and multifamily properties; others include\ncondominiums, hotels, and variants like data centers and healthcare properties.\nOffice, industrial, and retail properties have businesses as tenants and offer long-term leases of\n5 – 10 years. The lease terms are highly variable and often include different rental rates, rental\nescalations, free months of rent, expense reimbursements, and tenant improvements.\nIndustrial properties can be constructed more quickly and tend to have fewer tenants, while\noffice and retail properties take more time and money and tend to have more tenants.\nMultifamily properties have individuals as tenants and offer short-term leases of 1 year in most\ncases, with uniform lease terms except for the rent.\nHotels are even shorter-term than multifamily, with guests that stay for an average of a few\ndays; daily rates are based on the room sizes.\nFinally, condominiums are different from everything else because they are sold to individuals\nrather than rented out, and developers typically aim to pre-sell them during the construction\nperiod to reduce risk."
  },
  {
    "id": "mi-301",
    "sourceNumber": 2,
    "page": 190,
    "question": "What is a property’s Net Operating Income, and why is it important?",
    "sampleAnswer": "Net Operating Income, or NOI, represents the property’s cash flow from operations on a\ncapital structure-neutral basis before most of the capital costs (“most” because the treatment\nof the Reserves is inconsistent).\nNOI equals the property’s revenue minus operating expenses and property taxes, and it\nexcludes interest expense, debt principal repayments, and capital costs such as Tenant\nImprovements, Leasing Commissions, and Capital Expenditures (but it may partially reflect\nthese if you deduct the Reserves when calculating it).\nAlso, NOI excludes corporate-level taxes because properties are typically owned by pass-\nthrough entities such as partnerships, REITs, or LLCs that pass on income and gains and losses\nto individual shareholders, who will be taxed at their personal rates.\nNOI lets you compare and value different properties, like EBITDA for normal companies."
  },
  {
    "id": "mi-302",
    "sourceNumber": 3,
    "page": 190,
    "question": "What is the “Cap Rate,” and how do you use it in real estate?",
    "sampleAnswer": "The Cap Rate, or Capitalization Rate, equals the stabilized forward NOI of a property divided\nby its price (the asking price or the actual sale price). For example, if the property generates $5\nmillion in NOI next year and its asking price is $100 million, the Cap Rate is 5%.\nThe Cap Rate is the reciprocal of a valuation multiple; this 5% Cap Rate corresponds to a 20x\nmultiple since 1 / 5% = 20.\nYou use the Cap Rate to determine the purchase price and exit price of a property in\ninvestment analysis.\nTypically, you calculate the property’s NOI, select a range of Cap Rates based on market data\nfor similar properties in the area, and apply those rates to estimate this property’s value."
  },
  {
    "id": "mi-303",
    "sourceNumber": 4,
    "page": 191,
    "question": "How can property acquisitions use 60% or 70% leverage? Private equity firms do not use that much leverage for normal companies in leveraged buyouts.",
    "sampleAnswer": "A few factors explain this:\n• High Margins and Cash Flow Yields: Many properties have NOI margins (the rough\nequivalent of EBITDA margins) of 50%+ and high and predictable cash flow yields due to\nlow ongoing CapEx requirements.\n• Long Amortization Periods: Even if an investor only plans to hold a property for 5 – 10\nyears, the real estate loan might amortize over 20 – 30 years, which reduces the total\ndebt service each year.\n• Special Terms: Many real estate loans have “interest-only periods” in the first few years\nthat further reduce the total debt service when the property’s NOI is lower.\nAs a result, the Debt Service tends to be manageable even if a deal uses 60% or 70% leverage\n(and even higher numbers are possible in some deals)."
  },
  {
    "id": "mi-304",
    "sourceNumber": 5,
    "page": 191,
    "question": "Walk me through a property Pro-Forma and explain what it tells you. Assuming this is an office, industrial, or retail Pro-Forma, you start at the top with the Base Rental Income, which represents the total potential rental income if the property were 100% occupied at market rental rates.",
    "sampleAnswer": "Then, you adjust for items such as the Absorption & Turnover Vacancy, Concessions & Free\nRent, Expense Reimbursements, Loss to Lease, General Vacancy, and Percentage Rent, all of\nwhich bridge the gap between potential income and actual income, known as Effective Gross\nIncome or EGI.\nThen, you deduct Operating Expenses such as Management Fees, Maintenance & Repairs,\nUtilities, Insurance, Property Taxes, and the Capital Cost Reserves. EGI minus Operating\nExpenses equals Net Operating Income or NOI.\nYou then deduct the capital costs, such as Capital Expenditures, Tenant Improvements, and\nLeasing Commissions, to calculate the Adjusted NOI, and you deduct the Debt Service to\ncalculate the Cash Flow to Equity Investors.\nThe Pro-Forma is a combined Income Statement and Cash Flow Statement for a property that\nshows its historical and projected cash flow and ability to service Debt; the NOI line item also\ntells you what the property might be worth in an exit."
  },
  {
    "id": "mi-305",
    "sourceNumber": 6,
    "page": 192,
    "question": "How do NOI, Adjusted NOI, and Cash Flow to Equity differ?",
    "sampleAnswer": "Net Operating Income, or NOI, represents the property’s cash flow from operations before\nDebt Service and most capital costs (“most” because Reserves are treated inconsistently).\nAdjusted NOI equals NOI minus Net Capital Costs (i.e., TIs, LCs, and CapEx netted against the\nReserves used to cover them). It’s after the full operational expenses and capital costs but\nbefore the Debt Service.\nCash Flow to Equity equals Adjusted NOI minus the Cash Debt Service (Cash Interest and Debt\nPrincipal Repayments). It’s the “bottom line” because it represents what’s available for\ndistribution to the Equity Investors.\nAll these metrics exclude corporate taxes because properties are normally owned by pass-\nthrough entities (see question #2 above)."
  },
  {
    "id": "mi-306",
    "sourceNumber": 7,
    "page": 192,
    "question": "Walk me through a property development model (i.e., one where a new property is constructed and eventually sold).",
    "sampleAnswer": "You start by setting up assumptions for the total amount of land to purchase, the construction\ncosts, and the Debt and Equity to use (for example, Debt might fund 50% of the total costs).\nThen, you project the construction costs and initially draw on Equity to pay for them. Once you\nreach the maximum Equity, you switch to the Construction Loan and assume that interest and\nloan fees are capitalized during this construction period.\nOnce the construction period finishes, you assume that the Construction Loan gets refinanced\nwith a Permanent Loan, and you project the “lease-up period,” during which individual tenants\nmove into the property.\nYou create the standard Pro-Forma for this lease-up period as the property stabilizes, and you\nproject Debt Service on the Permanent Loan to calculate the Cash Flow to Equity Investors.\nThen, you assume the property is sold based on its forward, stabilized NOI and a range of Cap\nRates taken from market data.\nYou calculate the IRR to Equity Investors based on their Equity contributions during the\nconstruction period, the refinancing, the annual cash flows, and the sale of the property and\nrepayment of Debt."
  },
  {
    "id": "mi-307",
    "sourceNumber": 8,
    "page": 193,
    "question": "Walk me through a stabilized property acquisition model.",
    "sampleAnswer": "You start by assuming a purchase price for the property based on a Cap Rate or per-square-foot\nor per-square-meter figure, and you use certain percentages of Debt and Equity to fund the\ndeal.\nYou then make assumptions for the property’s revenue and expenses, sometimes projecting\nindividual tenant leases (for office/retail/industrial properties) and sometimes using higher-\nlevel assumptions such as the average rent or ADR (multifamily and hotels).\nYou forecast the Pro-Forma over several years, project the Debt Service, and assume a future\nexit based on a Cap Rate and the property’s stabilized forward NOI.\nFinally, you calculate the returns based on the initial Equity contribution, the Cash Flows to\nEquity, and the Exit Proceeds after Debt repayment."
  },
  {
    "id": "mi-308",
    "sourceNumber": 9,
    "page": 193,
    "question": "What are the 3 main valuation methodologies for properties?",
    "sampleAnswer": "The main methodologies are Cap Rates (the equivalent of valuation multiples), the DCF, and the\nReplacement Cost analysis.\nWith Cap Rates, you divide the property’s stabilized forward Net Operating Income by the\nselected Cap Rate, which is based on market data and recent sales in the area.\nWith the DCF, you project the property’s Unlevered Free Cash Flow (Adjusted NOI), calculate\nthe Terminal Value, discount everything back to the Present Value based on the Discount Rate,\nand add the PV of the Terminal Value and the PV of the UFCFs.\nWith the Replacement Cost methodology, you estimate the cost of building the entire property\nfrom the ground up today and compare that to the property’s asking price."
  },
  {
    "id": "mi-309",
    "sourceNumber": 10,
    "page": 194,
    "question": "Explain the waterfall returns schedule and why it is common in real estate.",
    "sampleAnswer": "A waterfall returns schedule splits up the Equity Proceeds from a deal in a way that is not\nproportional to the Equity contributed by each group.\nFor example, if the Investors contribute 80% and the Developers contribute 20%, normally the\nInvestors earn 80% of the Equity Proceeds, and the Developers earn 20%.\nWith a waterfall schedule, the Developers might earn 25% or 30% of the Equity Proceeds if the\ndeal performs well enough (based on the overall IRR or multiple).\nFor example, the Investors and Developers might earn proportionally to their Equity\ncontributed up to a 20% IRR, but the Developers might receive an extra 10% for the returns\nbetween a 20% and 30% IRR and another 10% for the returns above that 30% IRR.\nThese “Promotes” heavily incentivize the Developers to finish on time and within the budget\nbecause they earn a much higher IRR if the deal does well, but they don’t “cost” the Investors\nmuch since they contribute most of the Equity and still earn most of the returns.\nReal Estate Investment Trusts (REITs)\nReal estate investment trusts (REITs) are entities that\noperate, buy, develop, and sell real estate assets and\npay little-to-no corporate taxes if they comply with\ncertain requirements; dividends are distributed to the\nshareholders, who are taxed at their personal rates.\nReal estate investment banking groups cover REITs\nand execute many REIT deals, but they also advise\nother types of companies (homebuilders,\ngaming/lodging, real estate operating companies,\netc.).\nHowever, most of these other firm types are close to\n“normal companies”; REITs are the ones with\nspecialized accounting, valuation, and financial\nmodeling, so this section focuses on them."
  },
  {
    "id": "mi-310",
    "sourceNumber": 1,
    "page": 194,
    "question": "How do REITs operate, and what are their main requirements?",
    "sampleAnswer": "REITs operate, acquire, develop, and dispose of properties and continually raise Debt and\nEquity to fund these activities.\nREITs must distribute a high percentage of their Net Income as Dividends (90% in the U.S.),\nearn a high percentage of revenue from real estate-related sources (often 75%+), and maintain\na high percentage of real estate-related Assets (often 75%+).\nIf REITs follow these requirements, they pay no corporate income taxes (or very low taxes). In\nmany countries, there are also requirements related to the number of shareholders and the\nconcentration of shareholder ownership."
  },
  {
    "id": "mi-311",
    "sourceNumber": 2,
    "page": 195,
    "question": "How do you value an Equity REIT?",
    "sampleAnswer": "You still use Comparable Public Companies, Precedent Transactions, and the DCF, but the\nmultiples and approaches differ.\nMultiples such as TEV / EBITDA are still valid, but REIT-specific variations like Funds from\nOperations (FFO), Adjusted Funds from Operations (AFFO), and the P / FFO and P / AFFO\nmultiples are also used for U.S.-based REITs. IFRS-based REITs may be valued based on Book\nValue and P / BV, along with FFO alternatives such as EPRA Earnings.\nSome banks use the Levered DCF to value Equity REITs under the logic that changes in Debt and\nthe Debt Service are more predictable and important for REITs. But the Unlevered DCF is also\ncommon, and it requires more attention to the CapEx, Debt, and Equity assumptions than in\nother industries.\nFinally, the Net Asset Value (NAV) Model is important for U.S.-based REITs; you mark the REIT’s\nentire Balance Sheet to fair market value, subtract Liabilities from Assets, and divide by the\nshare count to calculate the NAV per Share, which you compare to the current share price."
  },
  {
    "id": "mi-312",
    "sourceNumber": 3,
    "page": 195,
    "question": "Walk me through a NAV Model for a REIT and explain when it is useful.",
    "sampleAnswer": "The NAV Model is best for U.S.-based REITs since they do not mark their properties to market\nvalue but instead record them at historical cost minus accumulated depreciation. It is most\nuseful when local property values in the REIT’s regions have changed recently.\nIn the NAV Model, you start by projecting the REIT’s 12-month forward NOI. Then, you divide it\nby an appropriate Cap Rate to calculate the Market Value of Gross Real Estate Assets.\nNext, you project non-rental income and divide it by a higher Cap Rate to value it, and you\nmake minor adjustments to the other Assets and add up everything to get the Market Value of\nAssets.\nNext, you mark the REIT’s Liabilities to Market Value, typically adjusting Debt based on current\ninterest rates, and subtract them from the Market Value of Assets to calculate the Net Asset\nValue.\nFinally, you divide this Net Asset Value by the share count to determine the NAV per Share,\nwhich you compare to the REIT’s current share price."
  },
  {
    "id": "mi-313",
    "sourceNumber": 4,
    "page": 196,
    "question": "What are the main differences between U.S.-based and IFRS-based REITs?",
    "sampleAnswer": "The biggest difference is that IFRS-based REITs record Fair Value Gains and Losses on their\nIncome Statements and mark their properties to fair market value on the Balance Sheet each\nyear, while U.S. REITs depreciate their properties based on their historical cost.\nAs a result, NAV is easy to calculate for IFRS-based REITs but requires data gathering and\nmultiple steps for U.S.-based REITs.\nAlso, different metrics may be used in place of FFO or AFFO, depending on the region; for\nexample, EPRA Earnings is the equivalent of FFO for European REITs."
  },
  {
    "id": "mi-314",
    "sourceNumber": 5,
    "page": 196,
    "question": "Why do REITs use Funds from Operations (FFO), and how do you calculate it?",
    "sampleAnswer": "REITs use Funds from Operations instead of Net Income because they constantly buy and sell\nproperties, creating Realized Gains and Losses that make Net Income fluctuate significantly.\nAlso, Depreciation and the Fair Value Gains and Losses (for IFRS-based REITs) are significant\nnon-cash charges that affect REITs’ Net Incomes.\nFFO equals Net Income + Real Estate-Related Depreciation & Amortization + Losses / (Gains) +\nImpairments; it’s an improved version of Net Income that removes these non-recurring and\nnon-cash items."
  },
  {
    "id": "mi-315",
    "sourceNumber": 6,
    "page": 196,
    "question": "How would you compare a Dividend Discount Model (DDM), Unlevered DCF, and Levered DCF for valuing a REIT?",
    "sampleAnswer": "Both the DDM and the Levered DCF take more time and effort to set up than an Unlevered DCF\nbecause you must project more than the REIT’s Unlevered Free Cash Flow – you also need to\nforecast its Debt and Equity balances and Interest Expense so that you can calculate its Net\nIncome, FFO, and Dividends.\nThese analyses won’t necessarily produce “better” or more consistent results than the\nUnlevered DCF, especially since they require more assumptions.\nHowever, they may be better in certain cases, such as if the REIT’s Dividends fluctuate\nsignificantly over time (an Unlevered DCF does not capture this nuance).\nThe Levered DCF and DDM are nearly identical for REITs; the main difference is that in a DDM,\nyou also project FFO and make Dividends a percentage of FFO instead of stopping at LFCF."
  },
  {
    "id": "mi-316",
    "sourceNumber": 7,
    "page": 197,
    "question": "At a high level, how does a REIT decide to issue Debt or Equity to fund its operations?",
    "sampleAnswer": "Debt is cheaper than Equity but has higher cash costs and comes with restrictions\n(“covenants”) that limit the REIT’s total indebtedness and operational activities. So, companies\ntend to raise as much Debt as they reasonably can before switching to Equity.\nTo determine the specific percentages, a REIT estimates its Costs of Debt and Equity and\ncreates operational scenarios to test its compliance with the covenants, such as a maximum\nDebt / EBITDA, in the different cases.\nThe REIT might then target the Debt and Equity percentages that allow for covenant\ncompliance while minimizing its Total Cost of Capital (WACC)."
  },
  {
    "id": "mi-317",
    "sourceNumber": 8,
    "page": 197,
    "question": "At a high level, how do REIT M&A deals differ from deals involving normal companies?",
    "sampleAnswer": "Most REIT M&A deals are 100% Stock or majority Stock because REITs tend to have low Cash\nbalances due to the Dividend requirements; also, most REITs are already highly leveraged and\ncannot issue much more Debt.\nThe Purchase Price Allocation and Balance Sheet adjustments differ because Accumulated\nDepreciation is eliminated, Real Estate Operating Assets are written up to fair market value,\nand new Intangible Assets such as Above- and Below-Market Leases and Acquired In-Place\nLease Value are created.\nThe treatment of the Seller’s existing Debt and Preferred Stock is also important because\nassuming vs. refinancing them vs. using a bridge loan could make a big difference.\nYou still calculate accretion/dilution, but it’s often based on metrics such as FFO per Share\nrather than EPS. You also use additional analyses, such as the Contribution Analysis and Value\nCreation Analysis, to assess how the Buyer’s share price might change after the deal."
  },
  {
    "id": "mi-318",
    "sourceNumber": 9,
    "page": 198,
    "question": "Why are the Contribution Analysis and Value Creation Analysis especially useful in REIT M&A Deals?",
    "sampleAnswer": "These analyses are useful because most REIT M&A deals are 100% Stock or majority Stock,\nmeaning that both the Buyer and Seller care about their ownership percentages and the value\nof the Buyer’s stock post-deal.\nThe Contribution Analysis lets you see if the Buyer and Seller have ownership percentages\nproportional to their financial contributions (e.g., 70% Revenue, FFO, and RE Assets from the\nBuyer and 70% ownership).\nIn the Value Creation Analysis, you assume the combined entity will trade at a higher EBITDA,\nFFO, or AFFO multiple based on a larger company in the space and then back into what the\nBuyer’s share price “should be” at this higher multiple, factoring in the Seller’s contributions\nand all the acquisition effects.\nThis analysis is highly speculative, but it’s useful for assessing whether it’s possible for the\nBuyer’s share price to increase post-acquisition (take the results with a grain of salt if the\nEBITDA multiple would have to double for the share price to increase)."
  },
  {
    "id": "mi-319",
    "sourceNumber": 10,
    "page": 199,
    "question": "How do REIT LBOs differ from leveraged buyouts of “normal companies”?",
    "sampleAnswer": "REIT LBOs are like traditional leveraged buyouts but with continual Dividend Recaps and Debt-\nFunded Add-On Acquisitions.\nREITs maintain their tax-free structure following a leveraged buyout, which means they must\ncontinue to issue high Dividends. And they continue to acquire and develop properties, so they\nmust keep raising capital.\nHowever, the private equity owners do not want to use their own Equity to fund these\nactivities, so most REITs shift to a higher percentage of Debt funding.\nInstead of the traditional returns sources of Multiple Expansion, EBITDA Growth, and Debt\nPaydown, REIT LBOs depend on Multiple Expansion, EBITDA Growth, and Dividends – as it is\nvirtually impossible to repay Debt or generate Cash during the holding period.\nAs a result, REIT leveraged buyouts are even more dependent on market timing than buyouts of\nnormal companies.\nRenewables\nDue to surging interest in renewable energy\nand environmental tech, renewable energy\ninvestment banking has attracted a lot of\nattention.\nBut it’s tricky to describe the sector because\nthere’s a ton of overlap with Project Finance\n& Infrastructure, Power & Utilities,\nIndustrials, and Technology / TMT.\nTherefore, even if you interview with a\nrenewables or clean energy team, you\nshould review the questions and answers\nfor these related sectors; we present below only questions that are specific to renewables."
  },
  {
    "id": "mi-320",
    "sourceNumber": 1,
    "page": 199,
    "question": "What are the main verticals within renewables, and how is valuation different at a high level?",
    "sampleAnswer": "If you go by deal activity, most sources divide the sector into solar, wind, biofuels,\nstorage/batteries, electric vehicles (EVs), and diversified/portfolio companies, with smaller\nareas for hydroelectric and geothermal energy, hydrogen, and carbon capture.\nWithin the energy segments, you can also divide companies into categories like power\nproduction, manufacturing, development, services, and transportation.\nFor valuation, you use mostly standard analyses and multiples (DCF, TEV / EBITDA, etc.), with\nslightly different metrics in some cases. The key drivers differ and might be closer to a power\ncompany, an industrials company, or even an oil & gas company, depending on the vertical.\nFor example, you might use multiples such as TEV / MW for renewable power producers to link\ntheir valuations to their power production capacities; metrics like the Cash Available for\nDistribution (CAFD) and Dividend Yield are also common for holding/portfolio companies."
  },
  {
    "id": "mi-321",
    "sourceNumber": 2,
    "page": 200,
    "question": "Can you explain the metrics and multiples commonly used to value renewable companies and their advantages?",
    "sampleAnswer": "The Enterprise Value / Megawatts (TEV / MW) multiple, based on the company’s total power\nproduction capacity, is common for solar and wind producers because it lets you separate a\ncompany’s “potential” from how it is currently utilizing and monetizing that potential.\nFor renewable asset holding companies, metrics such as the Dividend Yield, Cash Available for\nDistribution (CAFD), and Equity Value / CAFD are also important because renewable assets tend\nto offer high yields, with most spending in the form of upfront CapEx rather than going\noperating/maintenance expenses.\nSo, investors often treat these types of companies like MLPs in oil & gas or REITs in real estate,\neven though the legal/tax structures and requirements differ.\nIn the other verticals, the most common multiples are the usual TEV / Revenue, TEV / EBITDA,\nand P / E because the companies are standard manufacturing, service, or transportation firms."
  },
  {
    "id": "mi-322",
    "sourceNumber": 3,
    "page": 200,
    "question": "Suppose that you are valuing Solar Developer A and Solar Developer B, both of which have 2,000 MW of capacity and similar revenue and EBITDA levels.",
    "sampleAnswer": "Although both companies are developers, they hold their solar assets for the long term rather\nthan selling them to other companies.\nHowever, Solar Developer A trades at 30% higher multiples than Solar Developer B. What\nmight explain this?\nIf the capacity, revenue, and EBITDA figures are similar, the answer must be related to the\nindividual assets or their upfront development costs.\nWith the individual assets, the geography, the power purchase agreement (PPA) terms that\ndetermine electricity prices and escalations, and the debt and tax equity attached to each solar\nplant are critical.\nSo, one possible explanation is that Solar Developer A has much more favorable terms attached\nto its assets, such as PPAs with an average remaining term of 20 years rather than 10 years.\nSolar Developer A might also have a cost or timing advantage over Solar Developer B, such as\nthe ability to build plants at a lower $ / MW cost or complete them more quickly."
  },
  {
    "id": "mi-323",
    "sourceNumber": 4,
    "page": 201,
    "question": "How would you compare solar, onshore wind, and offshore wind assets at a high level?",
    "sampleAnswer": "Wind assets tend to be bigger, riskier, and more expensive than solar assets, partially because\nsolar installations could come in all shapes and sizes (rooftops on homes vs. utility-scale plants),\nwhereas “small-scale” wind does not exist in the same way.\nIf you had to rank them, onshore wind would be riskier and more expensive than solar, and\noffshore wind would be riskier and more expensive than onshore (offshore wind is notorious\nfor delays and budget overruns).\nThe power production and revenue potential of wind assets are also higher, which explains why\nthey often sell for higher $ / MW multiples – but the standard deviation of these multiples is\nalso greater."
  },
  {
    "id": "mi-324",
    "sourceNumber": 5,
    "page": 202,
    "question": "You are valuing a company in the biofuels and renewable natural gas (RNG) vertical. How would you think about the forecast and valuation?",
    "sampleAnswer": "It depends on whether the company is a producer or transporter and its legal/tax status.\nProducers are more like chemicals companies, profiting based on their realized prices and the\nraw materials and labor required for the end products. Standard valuation multiples and\nmethodologies still apply.\nTransporters are more like midstream (pipeline) companies in oil & gas, with forecasts linked to\ntheir capacity, utilization rates, gathering & transportation fees, labor, and maintenance CapEx.\nYou can still use the TEV / EBITDA multiple and the standard DCF, but anything that is MLP-\nbased tends to use the Distribution Yield, Distributable Cash Flow, and Dividend Discount\nModel because yields are critical for these firms.\nTechnology, Media & Telecommunications (TMT)\nThe Technology, Media & Telecommunications\ngroup at banks became one of the most popular\nover the past few decades as “software ate the\nworld.”\nSome of the biggest deals happen in this sector;\nmany involve brand-name companies everyone\nknows.\nFrom a technical perspective, however, not that\nmuch is different.\nIt’s good to know a few industry-specific metrics,\nbut valuation multiples and methodologies are\nlike those in the industrials, consumer/retail, and healthcare sectors."
  },
  {
    "id": "mi-325",
    "sourceNumber": 1,
    "page": 202,
    "question": "Can you explain the main verticals within TMT and the accounting and valuation differences?",
    "sampleAnswer": "The three main verticals are technology, media/entertainment, and telecom, and within\ntechnology, the main segments are software, internet, hardware, semiconductors, and IT\nservices.\nThere aren’t many significant accounting or valuation differences in these verticals, as the\nstandard multiples, metrics, and methodologies apply to most companies.\nThe main difference is that the operational metrics and drivers often differ, especially for\nsubscription-based companies and early-stage/unprofitable startups.\nIn addition to these new operational metrics (e.g., LTV / CAC, Churn Rate, ARPU, etc.),\naccounting concepts such as Net Operating Losses (NOLs) and Content Amortization can be\ncritical and will directly factor into methodologies such as the DCF."
  },
  {
    "id": "mi-326",
    "sourceNumber": 2,
    "page": 203,
    "question": "Let’s focus on the telecom segment. What differentiates a telecom company like a wireless carrier from a semiconductor or enterprise software company?",
    "sampleAnswer": "Both telecom and semiconductor companies tend to be capital-intensive, unlike traditional\nsoftware, which is more weighted toward labor expenses. Therefore, CapEx tends to be a\nhigher percentage of revenue for both telecom and semiconductor companies, assuming the\nsemis companies produce chips rather than just design them (e.g., TSMC, not Nvidia).\nBut telecom companies also tend to have inelastic demand and are heavily regulated, which\nmakes them different from both semiconductor and software companies – everyone needs\nmobile/phone service regardless of the economy, so governments regulate these services as\n“public goods.”\nThe valuation multiples and methodologies are similar for all these firm types, but Sum-of-the-\nParts (SOTP) is often more important in telecom because many companies are structured as\nconglomerates or holding companies with many different divisions."
  },
  {
    "id": "mi-327",
    "sourceNumber": 3,
    "page": 204,
    "question": "You are building a credit analysis for Netflix and have calculated its FCF Conversion based on this definition: FCF = EBITDA – Net Interest Expense – Taxes +/- Change in Working Capital – CapEx. You have also adjusted for Deferred Taxes and Stock-Based Compensation.",
    "sampleAnswer": "Based on this definition, Netflix’s FCF Conversion is over 70%. Your co-worker reviews your\nanalysis and says it’s wrong, as the company’s true FCF Conversion is only around half this\npercentage due to line items missing from your analysis.\nWho’s correct? Why?\nYour co-worker is correct. The issue here is that “content companies” such as Netflix spend\nmoney to acquire or develop content and then amortize it over time, which creates line items\nrelated to these activities.\nSpecifically, this “Content Amortization” shows up within the Cost of Revenue on the Income\nStatement and, therefore, reduces EBITDA, but it’s added back as non-cash on the CFS.\nThe company records its content spending in the current period as “Additions to Content\nAssets” on the CFS, which is like CapEx (i.e., a large cash outflow).\nTherefore, if you want FCF to capture the true nature of Netflix’s content business, it should\ninclude everything in Cash Flow from Operations. If you reflect its true content spending via\nthese additional line items, its FCF Conversion should be far below 70%."
  },
  {
    "id": "mi-328",
    "sourceNumber": 4,
    "page": 204,
    "question": "Suppose you are valuing a semiconductor company, such as TSMC, and a broader “hardware company,” such as Samsung. What types of accounting and valuation differences would you expect?",
    "sampleAnswer": "Assuming the semiconductor company does its own manufacturing, which TSMC does, both firms will focus heavily on gross margins and CapEx, with valuation often linked to the most efficient firms on these metrics.\nSemiconductor companies also tend to have high R&D costs, so they are often “halfway\nbetween” hardware and software. They are also more cyclical and tend to be affected more by\nmacro factors and market trends (crypto boom, AI boom, etc.).\nAlso, since semiconductor companies are mostly enterprise-facing, they focus heavily on\nmetrics such as the book-to-bill ratio (orders received / orders shipped) and their capacity\nutilization to assess market demand.\nYou would still use the standard multiples and methodologies for both types of firms (DCF, TEV\n/ EBITDA, P / E, etc.)."
  },
  {
    "id": "mi-329",
    "sourceNumber": 5,
    "page": 204,
    "question": "How would you value an unprofitable tech startup that is years away from positive Net Income and cash flow?",
    "sampleAnswer": "There are two main options: 1) Project the company’s cash flows until they become positive\nand use a far-in-the-future DCF that potentially spans decades, or 2) Use more “creative”\nmultiples that are based on non-financial metrics, such as TEV / Monthly Active Users or TEV /\nUnique Visitors."
  },
  {
    "id": "mi-330",
    "sourceNumber": 6,
    "page": 205,
    "question": "A Software-as-a-Service (SaaS) company sells a $240 2-year contract on January 1 that will be billed every 6 months. Walk me through the Bookings, Billings, and Revenue for January and February.",
    "sampleAnswer": "The Bookings in January are $240 because “Bookings” represent the total contract value,\nregardless of the term or recognition period. If it is billed every six months, there are 24 / 6 = 4\ninvoices over these two years, so the Billings in January are $240 / 4 = $60.\nThe Revenue in January equals the total contract value divided by the number of months in the\ncontract: $240 / 24 = $10.\nThe Bookings in February are $0 because no new contract is signed or renewed, and the Billings\nare also $0 because the next invoice will be issued on July 1. Revenue is still $240 / 24 = $10."
  },
  {
    "id": "mi-331",
    "sourceNumber": 7,
    "page": 205,
    "question": "Continuing with the same question, if it takes 2 months to collect the cash from customers following receipt of the invoice, explain how Accounts Receivable and Deferred Revenue change in January and February. On January 1, Accounts Receivable and Deferred Revenue both increase by $60 because of the $60 in Billings based on the invoiced amount.",
    "sampleAnswer": "The AR balance remains at $60 until the cash is collected on March 1, at which point it falls to\n$0.\nThe DR balance decreases based on the $10 in recognized revenue each month, so it starts at\n$60 and then decreases to $50 by February 1 and $40 by March 1."
  },
  {
    "id": "mi-332",
    "sourceNumber": 8,
    "page": 205,
    "question": "A software company has annual contracts with an average value of $10K per year, and its annual cancellation rate is currently 10%. Customers who do not cancel pay 5% more once every 2 years. What is this company’s approximate average Lifetime Value (LTV)? You may assume this $10K per year figure already deducts the associated Cost of Sales.",
    "sampleAnswer": "The average customer life is 1 / 10% = 10 years, and the average contract value is $10K per\nyear, so 10 years * $10K / year = $100K.\nHowever, this $10K annual contract value (ACV) increases by 5% once every two years, so by\nthe end of 10 years, it will be closer to $12K.\nTherefore, the “average” ACV over 10 years is about $11K per year, so the average LTV over this\naverage lifetime is $11K * 10 = $110K.\n(If this were a startup or a very young company, you would have to risk-adjust this figure based\non the Discount Rate, so it would be significantly below $110K.)"
  },
  {
    "id": "mi-333",
    "sourceNumber": 9,
    "page": 206,
    "question": "You are analyzing a SaaS company’s performance. The company claims its LTV / CAC is 4.0x, but its CAC Payback Period is 24 months. What conclusions can you draw?",
    "sampleAnswer": "The LTV / CAC (“Lifetime Value / Customer Acquisition Costs”) for a SaaS company measures its\naverage future gross profits from an average customer divided by the sales and marketing\nrequired to win that customer.\nHigher is better, but LTV / CAC is speculative because of the many assumptions required to\nestimate the average “Lifetime Value.”\nThe CAC Payback Period is more grounded because it measures the time required to earn back\nthe sales & marketing spend to win a new customer based on the initial contract terms.\nMost SaaS companies aim for CAC Payback Periods of less than 12 months; 24 months is quite\nlong and means its business model is risky.\nSuch a long CAC Payback Period should make you skeptical of an apparently high LTV / CAC – as\nit means the company might be using overly optimistic assumptions for its renewal rates,\npricing, or gross margins."
  },
  {
    "id": "mi-334",
    "sourceNumber": 10,
    "page": 206,
    "question": "How does SaaS valuation differ from the valuation of other tech companies?",
    "sampleAnswer": "You still use the same methodologies (public comps, precedent transactions, and the DCF), but\nyou normally screen companies based on revenue and revenue growth, and you may even use\nSaaS-specific metrics such as Annualized Recurring Revenue (ARR) instead of normal revenue\n(ARR pairs with Enterprise Value).\nRevenue multiples are common for high-growth / unprofitable companies, but EBITDA and\nUFCF are also possible for later-stage companies. UFCF is useful for companies with large and\ngrowing Deferred Revenue balances (common for enterprise companies that collect cash\nupfront for long-term contracts).\nIn the DCF, you tend to forecast further into the future to give the company more time to reach\nmaturity, and you may assume a changing Discount Rate over the forecast period to reflect this\nmaturation."
  }
];
