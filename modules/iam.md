# Identity & Access Management (IAM)

**Module Version:** 1.1
**Last Reviewed:** 2025-12-11
**Next Review Due:** 2026-03-11
**Target Audience:** Security Practitioners, Identity Administrators
**Estimated Reading Time:** 25 minutes

## Overview
Identity & Access Management (IAM) is critical for banking institutions, providing the foundation for ensuring that the right individuals have appropriate access to technology resources at the right times for the right reasons. This domain encompasses the policies, processes, and technologies that enable proper authentication, authorization, and accountability for all users accessing banking systems. Effective IAM controls prevent unauthorized access to sensitive financial data and systems while maintaining operational efficiency.

## Threat Landscape & Current Context
Modern banking IAM faces sophisticated threats that target the very foundation of access controls:

### Credential-Based Attacks
- **Credential Harvesting**: Phishing and social engineering campaigns targeting banking credentials
- **Credential Stuffing**: Automated attacks using previously breached credentials
- **Pass-the-Hash/Pass-the-Ticket**: Attacks exploiting credential hash and ticket vulnerabilities
- **Impact**: Account takeovers, unauthorized transactions, and data breaches

### Privilege Escalation
- **Insider Threats**: Employees with authorized access that become malicious actors
- **Privilege Abuse**: Legitimate users exceeding their authorized access scope
- **Administrator Account Compromise**: Targeting highly privileged accounts for maximum impact
- **Impact**: Access to sensitive financial data, system manipulation, fraud

### Identity Federation Vulnerabilities
- **SSO Exploitation**: Attacking single sign-on systems to gain access to multiple systems
- **Token Manipulation**: Exploiting vulnerabilities in identity tokens and protocols
- **Identity Provider Compromise**: Targeting identity providers that serve multiple services
- **Impact**: Widespread access to multiple banking applications and services

### Account Lifecycle Management Gaps
- **Zombie Accounts**: Inactive accounts that remain accessible after employee departure
- **Privilege Creep**: Gradual accumulation of unnecessary privileges over time
- **Emergency Access Abuses**: Misuse of temporary elevated access privileges
- **Impact**: Unauthorized access by former employees, excessive privileges

## Regulatory Alignment

### Primary Banking Regulations
- **SR 13-19**: Federal Reserve guidance on managing risks from technology service providers (including IAM)
- **FFIEC Authentication Booklet**: Guidance on authentication for financial institutions
- **OCC Technology Risk Management**: Access controls and authentication requirements
- **Interagency Guidelines on Authentication**: Authentication technology requirements

### Identity and Access Standards
- **NIST SP 800-63B**: Digital Identity Guidelines for Authentication and Lifecycle Management
- **NIST SP 800-207**: Zero Trust Architecture with identity focus
- **ISO 27001**: Access control requirements (A.9 Access Control)
- **PCI DSS**: Requirement 8 - Identification and authentication requirements

### Customer Identity Requirements
- **GLBA Safeguards Rule**: Requirements for protecting customer records and information
- **E-SIGN Act**: Electronic signature and authentication requirements
- **Regulation E**: Electronic fund transfer authentication requirements

## Best Practices

### Primary Controls

#### 1. Identity Lifecycle Management
- **Automated Provisioning**: Implement automated user account creation based on HR events
- **Standardized De-provisioning**: Ensure immediate account disablement upon termination
- **Role-Based Access Control (RBAC)**: Assign permissions based on job roles
- **Regular Auditing**: Conduct periodic reviews of user accounts and access rights

#### 2. Strong Authentication Implementation
- **Multi-Factor Authentication (MFA)**: Require multiple factors for all privileged accounts
- **Adaptive Authentication**: Adjust authentication requirements based on risk factors
- **Certificate-Based Authentication**: Use PKI certificates for high-security applications
- **Continuous Authentication**: Implement behavioral analysis for ongoing verification

#### 3. Privileged Access Management (PAM)
- **Just-in-Time Access**: Grant elevated privileges only when needed
- **Session Monitoring**: Record and audit privileged sessions
- **Credential Vaulting**: Secure storage and rotation of privileged credentials
- **Least Privilege**: Grant minimum privileges necessary for job functions

#### 4. Access Governance and Monitoring
- **Access Recertification**: Regular review and validation of user permissions
- **Real-time Monitoring**: Monitor access attempts and anomalies
- **Privileged Activity Monitoring**: Track and analyze privileged user activities
- **Automated Compliance Reporting**: Generate reports for regulatory requirements

### Secondary Considerations

