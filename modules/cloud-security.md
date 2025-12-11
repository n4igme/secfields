# Cloud & Infrastructure Security

**Module Version:** 1.1
**Last Reviewed:** 2025-12-11
**Next Review Due:** 2026-03-11
**Target Audience:** Cloud Security Engineers, Infrastructure Teams, Security Practitioners
**Estimated Reading Time:** 25 minutes

## Overview
Cloud & Infrastructure Security encompasses the protection of cloud environments and hybrid infrastructure that support banking operations. This domain includes the implementation of security controls for cloud platforms (AWS, Azure, GCP), secure network architecture, identity management in cloud environments, and protection of workloads and data. Effective cloud security requires understanding of shared responsibility models and implementing appropriate controls in virtualized, containerized, and hybrid environments to protect sensitive banking data and operations.

## Threat Landscape & Current Context
Banking cloud security faces evolving challenges from sophisticated adversaries targeting cloud infrastructure:

### Cloud-Specific Attack Vectors
- **Misconfiguration Exploitation**: Attackers targeting common cloud configuration errors
- **Credential Compromise**: Targeting cloud identity and access management systems
- **Container Attacks**: Exploiting vulnerabilities in containerized applications
- **Impact**: Potential for massive data breaches and service disruptions

### Shared Responsibility Model Challenges
- **Boundary Confusion**: Uncertainty about security responsibilities between bank and CSP
- **Compliance Gaps**: Ensuring security controls meet regulatory requirements
- **Visibility Limitations**: Reduced visibility into cloud infrastructure security
- **Impact**: Potential for security gaps and regulatory non-compliance

### Multi-Cloud and Hybrid Risks
- **Consistency Issues**: Inconsistent security controls across multiple cloud providers
- **Network Complexity**: Complex networking requirements for hybrid environments
- **Data Protection**: Ensuring data protection across cloud boundaries
- **Impact**: Inconsistent security posture across cloud environments

### Advanced Persistent Threats in Cloud
- **Cloud Account Compromise**: Targeting cloud accounts for persistent access
- **Resource Hijacking**: Using cloud resources for malicious activities
- **Side-Channel Attacks**: Exploiting cloud infrastructure vulnerabilities
- **Impact**: Potential for long-term access and data exfiltration

## Regulatory Alignment

### Primary Banking Regulations
- **SR 13-19**: Federal Reserve guidance on managing risks from technology service providers (including cloud)
- **FFIEC Cloud Computing Guidelines**: Risk management for cloud computing
- **OCC Technology Risk Management**: Cloud security and vendor management requirements
- **Interagency Guidance on Cloud Computing**: Risk management and implementation requirements

### Cloud Security Standards
- **NIST SP 800-144**: Guidelines on Security and Privacy in Public Cloud Computing
- **NIST SP 800-207**: Zero Trust Architecture with cloud considerations
- **ISO 27017**: Code of practice for cloud service information security management
- **ISO 27018**: Code of practice for protection of personally identifiable information in public clouds

### Industry Standards
- **CSA CCM**: Cloud Security Alliance Cloud Controls Matrix
- **CSA STAR**: Security, Trust & Assurance Registry program
- **CIS Critical Security Controls**: Cloud-specific implementation guidance
- **MITRE ATT&CK for Cloud**: Framework for cloud attack techniques

## Best Practices

### Primary Controls

#### 1. Cloud Security Posture Management (CSPM)
- **Continuous Monitoring**: Implement 24/7 monitoring of cloud configurations
- **Automated Compliance**: Automated compliance checking against security policies
- **Configuration Management**: Maintain secure baseline configurations
- **Risk Assessment**: Regular assessment of cloud security posture

#### 2. Identity and Access Management (Cloud IAM)
- **Principle of Least Privilege**: Grant minimal permissions necessary for functions
- **Just-in-Time Access**: Implement temporary access for elevated privileges
- **Multi-Factor Authentication**: Require MFA for all cloud access, especially admin accounts
- **Regular Access Reviews**: Periodic review and revocation of unnecessary access

