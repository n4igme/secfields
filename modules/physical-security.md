# Physical, Branch, and Operational Security

**Module Version:** 1.1
**Last Reviewed:** 2025-12-11
**Next Review Due:** 2026-03-11
**Target Audience:** Physical Security Officers, Facility Managers, Security Practitioners
**Estimated Reading Time:** 25 minutes

## Overview
Physical, Branch, and Operational Security encompasses the protection of physical assets, facilities, and personnel that support banking operations. This domain includes the implementation of physical access controls, surveillance systems, secure handling of documents and data, and security procedures for banking locations. Effective physical security is critical for banking institutions as it protects against unauthorized access to facilities, data centers, and sensitive information, while also safeguarding customers and employees at banking locations.

## Threat Landscape & Current Context
Modern banking physical security faces challenges from diverse threat actors and evolving attack methods:

### External Physical Threats
- **Terrorist Attacks**: Targeting high-profile banking locations for maximum impact
- **Armed Robberies**: Violent attacks on branches and ATMs for cash and valuables
- **Burglary Attempts**: Unauthorized access to facilities during off-hours
- **Impact**: Potential for financial losses, customer harm, and reputation damage

### Insider and Trusted Personnel Threats
- **Insider Misuse**: Employees with authorized access misusing privileges
- **Social Engineering**: Exploiting trusted relationships to gain unauthorized access
- **Credential Sharing**: Unauthorized sharing of access credentials
- **Impact**: Potential for data theft, fraud, and operational disruption

### Technological Physical Attacks
- **Skimming Devices**: Installation of devices on ATMs and card readers
- **Tailgating/Mantrapping**: Following authorized personnel to bypass access controls
- **Surveillance**: Monitoring of facilities to identify security weaknesses
- **Impact**: Customer data theft and operational security compromise

### Supply Chain and Vendor Risks
- **Vendor Access**: Unauthorized access through third-party service providers
- **Contractor Misconduct**: Improper behavior by temporary or contracted personnel
- **Equipment Tampering**: Compromise of equipment during shipping or maintenance
- **Impact**: Potential for facility compromise and data theft

## Regulatory Alignment

### Primary Banking Regulations
- **SR 13-19**: Federal Reserve guidance on managing cyber and physical security risks
- **FFIEC IT Handbook**: Physical security requirements for technology infrastructure
- **OCC Technology Risk Management**: Physical security for banking operations
- **Interagency Security Device Standards**: Requirements for ATM and security devices

### Physical Security Standards
- **ASIS Guidelines**: Physical security management standards
- **NIST SP 800-18**: Guide for developing security plans including physical security
- **ISO 27001**: Physical security controls (A.11 - Physical and Environmental Security)
- **CPTED**: Crime Prevention Through Environmental Design principles

### Industry Standards
- **CCTV Standards**: Video surveillance system standards and requirements
- **Access Control Standards**: Physical access control system standards
- **Banking Security Design**: Branch and facility security design requirements
- **Insurance Requirements**: Physical security requirements for insurance coverage

## Best Practices

### Primary Controls

#### 1. Physical Access Control Systems
- **Multi-Layered Access Control**: Implement multiple barriers and verification points
- **Card-Based Access**: Use smart cards or proximity cards with unique identifiers
- **Biometric Verification**: Implement biometric controls for high-security areas
- **Access Monitoring**: Continuously monitor and log all access attempts

#### 2. Surveillance and Monitoring
- **CCTV Coverage**: Comprehensive coverage of all critical areas and perimeters
- **Alarm Systems**: Intrusion detection and alarm systems for unauthorized access
- **Security Guard Integration**: Coordinate surveillance with security personnel
- **Evidence Preservation**: Maintain video and alarm logs for incident investigation

#### 3. Data Center and Critical Infrastructure Security
- **Secure Access Procedures**: Strict access controls for data centers and server rooms
- **Environmental Controls**: Temperature, humidity, and fire suppression systems
- **Physical Network Security**: Secure network equipment and connections
- **24/7 Monitoring**: Continuously monitor critical infrastructure areas

#### 4. Document and Information Security
- **Secure Document Handling**: Procedures for handling, storing, and destroying documents
- **Shredding Procedures**: Secure destruction of sensitive documents
- **Information Classification**: Classification and handling procedures for sensitive data
- **Secure Printing**: Secure printing and document collection procedures

### Secondary Considerations

#### Branch Security Operations
- **Customer Safety**: Implement security measures that protect customers
- **Cash Handling**: Secure procedures for handling and transporting cash
- **Emergency Procedures**: Clear procedures for security incidents and emergencies
- **Training Programs**: Regular training for branch staff on security procedures

