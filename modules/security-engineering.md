# Security Engineering

**Module Version:** 1.1
**Last Reviewed:** 2025-12-11
**Next Review Due:** 2026-03-11
**Target Audience:** Security Engineers, Developers, DevOps Teams
**Estimated Reading Time:** 25 minutes

## Overview
Security engineering encompasses the practice of building security into systems and infrastructure from the ground up, ensuring that security is integrated throughout the development lifecycle rather than added as an afterthought. This domain includes secure software development practices, infrastructure security, and the implementation of security controls in technology systems. Effective security engineering creates a robust foundation that reduces vulnerabilities and strengthens the overall security posture of banking institutions.

## Threat Landscape & Current Context
Modern banking security engineering faces evolving challenges from sophisticated adversaries and rapid technology changes:

### Software Supply Chain Attacks
- **Targeted Incidents**: State-sponsored and criminal actors targeting development pipelines
- **Component Vulnerabilities**: Exploitation of vulnerable third-party libraries and dependencies
- **Impact**: Potential for widespread compromise through shared infrastructure or libraries
- **Trend**: Attacks on CI/CD pipelines and build systems

### Cloud-Native Security Challenges
- **Container Vulnerabilities**: Security gaps in containerized applications and orchestration
- **Microservices Complexity**: Increased attack surface from distributed service architectures
- **API Security**: Proliferation of APIs creating new attack vectors
- **Impact**: Traditional security controls insufficient for cloud-native environments

### Agile Development Security Gaps
- **Speed vs. Security**: Pressure to release quickly conflicts with security requirements
- **SecDevOps Integration**: Challenges integrating security into DevOps processes
- **Impact**: Security controls often bypassed or inadequately implemented

### Emerging Technology Risks
- **AI/ML Security**: Vulnerabilities in machine learning models and AI systems
- **Infrastructure as Code**: Risks from misconfigured infrastructure code
- **Impact**: New technology paradigms creating unprecedented security challenges

## Regulatory Alignment

### Primary Banking Regulations
- **SR 13-19**: Federal Reserve guidance on managing risks from third-party relationships (including software vendors)
- **FFIEC IT Handbook**: Development and acquisition guidance for software security
- **OCC Technology Risk Management**: Software development and security requirements
- **Interagency Guidance on Outsourcing**: Requirements for third-party software and services

### Software Security Standards
- **NIST SP 800-218**: Secure Software Development Framework (SSDF)
- **OWASP SAMM**: Software Assurance Maturity Model for secure development
- **BSIMM**: Building Security In Maturity Model for software security initiatives

### Technology-Specific Requirements
- **PCI DSS Requirements**: Secure software development for card processing systems
- **Secure Coding Standards**: NIST and industry guidelines for secure development
- **Vulnerability Disclosure**: Requirements for handling and disclosure of vulnerabilities

## Best Practices

### Primary Controls

#### 1. Secure Software Development Lifecycle (SSDLC)
- **Integration**: Integrate security activities into every phase of development
- **Threat Modeling**: Conduct threat modeling for all significant features
- **Security Requirements**: Define clear security requirements for each project
- **Security Testing**: Include automated security testing in CI/CD pipelines

#### 2. Static and Dynamic Application Security Testing
- **SAST Implementation**: Deploy static analysis tools in development environments
- **DAST Integration**: Implement dynamic analysis for running applications
- **IAST Adoption**: Use interactive analysis tools for comprehensive coverage
- **Continuous Monitoring**: Integrate testing tools into development workflows

#### 3. Dependency and Supply Chain Management
- **Software Bill of Materials (SBOM)**: Generate and maintain SBOM for all software
- **Vulnerability Scanning**: Automated scanning of third-party dependencies
- **Component Governance**: Establish approval processes for third-party components
- **Supplier Assessment**: Evaluate security practices of software suppliers

#### 4. Infrastructure Hardening and Configuration Management
- **Baseline Configurations**: Establish and maintain secure configuration baselines
- **Automated Compliance**: Use tools to continuously verify configuration compliance
- **Change Management**: Implement secure change management processes
- **Security by Default**: Configure systems with security enabled by default

### Secondary Considerations

#### Secrets and Key Management
- **Secrets Management**: Implement centralized secrets management for applications
- **Key Management**: Secure cryptographic key generation, storage, and rotation
- **HSM Integration**: Use hardware security modules for critical operations
- **Credential Lifecycle**: Manage full lifecycle of credentials and secrets