#### 3. Network Security and Isolation
- **Virtual Private Cloud (VPC) Design**: Secure network architecture with proper segmentation
- **Network Access Control Lists**: Implement granular network access controls
- **Security Groups**: Use security groups for granular workload protection
- **Private Networking**: Use private networks for sensitive workloads

#### 4. Workload Protection and Monitoring
- **Agent-Based Security**: Deploy security agents for workload protection
- **Container Security**: Implement security controls for containerized workloads
- **Encryption by Default**: Encrypt data at rest and in transit
- **Centralized Logging**: Implement comprehensive logging and monitoring

### Secondary Considerations

#### Cloud Logging and Monitoring
- **Centralized Log Management**: Aggregate logs from all cloud services
- **Real-time Monitoring**: Monitor for security events and anomalies
- **Compliance Reporting**: Generate reports for regulatory compliance
- **Threat Detection**: Integrate threat intelligence with cloud monitoring

#### Disaster Recovery and Business Continuity
- **Multi-Region Deployments**: Deploy critical workloads across multiple regions
- **Backup Strategies**: Implement secure backup strategies for cloud data
- **Recovery Planning**: Maintain disaster recovery plans for cloud workloads
- **Testing Procedures**: Regular testing of disaster recovery procedures

## Implementation Guide

### Prerequisites
- Established cloud security team with appropriate expertise
- Cloud platform accounts and administrative access
- Integration with existing identity management systems
- Budget allocation for cloud security tools and services

### Step-by-Step Process

#### Step 1: Assess Current Cloud Security Posture
1. **Cloud Inventory**: Catalog all cloud resources and services
2. **Configuration Assessment**: Evaluate current cloud security configurations
3. **Compliance Gap Analysis**: Identify gaps in regulatory compliance
4. **Risk Assessment**: Assess current cloud-related risks
5. **Shared Responsibility Review**: Review cloud service provider agreements
6. **Current State Documentation**: Document existing cloud security controls

#### Step 2: Design Cloud Security Architecture
1. **Security Requirements**: Define security requirements based on business and regulatory needs
2. **Architecture Design**: Design secure cloud architecture and networking
3. **Identity Integration**: Plan integration with existing identity systems
4. **Monitoring Design**: Design logging and monitoring architecture
5. **Compliance Framework**: Establish compliance monitoring framework
6. **Disaster Recovery Design**: Design business continuity for cloud workloads

#### Step 3: Implement and Secure Cloud Environment
1. **Tool Selection**: Select appropriate cloud security tools and services
2. **Configuration Deployment**: Deploy secure baseline configurations
3. **Monitoring Implementation**: Implement logging and monitoring capabilities
4. **Security Controls**: Deploy security controls across cloud environment
5. **Testing and Validation**: Validate security controls and configurations
6. **Documentation**: Update all processes and procedures

### Configuration Templates

#### Cloud Security Baseline Configuration Template
```
IAM Baseline:
- Root account: Multi-factor authentication enabled and access keys removed
- Password Policy: Minimum 12 characters, complexity requirements, 90-day expiration
- Access Keys: Regular rotation policy for service accounts
- Role Boundaries: Principle of least privilege for all roles
- External Access: Identity federation instead of cloud-native users where possible

Network Baseline:
- VPC: Enable flow logs for all VPCs
- Subnets: Private subnets for sensitive workloads, public only for internet-facing services
- Security Groups: Deny-all default rules with explicit allow rules
- Network ACLs: Additional layer of security with stateless filtering
- DNS: Private DNS zones for internal service discovery

Storage Baseline:
- Encryption: Enable encryption by default for all storage services
- Access Logging: Enable access logging for all storage services
- Lifecycle Policies: Automated lifecycle policies for data retention
- Cross-Region Replication: Enable for critical data requiring DR
- Public Access: Block all public access to storage services

Monitoring Baseline:
- CloudTrail: Enable for all regions with security-focused event selectors
- Config: Enable configuration monitoring for all supported resources
- GuardDuty: Enable for threat detection and continuous monitoring
- Security Hub: Centralized security findings aggregation
- CloudWatch: Custom metric and log monitoring for security events
```