#### Insider Threat Detection
- **Behavioral Monitoring**: Monitor employee behavior for indicators of insider threats
- **Access Pattern Analysis**: Analyze access patterns for unusual activity
- **Background Checks**: Regular background checks for high-risk personnel
- **Incident Response**: Procedures for responding to insider threat incidents

## Implementation Guide

### Prerequisites
- Established physical security team with appropriate expertise
- Facility and infrastructure security assessment completed
- Management support and budget allocation
- Coordination with local law enforcement and emergency services

### Step-by-Step Process

#### Step 1: Assess Current Physical Security Posture
1. **Facility Assessment**: Evaluate physical security of all facilities
2. **Current State Analysis**: Assess current physical security controls and systems
3. **Risk Assessment**: Identify physical security risks and vulnerabilities
4. **Compliance Gap Analysis**: Assess compliance with regulatory requirements
5. **Architecture Review**: Review current physical security architecture
6. **Business Requirements Analysis**: Understand business requirements for physical access

#### Step 2: Design Physical Security Architecture
1. **Security Requirements**: Define physical security requirements for each facility type
2. **Architecture Design**: Design comprehensive physical security architecture
3. **System Selection**: Select appropriate physical security systems and equipment
4. **Policy Development**: Develop physical security policies and procedures
5. **Integration Planning**: Plan integration with existing security systems
6. **Change Management**: Plan implementation and change management for physical systems

#### Step 3: Deploy and Operate Physical Security
1. **Pilot Implementation**: Test physical security systems at one location
2. **System Installation**: Install physical security systems across facilities
3. **Monitoring Setup**: Establish physical security monitoring and alerting
4. **Staff Training**: Provide training on new physical security controls
5. **Incident Response**: Integrate physical security with incident response processes
6. **Continuous Improvement**: Monitor effectiveness and improve processes

### Configuration Templates

#### Physical Access Control System Configuration Template
```
Badge Access System Configuration:
- Access Levels:
  - Level 1: Public areas (lobby, teller areas)
  - Level 2: Office areas, conference rooms
  - Level 3: Data centers, server rooms, vaults
  - Level 4: Executive offices, highly sensitive areas

Authentication Requirements:
- Standard Areas: Badge swipe required
- High-Security Areas: Badge + PIN or biometric verification
- Critical Areas: Dual authentication (badge + biometric + escort required)
- Time Restrictions: Limit access to business hours where appropriate

Logging and Monitoring:
- All access attempts logged with date, time, badge ID, and location
- Failed access attempts logged and immediately reported
- Access by time of day and day of week monitored
- Emergency access procedures logged and reviewed

Alarm and Alert Configuration:
- Unauthorized access attempts trigger immediate alarms
- Badge not presented for X minutes triggers alert
- Tampering with access control equipment triggers alert
- Power failure or system malfunction triggers notification
```

#### Branch Security Standard Template
```
Branch Security Standard

Perimeter Security:
- Fencing: Minimum 8-foot fence with razor wire on critical sites
- Lighting: Adequate lighting for all areas, minimum 5 foot-candles
- Landscaping: Clear sight lines, no hiding areas within 25 feet
- Signage: Clear security warning signs at all access points

Entry and Exit Controls:
- Main Entrance: Single main entrance with security screening
- Emergency Exits: Monitored but not locked during business hours
- Employee Access: Separate entrance with badge access control
- ATM Access: Secured and monitored access, separate from main entrance

Surveillance Requirements:
- Main Floor: Coverage of all customer areas and teller stations
- Vault: Coverage of all vault access and cash handling areas
- Exterior: Coverage of all entrances and parking areas
- Archive: Minimum 30 days of video retention

Cash Handling:
- Teller Drawers: Minimum $200-$500 maximum per drawer
- Panic Buttons: Accessible from all teller stations
- Drop Safes: Automatic drop safes for large deposits
- Cash Transfers: Secure procedures for cash pickup and delivery
```

#### Physical Security Assessment Checklist
```
Facility Assessment:
- [ ] Perimeter security evaluated and documented
- [ ] Access control systems assessed
- [ ] Surveillance coverage mapped
- [ ] Alarm systems tested
- [ ] Lighting adequacy assessed
- [ ] Emergency procedures evaluated

Vulnerability Identification:
- [ ] Potential entry points identified
- [ ] Blind spots in surveillance identified
- [ ] Access control weaknesses documented
- [ ] Environmental risks assessed
- [ ] Emergency response capabilities evaluated
- [ ] Personnel security procedures reviewed

Risk Mitigation Planning:
- [ ] Physical security improvements prioritized
- [ ] Budget requirements estimated
- [ ] Implementation timeline developed
- [ ] Training needs identified
- [ ] Vendor selection process defined
- [ ] Project management procedures established
```

