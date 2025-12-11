# Threat Intelligence

**Module Version:** 1.1
**Last Reviewed:** 2025-12-11
**Next Review Due:** 2026-03-11
**Target Audience:** Security Analysts, Threat Researchers, Security Management
**Estimated Reading Time:** 22 minutes

## Overview
Threat Intelligence represents the systematic collection, analysis, and dissemination of information about current and emerging threats to banking institutions. This domain encompasses the processes for understanding threat actors, their motivations, capabilities, and tactics, as well as the identification of vulnerabilities that could be exploited. Effective threat intelligence enables banks to make informed decisions about security investments, prioritize defensive measures, and proactively respond to emerging threats before they impact operations.

## Threat Landscape & Current Context
The banking threat landscape is continuously evolving with sophisticated adversaries and new attack vectors:

### Nation-State and Advanced Persistent Threats
- **Targeted Campaigns**: Nation-state actors specifically targeting financial institutions for economic espionage or disruption
- **Sophisticated Techniques**: Use of zero-day exploits and advanced techniques to evade detection
- **Long-term Operations**: Extended campaigns with persistent access to banking networks
- **Impact**: Potential for significant financial losses and system disruption

### Financially Motivated Cybercrime
- **Fraud Schemes**: Evolving fraud techniques targeting banking customers and systems
- **Ransomware Operations**: Targeted attacks on financial institutions for financial gain
- **Payment Card Fraud**: Sophisticated techniques targeting payment processing systems
- **Impact**: Direct financial losses and operational disruption

### Banking-Specific Threat Vectors
- **SWIFT and Payment Systems**: Targeting critical banking infrastructure and payment systems
- **ATM and Branch Attacks**: Physical and digital attacks on banking infrastructure
- **Mobile Banking**: Increasing focus on mobile banking applications and services
- **Impact**: Customer trust erosion and operational risk

### Social Engineering and Brand Abuse
- **Business Email Compromise**: Targeting banking staff and customers through email
- **Brand Impersonation**: Use of bank branding in phishing and fraud campaigns
- **Social Media Abuse**: Misuse of bank identity on social media platforms
- **Impact**: Financial losses and reputation damage

## Regulatory Alignment

### Primary Banking Regulations
- **SR 13-19**: Federal Reserve guidance on cyber threat intelligence sharing
- **FFIEC Cybersecurity Assessment Tool**: Threat intelligence and information sharing requirements
- **OCC Technology Risk Management**: Threat intelligence and monitoring requirements
- **Interagency Statement on Sharing Information**: Guidelines for threat information sharing

### Information Sharing Standards
- **TLP (Traffic Light Protocol)**: Standard for classifying and handling threat information
- **STIX/TAXII**: Standards for cyber threat intelligence sharing
- **Information Sharing and Analysis Centers (ISACs)**: Sector-specific information sharing
- **CIS Critical Security Controls**: Threat intelligence implementation requirements

### Industry Standards
- **NIST Cybersecurity Framework**: Threat intelligence subcategory requirements
- **ISO 27001**: Information security management system threat assessment
- **MITRE ATT&CK**: Framework for understanding and categorizing attack techniques

## Best Practices

### Primary Controls

#### 1. Threat Intelligence Collection and Processing
- **Multi-Source Collection**: Gather intelligence from open, closed, and technical sources
- **Automated Processing**: Implement automated collection and processing capabilities
- **Quality Assessment**: Evaluate and validate intelligence sources and quality
- **Relevance Filtering**: Filter intelligence based on relevance to the organization

#### 2. Threat Actor Tracking and Analysis
- **Actor Profiling**: Maintain profiles of relevant threat actors and their tactics
- **Behavioral Analysis**: Analyze threat actor behavior patterns and techniques
- **TTP Mapping**: Map threat actor tools, techniques, and procedures (TTPs)
- **Motivation Assessment**: Understand threat actor motivations and objectives