#### Multi-Cloud Security Policy Template
```
Multi-Cloud Security Policy

Purpose:
This policy establishes security requirements for all cloud service providers used by [Organization].

Scope:
This policy applies to all cloud deployments, including AWS, Azure, GCP, and other cloud services.

Requirements:

Identity and Access Management:
- Centralized identity management with on-premises directory synchronization
- Multi-factor authentication for all administrative access
- Principle of least privilege for all cloud roles and permissions
- Regular access reviews and deprovisioning for cloud accounts

Data Protection:
- Encryption of data at rest and in transit
- Data classification and handling requirements
- Data residency and sovereignty requirements
- Secure backup and recovery procedures

Network Security:
- Network segmentation and isolation requirements
- Secure connectivity to on-premises environments
- DDoS protection and traffic filtering
- Network monitoring and logging requirements

Compliance and Monitoring:
- Continuous compliance monitoring across all platforms
- Centralized logging and security event correlation
- Regular security assessments and penetration testing
- Incident response procedures for cloud environments

Governance:
- Approval process for new cloud services and deployments
- Cost management and resource optimization requirements
- Change management for cloud configurations
- Vendor management and contract requirements
```

#### Cloud Security Assessment Checklist
```
Pre-Deployment Assessment:
- [ ] Business justification documented and approved
- [ ] Security requirements aligned with business needs
- [ ] Regulatory compliance requirements understood
- [ ] Shared responsibility model understood
- [ ] Security controls requirements defined
- [ ] Network connectivity requirements documented

Deployment Security:
- [ ] IAM roles and permissions properly configured
- [ ] Network security groups properly configured
- [ ] Encryption enabled for all data
- [ ] Logging and monitoring properly configured
- [ ] Security tools deployed and configured
- [ ] Backup and recovery procedures in place

Post-Deployment Validation:
- [ ] Security configuration validated
- [ ] Access controls tested and verified
- [ ] Monitoring and alerting validated
- [ ] Network connectivity tested
- [ ] Data protection verified
- [ ] Compliance requirements met
```

### Checklists

#### Cloud Security Implementation Checklist
- [ ] Cloud security team established and trained
- [ ] Cloud platform accounts and access established
- [ ] Identity management integration configured
- [ ] Network architecture designed and implemented
- [ ] Security monitoring tools deployed
- [ ] Data encryption implemented
- [ ] Compliance monitoring established
- [ ] Incident response procedures updated
- [ ] Staff training completed
- [ ] Security policies and procedures documented

#### Cloud Security Ongoing Operations Checklist
- [ ] Cloud security configurations monitored continuously
- [ ] Cloud security policies updated regularly
- [ ] Cloud access reviews conducted quarterly
- [ ] Cloud security incidents investigated and resolved
- [ ] Cloud security metrics and KPIs reported
- [ ] Cloud security training maintained
- [ ] Cloud provider security updates applied
- [ ] Cloud compliance requirements monitored
- [ ] Cloud disaster recovery procedures tested
- [ ] Cloud security documentation updated

## Red Team Perspective

### How Attackers Exploit Cloud Security Gaps

#### 1. Misconfiguration Exploitation
- **Technique**: Attackers scan for common cloud configuration errors
- **Example**: Exploiting publicly accessible storage buckets or databases
- **Why It Works**: Default configurations often have security gaps, and human error in configuration is common
- **Defensive Countermeasures**: Implement CSPM tools, automated compliance checking, configuration validation

#### 2. Identity and Access Management Weaknesses
- **Technique**: Target cloud identity systems and access controls
- **Example**: Exploiting excessive privileges or compromised credentials
- **Why It Works**: Cloud IAM can be complex, leading to over-permissioned accounts
- **Defensive Countermeasures**: Implement least privilege, regular access reviews, MFA, privileged access management