#### Container and Cloud Security
- **Container Security**: Secure container build, deployment, and runtime
- **Kubernetes Security**: Implement security best practices for orchestration
- **Cloud Identity**: Secure cloud service identity and access management
- **Network Security**: Secure network communications in cloud environments

## Implementation Guide

### Prerequisites
- Established development team with security awareness training
- Available tools for security testing and analysis
- Defined software development lifecycle processes
- Budget allocation for security engineering tools and resources

### Step-by-Step Process

#### Step 1: Assess Current Security Engineering Maturity
1. **Current State Analysis**: Evaluate current security practices in development lifecycle
2. **Gap Analysis**: Identify gaps between current practices and security requirements
3. **Tool Inventory**: Catalog current security testing and analysis tools
4. **Process Review**: Review existing development and security processes
5. **Skill Assessment**: Evaluate team skills and training needs
6. **Compliance Check**: Verify current practices meet regulatory requirements

#### Step 2: Develop Security Engineering Program
1. **Program Strategy**: Create comprehensive security engineering program strategy
2. **Tool Selection**: Select appropriate tools for security testing and analysis
3. **Process Integration**: Integrate security activities into existing development processes
4. **Training Plan**: Develop training programs for development teams
5. **Policy Development**: Create security engineering policies and standards
6. **Success Metrics**: Define metrics to measure program effectiveness

#### Step 3: Implement Security Controls
1. **Tool Deployment**: Deploy security testing and analysis tools
2. **Process Updates**: Update development processes to include security activities
3. **Training Delivery**: Deliver security training to development teams
4. **Policy Implementation**: Implement security policies and standards
5. **Monitoring Setup**: Establish monitoring and alerting for security metrics
6. **Documentation**: Update all processes and procedures with new steps

### Configuration Templates

#### SSDLC Integration Template
```
Requirements Phase:
- Security requirements identification
- Privacy impact assessment
- Compliance requirement mapping
- Risk assessment of features

Design Phase:
- Threat modeling (STRIDE, PASTA, or similar methodology)
- Security architecture review
- Data flow analysis
- Security control selection

Implementation Phase:
- Secure coding standard enforcement
- Static application security testing (SAST)
- Peer code review with security focus
- Dependency vulnerability scanning

Testing Phase:
- Dynamic application security testing (DAST)
- Penetration testing
- Security configuration validation
- Security acceptance criteria verification

Deployment Phase:
- Secure configuration deployment
- Security post-deployment validation
- Security monitoring activation
- Security documentation update
```

#### Application Security Testing Pipeline Template
```
CI/CD Pipeline Security Integration:
Stage 1: Source Code Analysis
- SAST scanning of committed code
- License compliance checking
- Coding standard validation

Stage 2: Build Security
- Software composition analysis (SCA)
- Container image scanning
- Infrastructure as code scanning

Stage 3: Pre-deployment Testing
- DAST scanning of staging environment
- DAST authentication testing
- API security testing
- Performance security testing

Stage 4: Deployment Validation
- Configuration compliance checking
- Runtime security monitoring activation
- Security post-deployment tests
- Vulnerability scan confirmation

Stage 5: Post-deployment Monitoring
- Runtime application self-protection (RASP)
- Security event monitoring
- Vulnerability re-scanning
- Compliance monitoring
```

#### Infrastructure Hardening Checklist
```
Operating System Hardening:
- [ ] Remove unnecessary services and packages
- [ ] Configure secure authentication methods
- [ ] Implement least privilege access
- [ ] Configure logging and monitoring
- [ ] Apply security patches regularly
- [ ] Disable unnecessary network protocols

Network Configuration:
- [ ] Configure firewall rules
- [ ] Implement network segmentation
- [ ] Enable network encryption
- [ ] Disable unused network ports
- [ ] Configure secure communication protocols
- [ ] Implement network access controls

Service Configuration:
- [ ] Configure secure service accounts
- [ ] Enable secure logging
- [ ] Configure secure communication
- [ ] Disable unnecessary service features
- [ ] Implement service hardening
- [ ] Configure security monitoring

Application Configuration:
- [ ] Configure secure application settings
- [ ] Implement secure authentication
- [ ] Configure secure data handling
- [ ] Enable application logging
- [ ] Configure error handling securely
- [ ] Validate input and output handling
```

### Checklists