#### 3. Threat Modeling and Risk Assessment
- **STRIDE Analysis**: Apply STRIDE methodology for threat identification
- **Attack Path Analysis**: Identify potential attack paths and vulnerabilities
- **Misuse Case Development**: Develop misuse cases for critical systems
- **Risk Prioritization**: Prioritize threats based on likelihood and impact

#### 4. Intelligence Distribution and Actionability
- **Targeted Distribution**: Distribute intelligence to appropriate stakeholders
- **Actionable Formats**: Present intelligence in actionable formats and timeframes
- **Integration**: Integrate threat intelligence into security tools and processes
- **Feedback Mechanisms**: Establish feedback from consumers of intelligence

### Secondary Considerations

#### Fraud Pattern Detection
- **Behavioral Analytics**: Implement behavioral analysis to detect fraud patterns
- **Transaction Monitoring**: Monitor transactions for suspicious patterns
- **Anomaly Detection**: Identify unusual patterns that may indicate fraud
- **Collaboration**: Share fraud intelligence with industry partners

#### Brand Monitoring and Protection
- **Digital Brand Monitoring**: Monitor for unauthorized use of bank identity online
- **Phishing Campaign Tracking**: Track phishing campaigns targeting bank customers
- **Domain Protection**: Protect against domain squatting and brand impersonation
- **Response Procedures**: Establish procedures for responding to brand abuse

## Implementation Guide

### Prerequisites
- Established security team with threat intelligence expertise
- Access to threat intelligence feeds and sources
- Integration capabilities with existing security tools
- Management support and budget allocation

### Step-by-Step Process

#### Step 1: Establish Threat Intelligence Program
1. **Requirements Analysis**: Define threat intelligence requirements based on business needs
2. **Source Identification**: Identify relevant threat intelligence sources
3. **Tool Selection**: Select appropriate threat intelligence platforms and tools
4. **Team Building**: Assemble qualified threat intelligence personnel
5. **Process Development**: Create processes for collection, analysis, and distribution
6. **Legal Review**: Ensure compliance with applicable laws and regulations

#### Step 2: Develop Collection and Analysis Capabilities
1. **Data Source Integration**: Integrate multiple threat intelligence data sources
2. **Analysis Framework**: Establish analysis framework and methodologies
3. **Automation Implementation**: Implement automated collection and analysis
4. **Quality Control**: Establish quality control and validation processes
5. **Threat Actor Profiling**: Begin developing profiles of relevant actors
6. **Knowledge Base Creation**: Create and maintain threat intelligence knowledge base

#### Step 3: Implement Distribution and Integration
1. **Stakeholder Identification**: Identify internal stakeholders for threat intelligence
2. **Distribution Processes**: Establish distribution processes and formats
3. **Tool Integration**: Integrate intelligence with security tools (SIEM, EDR, etc.)
4. **Feedback Collection**: Implement feedback mechanisms from stakeholders
5. **Metrics and Measurement**: Establish metrics to measure program effectiveness
6. **Continuous Improvement**: Implement feedback and improvement processes

### Configuration Templates

#### Threat Intelligence Program Charter Template
```
[Organization Name] Threat Intelligence Program Charter

Purpose:
The threat intelligence program will provide actionable intelligence on threats
targeting [Organization Name] to support strategic and operational decision-making.

Objectives:
- Identify and track threats relevant to [Organization Name]
- Provide early warning of emerging threats
- Support security operations and incident response
- Inform strategic security investments

Scope:
- All information systems and technologies
- Third-party and supply chain threats
- Physical and personnel security threats
- Business continuity and operational threats

Responsibilities:
- Threat intelligence team: Collect, analyze, and distribute intelligence
- Security operations: Consume and act on threat intelligence
- Business units: Provide context and feedback
- Management: Approve program direction and funding

Success Metrics:
- Time to intelligence acquisition
- Intelligence quality score
- Stakeholder satisfaction
- Decision support effectiveness
```