#### Zero Trust Identity Implementation
- **Continuous Verification**: Verify identity and security posture continuously
- **Device Trust**: Establish trust in devices as well as users
- **Network Access Control**: Implement identity-based network access controls
- **API Security**: Secure API access with identity-based controls

#### Customer Identity and Access Management (CIAM)
- **Customer Authentication**: Secure authentication for customer-facing systems
- **Consent Management**: Manage customer consent for data access and sharing
- **Single Customer View**: Integrate customer identity across channels
- **Regulatory Compliance**: Ensure CIAM solutions meet financial regulations

## Implementation Guide

### Prerequisites
- Established IAM team with appropriate expertise
- Current inventory of systems requiring authentication and authorization
- Identity data sources (HR systems, directories, etc.)
- Budget allocation for IAM tools and implementation

### Step-by-Step Process

#### Step 1: Assess Current IAM Maturity
1. **Inventory Assessment**: Catalog all systems requiring identity management
2. **Current State Analysis**: Evaluate existing IAM processes and technologies
3. **Compliance Gap Analysis**: Identify gaps in regulatory compliance
4. **Risk Assessment**: Assess current IAM-related risks
5. **User Access Review**: Review current user permissions and access rights
6. **Technology Evaluation**: Assess current IAM technology capabilities

#### Step 2: Design IAM Architecture
1. **Requirements Gathering**: Define IAM requirements from business and regulatory sources
2. **Architecture Design**: Design IAM architecture including identity providers and systems
3. **Integration Planning**: Plan integration with existing systems and applications
4. **Security Design**: Design authentication and authorization security controls
5. **Monitoring Design**: Plan monitoring and audit capabilities
6. **Disaster Recovery**: Design backup and recovery procedures for IAM systems

#### Step 3: Implement IAM Solution
1. **Tool Selection**: Select appropriate IAM tools and platforms
2. **Pilot Implementation**: Test IAM solution with limited scope
3. **Integration Development**: Develop integrations with existing systems
4. **User Migration**: Migrate users to new IAM system
5. **Testing and Validation**: Validate IAM controls and processes
6. **Rollout Execution**: Deploy IAM solution across organization

### Configuration Templates

#### Multi-Factor Authentication Policy Template
```
[Organization Name] MFA Policy
Effective Date: [Date]

Applicable Systems:
- Administrative and privileged accounts (Required)
- Customer-facing applications (Required)
- Remote access systems (Required)
- Third-party vendor access (Required)
- Internal applications (Recommended)

Authentication Factors:
- Factor 1: Something you know (password/PIN)
- Factor 2: Something you have (mobile device, token, certificate)
- Factor 3: Something you are (biometric, when applicable)

Factor Requirements:
- Administrative accounts: 2 factors required
- Customer accounts: 2 factors strongly recommended
- Vendor accounts: 2 factors required
- Employee accounts: 2 factors required for sensitive systems

Re-authentication Requirements:
- Session timeout: 8 hours for standard, 2 hours for admin
- Privileged access: Re-authenticate every 4 hours
- High-risk transactions: Additional factor required
- Geographic anomalies: Additional factor required
```

#### Privileged Access Management (PAM) Implementation Template
```
PAM Components:
1. Privileged Account Discovery:
   - Automated discovery of privileged accounts
   - Classification of account risk levels
   - Documentation of account purposes

2. Credential Vaulting:
   - Secure storage of privileged credentials
   - Automated password rotation
   - Check-in/check-out processes

3. Session Management:
   - Real-time session monitoring
   - Session recording and playback
   - Emergency access procedures

4. Access Controls:
   - Just-in-time privileged access
   - Time-based access limitations
   - Approval workflows for access requests

5. Audit and Reporting:
   - Comprehensive audit logging
   - Real-time alerting for anomalies
   - Compliance reporting
```

#### Identity Lifecycle Management Checklist
```
Account Creation Process:
- [ ] HR request verification
- [ ] Appropriate approval obtained
- [ ] Default password assigned
- [ ] Initial MFA enrollment completed
- [ ] Appropriate role-based access assigned
- [ ] Account creation confirmed in directory

Account Modification Process:
- [ ] Role change request verification
- [ ] Manager approval obtained
- [ ] Access rights updated accordingly
- [ ] Notification sent to user
- [ ] Audit trail updated

Account De-provisioning Process:
- [ ] HR termination notification received
- [ ] Account immediately disabled
- [ ] Access rights revoked
- [ ] VPN and remote access disabled
- [ ] Email forwarding removed
- [ ] Account deletion after retention period

Account Review Process:
- [ ] Quarterly access reviews
- [ ] Privileged access reviews
- [ ] Emergency access reviews
- [ ] Inactive account reviews
- [ ] Role membership validation
- [ ] Excessive privilege identification
```