#### 3. Shared Responsibility Model Gaps
- **Technique**: Exploit confusion about security responsibilities
- **Example**: Target areas where responsibility is unclear between customer and CSP
- **Why It Works**: Organizations may incorrectly assume CSP is responsible for customer data security
- **Defensive Countermeasures**: Clear understanding of shared responsibility, comprehensive security coverage

#### 4. Container and Serverless Vulnerabilities
- **Technique**: Exploit vulnerabilities in containerized applications or serverless functions
- **Example**: Targeting vulnerable container images or insecure serverless configurations
- **Why It Works**: New technology paradigms create different attack surfaces
- **Defensive Countermeasures**: Container security scanning, secure serverless configurations, runtime protection

### Exploitation Scenarios
In a typical cloud security-focused organization:
1. Comprehensive cloud security programs are established with appropriate tools
2. Implementation may vary across different cloud platforms and services
3. Attackers identify cloud-specific misconfigurations or security gaps
4. Cloud security teams must adapt to new attack vectors in virtualized environments

**Demonstration of Why Controls Matter**: Cloud security requires a different approach than traditional infrastructure, with continuous monitoring and specialized tools for virtualized environments.

## Case Study

### Scenario: Cloud Misconfiguration Leads to Customer Data Breach

A large bank experienced a data breach when a cloud storage configuration error made customer records publicly accessible. The incident highlighted the importance of cloud-specific security controls and monitoring.

### Background
The bank had migrated several customer-facing applications to the cloud but experienced a breach due to a misconfigured storage service that was made publicly readable during an infrastructure update.

### The Incident
- **Method**: Misconfigured cloud storage service made publicly accessible
- **Vector**: Administrative error during routine infrastructure update
- **Exposure**: Customer records accessible via public URL for 3 days
- **Impact**: 2.5M customer records potentially accessed by unauthorized parties

### Response
The bank's response included:
1. Immediate containment of the exposed data
2. Assessment of the scope of the data exposure
3. Enhanced cloud security monitoring and alerting
4. Implementation of automated configuration compliance tools
5. Comprehensive cloud security training for infrastructure teams

### Lessons Learned
- Traditional security controls don't adequately protect cloud configurations
- Automated monitoring is critical for cloud security
- Cloud-specific security training is essential for infrastructure teams
- Cloud risks require different approaches than on-premises security

### Preventive Measures Implemented
- Cloud Security Posture Management (CSPM) tools deployed
- Automated compliance monitoring implemented
- Enhanced cloud security training program established
- Cloud-specific incident response procedures updated

## Metrics & Measurement

### Quantitative Metrics

#### Cloud Security Posture
- **Configuration Compliance Rate**: Target: > 98% of cloud resources in compliance
- **Misconfiguration Detection Time**: Target: < 1 hour for critical misconfigurations
- **Security Control Coverage**: Target: 100% of cloud resources covered by security controls
- **Security Event Response Time**: Target: < 15 minutes for critical cloud security events

#### Identity and Access Management
- **Multi-Factor Authentication Coverage**: Target: 100% of admin accounts enabled MFA
- **Privileged Access Monitoring**: Target: 100% of privileged sessions monitored
- **Access Review Completion**: Target: 100% of access reviews completed on schedule
- **IAM Policy Effectiveness**: Target: < 5% of policies with excessive privileges

#### Data Protection
- **Data Encryption Coverage**: Target: 100% of data encrypted at rest and in transit
- **Data Loss Prevention Incidents**: Track number of cloud-based DLP violations
- **Backup and Recovery Success**: Target: > 99% success rate for backup operations
- **Data Residency Compliance**: Target: 100% compliance with data residency requirements

### Qualitative Metrics
- **Cloud Security Maturity Score**: Assessment of cloud security program maturity
- **Staff Cloud Security Competency**: Assessment of team cloud security skills
- **Vendor Security Performance**: Assessment of cloud provider security performance
- **Regulatory Feedback**: Comments from regulators on cloud security posture