#### Threat Actor Profile Template
```
Threat Actor Profile: [Actor Name]

Classification: [APT/Crime Syndicate/Insider/Competitor]

Motivations:
- Financial gain: [High/Medium/Low]
- Espionage: [High/Medium/Low]
- Disruption: [High/Medium/Low]
- Other: [Specific motivation]

Capabilities:
- Sophistication Level: [Advanced/Intermediate/Basic]
- Resources: [Extensive/Moderate/Limited]
- Technical Skills: [Advanced/Intermediate/Basic]

Tactics, Techniques, and Procedures (TTPs):
- Initial Access: [Specific techniques used]
- Execution: [How threats are executed]
- Persistence: [How access is maintained]
- Command & Control: [Communication methods]
- Exfiltration: [Data theft methods]

Targeting:
- Primary Targets: [Types of organizations targeted]
- Secondary Targets: [Additional targets]
- Geography: [Geographic focus]
- Industry Focus: [Specific industries targeted]

Indicators:
- C2 Infrastructure: [IP addresses, domains, etc.]
- Malware Signatures: [Specific malware indicators]
- Behavioral Indicators: [Observable patterns]
- Timing: [Operational patterns]

Recent Activity:
- Latest Known Campaign: [Description of recent activity]
- Impact Assessment: [Assessment of impact to targets]
- Associated CVEs: [Related vulnerabilities]
```

#### Threat Intelligence Feed Integration Checklist
```
Feed Evaluation:
- [ ] Relevance to banking threat landscape assessed
- [ ] Data quality and accuracy verified
- [ ] Coverage of relevant threat actors confirmed
- [ ] Update frequency meets requirements
- [ ] Legal and compliance requirements verified
- [ ] Cost-benefit analysis completed

Technical Integration:
- [ ] Platform compatibility verified
- [ ] Data format compatibility confirmed
- [ ] API access and rate limits understood
- [ ] Integration testing completed
- [ ] Data normalization processes defined
- [ ] Validation and verification processes implemented

Operational Integration:
- [ ] Stakeholder notification procedures defined
- [ ] Alerting and escalation procedures established
- [ ] Quality metrics and feedback mechanisms established
- [ ] Effectiveness measurement processes defined
- [ ] Integration with security tools verified
- [ ] Performance impact assessed
```

### Checklists

#### Threat Intelligence Program Implementation Checklist
- [ ] Program charter and requirements documented
- [ ] Intelligence sources identified and access established
- [ ] Analysis tools and platforms deployed
- [ ] Team personnel trained and qualified
- [ ] Collection processes automated where possible
- [ ] Analysis methodologies established
- [ ] Distribution procedures defined
- [ ] Integration with security tools completed
- [ ] Stakeholder communication established
- [ ] Success metrics defined and measured

#### Threat Intelligence Quality Assurance Checklist
- [ ] Source reliability assessed and documented
- [ ] Intelligence accuracy validated
- [ ] Relevance to organization confirmed
- [ ] Timeliness of intelligence verified
- [ ] Actionability of intelligence assessed
- [ ] Information properly classified and handled
- [ ] Context and confidence levels provided
- [ ] Alternative interpretations considered
- [ ] Intelligence properly attributed
- [ ] Quality metrics tracked and reviewed

## Red Team Perspective

### How Attackers Adapt to Threat Intelligence

#### 1. Tactics, Techniques, and Procedures (TTP) Evolution
- **Technique**: Attackers continuously modify their TTPs to avoid known indicators
- **Example**: Changing malware signatures or command and control infrastructure
- **Why It Works**: Threat intelligence often focuses on known patterns and indicators
- **Defensive Countermeasures**: Focus on principle-based detection rather than indicator-based

#### 2. Infrastructure Rotation and OpSec Improvement
- **Technique**: Attackers frequently change infrastructure to avoid tracking
- **Example**: Using temporary infrastructure and short-lived domains
- **Why It Works**: Threat intelligence may not track rapidly changing infrastructure
- **Defensive Countermeasures**: Monitor for infrastructure patterns rather than specific assets