### Checklists

#### IAM Program Implementation Checklist
- [ ] IAM policy and standards approved
- [ ] Identity sources mapped and inventoried
- [ ] User roles and permissions defined
- [ ] MFA requirements defined and documented
- [ ] PAM solution selected and configured
- [ ] IAM tools deployed and tested
- [ ] User training completed
- [ ] Monitoring and alerting configured
- [ ] Audit procedures established
- [ ] Incident response procedures updated

#### Identity Governance Review Checklist
- [ ] All user accounts reviewed and validated
- [ ] Privileged access reviewed for appropriateness
- [ ] MFA enabled for all required accounts
- [ ] Access recertification completed
- [ ] Inactive accounts disabled or removed
- [ ] Emergency access procedures tested
- [ ] Access logs reviewed for anomalies
- [ ] Compliance requirements verified
- [ ] Identity management processes validated
- [ ] Documentation updated

## Red Team Perspective

### How Attackers Exploit IAM Weaknesses

#### 1. Authentication Bypass
- **Technique**: Attackers target weak authentication mechanisms or implementation flaws
- **Example**: Exploiting systems with only single-factor authentication
- **Why It Works**: Insufficient authentication controls allow unauthorized access
- **Defensive Countermeasures**: Implement MFA, adaptive authentication, continuous verification

#### 2. Privilege Escalation
- **Technique**: Attackers target excessive privileges or misconfigured access controls
- **Example**: Exploiting over-privileged service accounts to access sensitive data
- **Why It Works**: Over-privileged accounts provide excessive access for attackers
- **Defensive Countermeasures**: Implement least privilege, regular access reviews, PAM controls

#### 3. Account Lifecycle Exploitation
- **Technique**: Exploit gaps in identity lifecycle management processes
- **Example**: Using accounts of former employees that weren't properly deprovisioned
- **Why It Works**: Incomplete deprovisioning processes leave active accounts
- **Defensive Countermeasures**: Automated deprovisioning, regular account reviews

#### 4. Federation and SSO Attacks
- **Technique**: Target identity federation and single sign-on systems
- **Example**: Exploiting SAML or OAuth vulnerabilities to obtain access tokens
- **Why It Works**: Centralized authentication systems create high-value targets
- **Defensive Countermeasures**: Secure configuration, token validation, monitoring

### Exploitation Scenarios
In a typical IAM-focused organization:
1. Comprehensive IAM policies and procedures exist
2. Implementation may vary across different systems and applications
3. Attackers identify systems with weaker IAM controls
4. Weak IAM implementations provide entry point to more secure areas

**Demonstration of Why Controls Matter**: IAM must be consistently implemented across all systems and applications to be effective.

## Case Study

### Scenario: Privileged Account Compromise Leads to Major Breach

A regional bank was breached when attackers gained access to a privileged service account with excessive permissions. The breach resulted in unauthorized access to customer account information and internal systems.

### Background
The bank had comprehensive IAM policies but experienced a breach through a service account with excessive privileges and weak monitoring. The account was used for automated processes but had access to more systems than necessary.

### The Attack
- **Method**: Attackers compromised a service account with excessive privileges
- **Vector**: Exploited a vulnerability in an application using the service account
- **Lateral Movement**: Used the privileged account to access other systems
- **Impact**: Access to customer account data, internal systems, and transaction logs

### Response
The bank's response team:
1. Identified and disabled the compromised account
2. Conducted forensic analysis of the breach
3. Implemented privileged access management controls
4. Conducted comprehensive access review for all service accounts
5. Enhanced monitoring of privileged account usage

### Lessons Learned
- Service accounts require the same security controls as user accounts
- Privilege creep is particularly dangerous for service accounts
- Monitoring privileged account activity is critical
- Regular access reviews must include service accounts

### Preventive Measures Implemented
- Enhanced privileged access management program
- Regular review of service account privileges
- Enhanced monitoring of privileged account activities
- Automated privileged account management processes

## Metrics & Measurement

### Quantitative Metrics

#### IAM Program Effectiveness
- **MFA Adoption Rate**: Target: 100% of required accounts have MFA enabled
- **Access Review Completion**: Target: 100% of access reviews completed on schedule
- **Account De-provisioning Time**: Target: 100% of accounts disabled within 1 hour of HR notification
- **Privileged Access Compliance**: Target: 100% of privileged accounts comply with PAM requirements