### Checklists

#### Physical Security Implementation Checklist
- [ ] Physical security team established and trained
- [ ] Access control systems installed and configured
- [ ] Surveillance systems deployed and operational
- [ ] Alarm systems installed and tested
- [ ] Document handling procedures established
- [ ] Physical security policies documented
- [ ] Staff training completed
- [ ] Emergency procedures established
- [ ] Vendor management procedures updated
- [ ] Physical security metrics defined

#### Ongoing Physical Security Operations Checklist
- [ ] Physical security configurations monitored continuously
- [ ] Access logs reviewed regularly
- [ ] Physical security incidents investigated and resolved
- [ ] Physical security metrics reported
- [ ] Physical security training maintained
- [ ] Physical security systems updated regularly
- [ ] Physical security documentation updated
- [ ] Vendor physical security compliance monitored
- [ ] Emergency procedures tested annually
- [ ] Physical security equipment maintained

## Red Team Perspective

### How Attackers Exploit Physical Security Gaps

#### 1. Social Engineering and Tailgating
- **Technique**: Attackers follow authorized personnel through secure access points
- **Example**: Pretending to be a delivery person or contractor to gain access
- **Why It Works**: Human nature makes people helpful, and access control systems may not prevent following
- **Defensive Countermeasures**: Security awareness training, mantrap access systems, security personnel monitoring

#### 2. Physical Access to Technology Systems
- **Technique**: Attackers gain physical access to network equipment or computers
- **Example**: Installing hardware keyloggers or accessing unattended systems
- **Why It Works**: Direct physical access often bypasses digital security controls
- **Defensive Countermeasures**: Secure equipment rooms, cable management, physical locks and monitoring

#### 3. Skimming and Device Installation
- **Technique**: Install fraudulent devices on banking equipment
- **Example**: Card skimmers on ATMs or branch teller machines
- **Why It Works**: Regular customers may not notice fraudulent devices
- **Defensive Countermeasures**: Regular inspections, tamper-evident measures, surveillance of equipment

#### 4. Insider Assistance and Compromise
- **Technique**: Recruit insiders to assist with physical security bypass
- **Example**: Employees sharing access codes or badges
- **Why It Works**: Insiders have legitimate access and knowledge of security procedures
- **Defensive Countermeasures**: Background checks, access monitoring, security awareness programs

### Exploitation Scenarios
In a typical physical security-focused organization:
1. Comprehensive physical security measures are implemented with multiple layers
2. Implementation may have gaps where human controls are bypassed
3. Attackers develop new physical techniques that bypass current security measures
4. Organizations may not regularly test physical security against current threats

**Demonstration of Why Controls Matter**: Physical security requires constant attention to human factors and evolving attack techniques.

## Case Study

### Scenario: ATM Skimming Operation Targets Multiple Bank Locations

A bank experienced a coordinated ATM skimming operation where criminals installed sophisticated card reading devices and cameras at multiple branch locations over a weekend, resulting in customer card data theft and financial fraud.

### Background
The bank had physical security measures in place, including surveillance systems and regular maintenance checks, but experienced a sophisticated ATM skimming operation that installed devices between scheduled maintenance visits.

### The Incident
- **Method**: Sophisticated card skimming devices and pinhole cameras installed
- **Vector**: Devices installed during times when facilities were less monitored
- **Technique**: Devices were designed to be nearly invisible to normal inspection
- **Impact**: Customer card data compromised, fraudulent transactions occurred

### Response
The bank's response included:
1. Immediate ATM shutdown and inspection procedures
2. Enhanced physical inspection protocols
3. Customer notification and card replacement
4. Enhanced ATM surveillance and monitoring
5. Coordination with law enforcement
6. Updated physical security procedures

### Lessons Learned
- Regular visual inspections may miss sophisticated skimming devices
- Timing of maintenance and monitoring matters for security
- Customer notification and remediation is critical after physical breaches
- Physical security requires continuous monitoring beyond scheduled checks

### Preventive Measures Implemented
- Enhanced ATM surveillance with AI-based anomaly detection
- More frequent physical inspections of ATMs
- Tamper-evident security measures on all ATMs
- Enhanced coordination with security companies and law enforcement

## Metrics & Measurement

### Quantitative Metrics

#### Physical Security Effectiveness
- **Unauthorized Access Rate**: Target: < 1 unauthorized access incidents per month
- **Response Time**: Target: < 5 minutes for physical security incident response
- **Access Control Compliance**: Target: 99% of access attempts properly authenticated
- **Surveillance Coverage**: Target: 100% coverage of critical areas