#### Security Engineering Program Implementation Checklist
- [ ] Security requirements integrated into development process
- [ ] Security testing tools deployed and configured
- [ ] Threat modeling process established
- [ ] Secure coding standards documented
- [ ] Security training delivered to teams
- [ ] Code review processes updated
- [ ] Automated security testing in CI/CD
- [ ] Security metrics and reporting established
- [ ] Incident response procedures updated
- [ ] Compliance verification procedures established

#### Application Security Testing Checklist
- [ ] SAST tools integrated into development environment
- [ ] DAST tools configured for application testing
- [ ] Dependency scanning implemented
- [ ] Container scanning implemented
- [ ] Infrastructure as code scanning implemented
- [ ] API security testing procedures established
- [ ] Mobile application security testing established
- [ ] Web application firewall configuration tested
- [ ] Authentication and authorization testing implemented
- [ ] Performance impact of security controls validated

## Red Team Perspective

### How Attackers Exploit Security Engineering Weaknesses

#### 1. Development Process Gaps
- **Technique**: Attackers target applications where security was not properly integrated into development
- **Example**: Exploiting applications without proper input validation or authentication checks
- **Why It Works**: Security engineering practices were not consistently applied throughout development
- **Defensive Countermeasures**: Integrate security activities into every development phase, conduct regular security testing

#### 2. Supply Chain Vulnerabilities
- **Technique**: Exploit vulnerabilities in third-party libraries and dependencies
- **Example**: Attack applications using vulnerable open-source components
- **Why It Works**: Third-party components may have unknown or unpatched vulnerabilities
- **Defensive Countermeasures**: Maintain software bill of materials, regularly scan dependencies, verify source integrity

#### 3. Rapid Deployment Exploitation
- **Technique**: Target hastily deployed systems where security controls were bypassed
- **Example**: Exploiting systems deployed without proper security configuration
- **Why It Works**: Pressure to deploy quickly may bypass security controls
- **Defensive Countermeasures**: Automated security checks in deployment pipeline, required security validations

#### 4. Configuration Weaknesses
- **Technique**: Exploit default or weak security configurations
- **Example**: Attacking services running with default credentials or insecure settings
- **Why It Works**: Default configurations are often insecure, manual configuration is error-prone
- **Defensive Countermeasures**: Secure configuration baselines, automated compliance checking

### Exploitation Scenarios
In a typical security engineering-focused organization:
1. Security engineering practices are well-documented and integrated
2. Implementation of practices may vary across different development teams
3. Attackers identify applications that weren't properly secured during development
4. Vulnerable applications provide entry point to more secure systems

**Demonstration of Why Controls Matter**: Security engineering must be consistently applied across all development projects to be effective.

## Case Study

### Scenario: Supply Chain Attack Through Development Pipeline

A large bank was breached when attackers injected malicious code into a commonly used internal development library. The malicious code remained dormant until deployed to production systems, where it provided unauthorized access to customer data.

### Background
The bank had comprehensive security engineering practices but was breached through a novel attack on their software supply chain. Attackers gained access to an internal development library repository and injected malicious code.

### The Attack
- **Method**: Supply chain attack on internal development library
- **Vector**: Compromised developer credentials to internal repository
- **Exploitation**: Malicious code added to library that customers used in applications
- **Impact**: Customer data accessed through multiple applications using the library

### Response
The bank's response team:
1. Identified the malicious code in the library
2. Removed the malicious code from the repository
3. Scanned all applications using the library for malicious components
4. Implemented enhanced security for development repositories
5. Enhanced supply chain security practices

### Lessons Learned
- Software supply chain security is critical to security engineering
- Internal development tools require the same security as production systems
- Supply chain attacks bypass traditional security controls
- Monitoring is essential for detecting software supply chain attacks

### Preventive Measures Implemented
- Enhanced security for development repositories
- Software bill of materials generation and validation
- Enhanced developer identity management
- Enhanced supply chain security testing

## Metrics & Measurement

### Quantitative Metrics

#### Security Engineering Effectiveness
- **Security Requirements Coverage**: Target: 100% of projects include security requirements
- **SAST Coverage**: Target: 100% of code scanned by static analysis tools
- **Vulnerability Remediation Rate**: Target: 90% of high-severity vulnerabilities remediated within 30 days
- **Security Testing Integration**: Target: 100% of applications tested by DAST before deployment

#### Development Process Integration
- **Threat Modeling Coverage**: Target: 100% of significant features include threat modeling
- **Security Training Completion**: Target: 100% of developers complete security training annually
- **Security Incident Reduction**: Target: 50% reduction in application security incidents annually
- **Compliance Rate**: Target: 100% compliance with secure coding standards