#### Authentication Performance
- **Authentication Success Rate**: Target: > 99% success rate without excessive false positives
- **MFA Failure Rate**: Target: < 1% failure rate due to technical issues
- **Password Reset Volume**: Track trends in password reset requests
- **Account Lockout Incidents**: Monitor for potential brute force attacks

#### Access Governance
- **Access Request Processing Time**: Target: < 24 hours for standard requests
- **Privileged Account Monitoring**: Target: 100% of privileged sessions monitored
- **Access Certification Completion**: Target: 100% of access certifications completed on schedule
- **Excessive Access Identification**: Track number of excessive privilege identifications

### Qualitative Metrics
- **IAM Program Maturity Score**: Assessment of IAM program maturity level
- **User Satisfaction**: Feedback from users on IAM processes and tools
- **Security Team Satisfaction**: Feedback from security team on IAM effectiveness
- **Regulatory Feedback**: Comments from regulators on IAM controls

## Tools & Resources

### Tools

#### Identity Management Platforms
- **Microsoft Azure AD**: Cloud-based identity and access management
- **Okta**: Identity management and single sign-on platform
- **Ping Identity**: Identity and access management solutions
- **ForgeRock**: Open-source identity management platform

#### Privileged Access Management
- **CyberArk**: Privileged access management and credential vaulting
- **BeyondTrust**: Privileged identity management platform
- **Thycotic**: Privileged access management solutions
- **ManageEngine PAM**: Privileged access management suite

#### Identity Governance
- **Saviynt**: Identity governance and administration platform
- **SailPoint**: Identity governance and administration solutions
- **Oracle Identity Governance**: Enterprise identity governance
- **IBM Security Identity Governance**: Identity and access analytics

### References

#### Standards & Frameworks
- **NIST SP 800-63B**: Digital Identity Guidelines for Authentication
- **NIST SP 800-207**: Zero Trust Architecture with identity focus
- **ISO 27001**: Access control requirements and implementation guidance
- **FAIR**: Factor Analysis of Information Risk for IAM

#### Industry Resources
- **IDPro**: Identity professional education and resources
- **CSA**: Cloud Security Alliance identity guidance
- **ISACA**: Identity and access management guidance
- **(ISC)²**: Identity and access security resources

#### Publications
- **FFIEC Authentication Guidelines**: Banking authentication requirements
- **CIS Controls**: Identity and access implementation guidelines
- **MITRE ATT&CK**: Identity-related attack techniques
- **SANS IAM Security**: Implementation guidance

## Cross-References & Related Topics
- See Also: **governance.md** for identity governance and oversight
- Building On: **security-engineering.md** for secure identity system implementation
- Follows From: **intro.md** which provides banking security context
- Related: **cloud-security.md** for identity in cloud environments
- Related: **data-security.md** for access controls for data protection
- Related: **blueteam.md** for identity monitoring and detection

## Appendix

### A. IAM Policy Template
```
[Organization Name] Identity and Access Management Policy
Effective Date: [Date]

Purpose:
This policy establishes requirements for identity and access management to protect organizational assets and ensure appropriate access to systems and data.

Scope:
This policy applies to all employees, contractors, and third parties with access to organizational systems and data.

Responsibilities:
- Identity Management Team: Implement and maintain IAM controls
- System Owners: Ensure appropriate access assignments
- Users: Protect their credentials and report suspicious activity
- Management: Ensure compliance with IAM requirements

Requirements:
- Multi-factor authentication required for privileged access
- Regular access reviews must be conducted
- Privileged access must be monitored and logged
- Identity lifecycle must follow established procedures
- All IAM controls must meet regulatory requirements
```

### B. IAM Review Process
- **Account Creation Review**: Verify proper approval and appropriate access
- **Access Change Review**: Validate changes to user permissions
- **Account De-provisioning Review**: Confirm proper account removal
- **Privileged Access Review**: Validate privileged account usage
- **Service Account Review**: Verify service account security
- **MFA Compliance Review**: Check MFA implementation compliance

### C. Emergency IAM Access Procedures
- **Emergency Access Need**: Process for requiring immediate elevated access
- **Approval Process**: Rapid approval for emergency access requests
- **Monitoring**: Enhanced monitoring during emergency access
- **Documentation**: Complete documentation of emergency access usage
- **Review**: Immediate review after emergency access is completed
- **Access Revocation**: Prompt revocation of emergency access after use

---

**Author:** Identity Management Team
**Contributors:** Security Team, HR, IT Operations, Compliance
**Reviewers:** CISO, Chief Information Officer, Compliance Officer
**Last Updated:** 2025-12-11
**Status:** Published