#### Incident Response Effectiveness
- **Physical Intrusion Detection Time**: Target: < 1 minute for intrusion detection
- **Physical Incident Investigation Time**: Target: < 24 hours for initial investigation completion
- **Physical Security Training Completion**: Target: 100% of staff complete annual training
- **Physical Security Policy Compliance**: Target: > 98% compliance rate

#### Security System Performance
- **System Uptime**: Target: > 99.9% uptime for critical physical security systems
- **Alarm Response Time**: Target: < 3 minutes for alarm response
- **Access System Reliability**: Target: > 99.5% system availability
- **Maintenance Schedule Adherence**: Target: 100% of maintenance completed on schedule

### Qualitative Metrics
- **Physical Security Maturity Score**: Assessment of physical security program maturity
- **Employee Satisfaction**: Feedback from employees on physical security impact
- **Customer Satisfaction**: Feedback from customers on branch security measures
- **Regulatory Feedback**: Comments from regulators on physical security posture

## Tools & Resources

### Tools

#### Physical Security Systems
- **Access Control Systems**: HID Global, Assa Abloy, Allegion access control platforms
- **Surveillance Systems**: Axis, Hikvision, Bosch video surveillance platforms
- **Alarm Systems**: DMP, Honeywell, ADT commercial alarm systems
- **Integration Platforms**: Physical Security Information Management (PSIM) platforms

#### Monitoring and Analytics
- **PSIM Platforms**: Genetec, Milestone, Security Center platforms
- **Behavioral Analytics**: Physical security behavioral analysis tools
- **Threat Intelligence**: Physical threat intelligence and sharing platforms
- **Asset Tracking**: RFID and other asset tracking systems

#### Assessment and Testing
- **Security Assessment Tools**: Physical security assessment and planning tools
- **Testing Equipment**: Equipment for testing physical security measures
- **Survey Tools**: Facility survey and security planning tools
- **Documentation Systems**: Physical security plan and documentation systems

### References

#### Standards & Frameworks
- **ASIS Physical Security Standards**: Professional physical security standards
- **NIST SP 800-18**: Guide for developing security plans including physical security
- **ISO 27001**: Physical security controls implementation guidance
- **Crime Prevention Through Environmental Design (CPTED)**: Environmental design principles

#### Industry Resources
- **ASIS International**: Physical security professional organization
- **SANS Institute**: Physical security training and resources
- **Financial Services ISAC**: Physical security guidance for financial services
- **Banking Security Companies**: Industry-specific physical security guidance

#### Publications
- **FFIEC IT Security Guidelines**: Physical security implementation guidance
- **CIS Critical Security Controls**: Physical security implementation guidance
- **SANS Physical Security**: Best practices and implementation guidance
- **Insurance Industry Guidelines**: Physical security requirements from insurers

## Cross-References & Related Topics
- See Also: **blueteam.md** for physical security incident integration
- Building On: **governance.md** which provides oversight for physical security
- Follows From: **intro.md** which provides banking security context
- Related: **compliance.md** for regulatory requirements for physical security
- Related: **data-security.md** for physical protection of data and documents
- Related: **network-security.md** for physical network security integration

## Appendix

### A. Physical Security Policy Template
```
[Organization Name] Physical Security Policy
Effective Date: [Date]

Purpose:
This policy establishes security requirements for the physical protection of organizational assets, facilities, and personnel.

Scope:
This policy applies to all facilities, physical assets, and personnel access.

Objectives:
- Protect organizational assets from physical threats
- Ensure safe access to facilities for authorized personnel
- Maintain regulatory compliance for physical security
- Protect customer and employee safety

Requirements:
- All facilities must meet established physical security standards
- Access to facilities must be properly authenticated and authorized
- Physical security systems must be regularly maintained and monitored
- Physical security incidents must be reported and investigated
- All physical security measures must comply with regulatory requirements
```

### B. Physical Security Incident Response Procedures
- **Detection**: Procedures for detecting physical security incidents
- **Containment**: Steps for containing physical security incidents
- **Investigation**: Physical security forensic and investigation procedures
- **Communication**: Notification procedures for physical incidents
- **Recovery**: Procedures for restoring physical security
- **Lessons Learned**: Post-incident review and improvement procedures

### C. Facility Security Requirements
- **Data Center Security**: Specific security requirements for data centers
- **Branch Security**: Security requirements for banking branch locations
- **Office Security**: Security requirements for general office facilities
- **Vault Security**: Security requirements for secure storage areas
- **Perimeter Security**: Requirements for facility perimeter security
- **Emergency Procedures**: Requirements for physical emergency procedures

---

**Author:** Physical Security Team
**Contributors:** Facility Management, Security Operations, Risk Management
**Reviewers:** CISO, Security Leadership, Legal, Compliance
**Last Updated:** 2025-12-11
**Status:** Published