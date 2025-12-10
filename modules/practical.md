### Practical Examples

#### Financial Risk Calculation

```
// Cyber Risk = (Threat_Likelihood x Vulnerability) x Financial_Impact
const threat_likelihood = 4;    // 1-5 scale based on threat intelligence
const vulnerability = 3;        // 1-5 scale based on security controls
const financial_impact = 5;     // 1-5 scale based on business impact
const cyber_risk = threat_likelihood * vulnerability * financial_impact; // 60 => critical risk
console.log('Financial Cyber Risk Score:', cyber_risk);
```

#### Banking-Specific Detection Rule

```
// Example: Detect anomalous transaction patterns
rule "anomalous_transaction_volume" {
  when customer_id in high_value_customer_list
       and transaction_amount > (avg_customer_monthly_volume * 3)
       and transaction_location not in customer_usual_locations
  then alert("Potential account takeover or fraud")
}
```

#### Security Assessment Steps for Financial Institutions

1. Regulatory compliance mapping (PCI DSS, SOX, local banking regulations)
2. Critical asset identification (customer data, payment systems, core banking)
3. Vulnerability assessment of payment card data environments
4. Penetration testing of online banking applications
5. Social engineering tests of staff awareness
6. Physical security assessment of branches and data centers

<button class="btn small" onclick="copySection('#practical')">Copy examples</button>