#### Supply Chain Security
- **Dependency Scanning Coverage**: Target: 100% of third-party dependencies scanned for vulnerabilities
- **SBOM Generation**: Target: 100% of applications have current software bill of materials
- **Supply Chain Incident Detection**: Target: 100% of supply chain incidents detected within 24 hours

### Qualitative Metrics
- **Security Engineering Maturity Score**: Assessment of security engineering program maturity level
- **Developer Security Awareness Score**: Results of security knowledge assessments
- **Stakeholder Satisfaction**: Feedback from development teams on security processes
- **Regulatory Feedback**: Comments from regulators on security engineering practices

## Tools & Resources

### Tools

#### Application Security Testing
- **SonarQube**: Static code analysis with security rule integration
- **Checkmarx**: Comprehensive SAST and DAST solution
- **Synopsys**: Software composition analysis and vulnerability management
- **Veracode**: Cloud-based application security testing platform

#### Secrets Management
- **HashiCorp Vault**: Secrets management and dynamic secrets generation
- **AWS Secrets Manager**: Cloud-based secrets management for AWS environments
- **Azure Key Vault**: Microsoft cloud secrets and key management
- **GCP Secret Manager**: Google Cloud secrets management service

#### Container Security
- **Aqua Security**: Container runtime and image security platform
- **Twistlock**: Container security and compliance platform
- **Snyk**: Container and open-source security platform
- **Prisma Cloud**: Cloud-native security platform

### References

#### Standards & Frameworks
- **NIST SP 800-218**: Secure Software Development Framework (SSDF)
- **OWASP SAMM**: Software Assurance Maturity Model
- **BSIMM**: Building Security In Maturity Model
- **ISO 27034**: Application security standard

#### Industry Resources
- **CISA Secure Software Development**: Guidelines and resources
- **OWASP**: Open Web Application Security Project resources
- **MITRE ATT&CK**: Framework for understanding attack techniques
- **SANS Software Security**: Training and resources

#### Publications
- **NIST Cybersecurity Framework**: Software security implementation guide
- **CIS Controls**: Software security implementation guidelines
- **OWASP Top 10**: Critical web application security risks
- **ISO 27001 Implementation**: Security engineering guidance

## Cross-References & Related Topics
- See Also: **iam.md** for identity considerations in security engineering
- Building On: **governance.md** which provides governance context for engineering decisions
- Follows From: **intro.md** which provides banking security context
- Related: **cloud-security.md** for cloud-native security engineering
- Related: **data-security.md** for data protection in development
- Related: **blueteam.md** for security monitoring during development

## Appendix

### A. Secure Coding Standards Template
```
[Organization Name] Secure Coding Standards
Effective Date: [Date]

1. Input Validation: Validate all inputs for type, length, format, and range
2. Output Encoding: Encode outputs to prevent injection attacks
3. Authentication: Implement multi-factor authentication for all access
4. Authorization: Verify authorization for every access request
5. Session Management: Secure session creation, maintenance, and destruction
6. Error Handling: Prevent information disclosure through error messages
7. Logging: Log security-relevant events with appropriate detail
8. Cryptography: Use approved algorithms and proper key management
9. Data Protection: Encrypt sensitive data at rest and in transit
10. Configuration: Secure configuration management and deployment
```

### B. Security Engineering Review Process
- **Pre-development Review**: Security requirements and architecture review
- **Code Review**: Security-focused code review with automated tools
- **Security Testing**: Automated and manual security testing
- **Deployment Review**: Security configuration validation for deployment
- **Post-deployment Review**: Security validation after deployment
- **Continuous Monitoring**: Ongoing security monitoring and validation

### C. Emergency Security Engineering Response Process
- **Vulnerability Identification**: Process for identifying security vulnerabilities
- **Risk Assessment**: Quick risk assessment of identified vulnerabilities
- **Remediation Planning**: Rapid planning for vulnerability remediation
- **Implementation**: Fast implementation of security fixes
- **Validation**: Verification that fixes resolve vulnerabilities
- **Documentation**: Update of security engineering documentation

---

**Author:** Security Engineering Team
**Contributors:** Development Teams, DevOps, Security Architecture
**Reviewers:** CISO, Engineering Leadership, Architecture Team
**Last Updated:** 2025-12-11
**Status:** Published