#### 3. Targeting Information Changes
- **Technique**: Attackers adapt their targeting methods based on observed defenses
- **Example**: Switching from email-based to supply chain-based attacks
- **Why It Works**: Organizations may be better prepared for historic attack vectors
- **Defensive Countermeasures**: Maintain comprehensive threat intelligence coverage

#### 4. Anti-Analysis Techniques
- **Technique**: Attackers implement techniques to avoid analysis and attribution
- **Example**: Encryption, obfuscation, and living-off-the-land techniques
- **Why It Works**: Traditional analysis methods may not be effective against advanced techniques
- **Defensive Countermeasures**: Invest in advanced analysis capabilities and behavioral detection

### Exploitation Scenarios
In a typical threat intelligence-focused organization:
1. Comprehensive threat intelligence program with multiple data sources
2. Intelligence may focus on known threat actors and techniques
3. Attackers develop new techniques that aren't covered by current intelligence
4. Organizations may have gaps in intelligence for emerging threats

**Demonstration of Why Controls Matter**: Threat intelligence must continuously evolve to stay ahead of attacker TTP evolution and maintain effectiveness in identifying emerging threats.

## Case Study

### Scenario: Nation-State APT Campaign Targeting Multiple Banks

A coordinated nation-state attack campaign targeted multiple financial institutions using sophisticated techniques that evolved during the campaign to avoid detection, highlighting gaps in threat intelligence sharing and analysis.

### Background
Multiple banks were targeted by a sophisticated APT group using custom tools and techniques. The campaign evolved over several months, with the attackers modifying their TTPs based on observed defenses at different institutions.

### The Attack
- **Method**: Multi-stage attack using multiple vectors and evolving techniques
- **Vector**: Started with spear-phishing, evolved to supply chain attacks
- **Technique**: Used custom malware and living-off-the-land techniques
- **Impact**: Multiple banks compromised, significant data accessed

### Response
The banking industry response included:
1. Information sharing through Financial Services ISAC
2. Coordinated analysis of attack techniques
3. Development of detection signatures and indicators
4. Enhanced monitoring and detection capabilities
5. Improved threat intelligence sharing protocols

### Lessons Learned
- Threat intelligence sharing across institutions is critical for defending against coordinated campaigns
- Attackers adapt their techniques based on defensive measures
- Single-institution intelligence may miss broader campaign patterns
- Rapid information sharing is essential during active campaigns

### Preventive Measures Implemented
- Enhanced industry-wide threat intelligence sharing
- Improved detection for evolving APT techniques
- Real-time threat indicator sharing protocols
- Enhanced cross-institutional collaboration

## Metrics & Measurement

### Quantitative Metrics

#### Intelligence Program Effectiveness
- **Time to Intelligence Acquisition**: Target: < 24 hours for critical threat intelligence
- **Intelligence Quality Score**: Target: > 85% of intelligence rated as actionable
- **Coverage Metrics**: Target: 90% of relevant threat actors tracked
- **Response Effectiveness**: Track percentage of threats detected before impact

#### Threat Actor Tracking
- **Actor Profile Completeness**: Target: 100% of tracked actors have comprehensive profiles
- **TTP Coverage**: Target: 95% of known TTPs captured in knowledge base
- **Infrastructure Tracking**: Track number of infrastructure indicators identified
- **Campaign Detection Time**: Target: < 72 hours for detection of new campaigns

#### Information Sharing
- **Information Sharing Timeliness**: Target: < 1 hour for critical indicators
- **Collaboration Participation**: Track participation in industry threat sharing
- **Feedback Quality**: Measure quality of feedback from intelligence consumers
- **Integration Effectiveness**: Track integration of intelligence with security tools

### Qualitative Metrics
- **Threat Intelligence Maturity Score**: Assessment of intelligence program maturity
- **Stakeholder Satisfaction**: Feedback from intelligence consumers
- **Decision Support Effectiveness**: Assessment of intelligence support for decision-making
- **Industry Collaboration Quality**: Assessment of threat sharing effectiveness