## Tools & Resources

### Tools

#### Cloud Security Posture Management (CSPM)
- **Prisma Cloud**: Comprehensive cloud security platform
- **AWS Security Hub**: AWS centralized security findings
- **Azure Security Center**: Microsoft cloud security management
- **Google Cloud Security Command Center**: Google cloud security management

#### Identity and Access Management
- **AWS IAM**: Identity and access management for AWS
- **Azure AD**: Identity and access management for Azure
- **Google Cloud IAM**: Identity and access management for GCP
- **Okta**: Cloud identity management across platforms

#### Container Security
- **Aqua Security**: Container security and compliance platform
- **Twistlock**: Container security and compliance
- **Sysdig Secure**: Container security and forensics
- **Snyk**: Container and open-source security

### References

#### Standards & Frameworks
- **NIST SP 800-144**: Guidelines on Security and Privacy in Public Cloud Computing
- **CSA CCM**: Cloud Security Alliance Cloud Controls Matrix
- **ISO 27017**: Cloud security management code of practice
- **NIST Cybersecurity Framework**: Cloud implementation guidance

#### Industry Resources
- **Cloud Security Alliance**: Best practices and guidance
- **Financial Services ISAC**: Cloud security guidance for financial services
- **CSP Security Centers**: AWS, Azure, and GCP security resources
- **SANS Cloud Security**: Training and resources

#### Publications
- **NIST SP 800-207**: Zero Trust Architecture with cloud considerations
- **CIS Cloud Benchmarks**: Secure configuration guidance
- **MITRE ATT&CK for Cloud**: Cloud attack techniques
- **OWASP Cloud Security**: Security guidance for cloud applications

## Cross-References & Related Topics
- See Also: **iam.md** for identity management in cloud environments
- Building On: **security-engineering.md** which provides secure development in cloud
- Follows From: **intro.md** which provides banking security context
- Related: **network-security.md** for cloud networking security
- Related: **data-security.md** for data protection in cloud environments
- Related: **compliance.md** for regulatory requirements in cloud

## Appendix

### A. Cloud Security Policy Template
```
[Organization Name] Cloud Security Policy
Effective Date: [Date]

Purpose:
This policy establishes security requirements for cloud services to protect organizational assets and ensure regulatory compliance.

Scope:
This policy applies to all cloud services and resources used by [Organization].

Objectives:
- Protect data and systems in cloud environments
- Ensure regulatory compliance in cloud deployments
- Establish consistent security controls across cloud platforms
- Maintain security visibility in cloud environments

Requirements:
- All cloud deployments must have security review approval
- Multi-factor authentication required for all admin access
- Data must be encrypted at rest and in transit
- Comprehensive logging and monitoring must be implemented
- All cloud deployments must meet compliance requirements
```

### B. Cloud Security Incident Response Procedures
- **Detection**: Procedures for detecting cloud security incidents
- **Containment**: Steps for containing cloud security incidents
- **Investigation**: Cloud-specific forensic and investigation procedures
- **Communication**: Notification procedures for cloud incidents
- **Recovery**: Procedures for restoring cloud services after incidents
- **Post-Incident**: Review and improvement procedures after incidents

### C. Cloud Vendor Security Requirements
- **Data Protection**: Requirements for vendor data handling and protection
- **Access Controls**: Requirements for vendor access to organizational data
- **Monitoring**: Requirements for vendor security monitoring and reporting
- **Incident Response**: Requirements for vendor incident response and notification
- **Compliance**: Requirements for vendor compliance with regulations
- **Audit Access**: Requirements for organizational audit access to vendor systems

---

**Author:** Cloud Security Team
**Contributors:** Infrastructure Team, Security Architecture, Compliance Team
**Reviewers:** CISO, Cloud Engineering Leadership, Legal, Compliance
**Last Updated:** 2025-12-11
**Status:** Published