## Tools & Resources

### Tools

#### Threat Intelligence Platforms
- **Mandiant Advantage**: Threat intelligence and investigation platform
- **Recorded Future**: Real-time threat intelligence and analytics
- **Anomali**: Threat intelligence platform for security teams
- **ThreatConnect**: Threat intelligence platform with automation

#### Intelligence Analysis Tools
- **Splunk Enterprise Security**: Security analytics with threat intelligence integration
- **IBM QRadar**: SIEM with integrated threat intelligence capabilities
- **AlienVault OTX**: Open threat exchange platform
- **Flashpoint**: Intelligence platform for security teams

#### Information Sharing Tools
- **TAXII Services**: Trusted Automated eXchange of Indicator Information
- **STIX/TAXII Libraries**: Cyber threat intelligence sharing standards
- **FS-ISAC Platform**: Financial Services Information Sharing platform
- **Information Sharing Portals**: Sector-specific sharing platforms

### References

#### Standards & Frameworks
- **STIX 2.1**: Structured Threat Information eXpression standard
- **TAXII 2.1**: Trusted Automated eXchange of Indicator Information
- **TLP Protocol**: Traffic Light Protocol for information sharing
- **MITRE ATT&CK**: Framework for understanding attack techniques

#### Industry Resources
- **Financial Services ISAC**: Threat intelligence sharing for financial services
- **FIRST**: Forum of Incident Response and Security Teams
- **OpenCTI**: Open Cyber Threat Intelligence platform
- **MISP Project**: Open source threat intelligence platform

#### Publications
- **NIST Cybersecurity Framework**: Threat intelligence implementation guidance
- **CIS Controls**: Threat intelligence implementation guidelines
- **SANS Threat Intelligence**: Training and resources
- **MITRE Cyber Threat Intelligence**: Research and guidelines

## Cross-References & Related Topics
- See Also: **blueteam.md** for integration of threat intelligence with detection systems
- Building On: **governance.md** which provides oversight for intelligence operations
- Follows From: **intro.md** which provides banking security context
- Related: **redteam.md** for understanding offensive techniques and perspectives
- Related: **compliance.md** for regulatory requirements for threat sharing
- Related: **iam.md** for identity-related threat intelligence

## Appendix

### A. Threat Intelligence Policy Template
```
[Organization Name] Threat Intelligence Policy
Effective Date: [Date]

Purpose:
This policy establishes the framework for threat intelligence activities to enhance organizational security posture.

Scope:
This policy applies to all threat intelligence collection, analysis, and sharing activities.

Objectives:
- Provide actionable intelligence on relevant threats
- Support security operations and decision-making
- Enhance defensive capabilities through intelligence
- Comply with applicable laws and regulations

Requirements:
- All intelligence activities must be legally authorized
- Intelligence sharing must comply with applicable laws
- All intelligence must be properly classified and handled
- Threat intelligence operations must align with business objectives
- All intelligence activities must maintain operational security
```

### B. Threat Intelligence Classification Guide
- **TLP:RED**: Not for distribution outside the receiving organization
- **TLP:AMBER**: Limited distribution within the organization
- **TLP:GREEN**: Limited distribution outside the organization
- **TLP:WHITE**: Distribution not limited

### C. Threat Intelligence Sharing Procedures
- **Validation**: Verify accuracy before sharing intelligence
- **Anonymization**: Remove organization-specific details when possible
- **Timeliness**: Share critical indicators within established timeframes
- **Feedback**: Provide feedback on shared intelligence effectiveness
- **Coordination**: Coordinate with law enforcement when appropriate
- **Documentation**: Document shared intelligence and outcomes

---

**Author:** Threat Intelligence Team
**Contributors:** Security Operations, Forensics Team, Risk Management
**Reviewers:** CISO, Chief Information Officer, Legal, Compliance
**Last Updated:** 2025-12-11
**Status:** Published