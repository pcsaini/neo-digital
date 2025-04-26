import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
} from '@react-email/components';
import { FC } from 'react';

interface EnquiryEmailProps {
    name: string;
    email: string;
    phone: string;
    message: string;
    serviceName: string;
}

const EnquiryEmail: FC<EnquiryEmailProps> = ({
                                                 name,
                                                 email,
                                                 phone,
                                                 message,
                                                 serviceName,
                                             }) => {
    return (
        <Html>
            <Head />
            <Preview>New enquiry from {name} about {serviceName}</Preview>
            <Body style={styles.body}>
                <Container style={styles.container}>
                    <Heading style={styles.heading}>New Enquiry</Heading>
                    <Text style={styles.text}>
                        You have received a new enquiry for <strong>{serviceName}</strong>.
                    </Text>

                    <Section style={styles.section}>
                        <Text style={styles.label}>Name:</Text>
                        <Text style={styles.value}>{name}</Text>

                        <Text style={styles.label}>Email:</Text>
                        <Text style={styles.value}>{email}</Text>

                        <Text style={styles.label}>Phone:</Text>
                        <Text style={styles.value}>{phone}</Text>

                        <Text style={styles.label}>Message:</Text>
                        <Text style={styles.value}>{message}</Text>
                    </Section>

                    <Hr style={styles.hr} />
                    <Text style={styles.footer}>
                        This is an automated message from your website enquiry form.
                    </Text>
                </Container>
            </Body>
        </Html>
    );
};

const styles = {
    body: {
        backgroundColor: '#f6f9fc',
        fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    },
    container: {
        margin: '0 auto',
        padding: '20px 0',
        maxWidth: '600px',
    },
    heading: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginTop: '30px',
        marginBottom: '20px',
    },
    text: {
        fontSize: '16px',
        lineHeight: '24px',
        marginBottom: '20px',
    },
    section: {
        backgroundColor: '#ffffff',
        padding: '20px',
        borderRadius: '5px',
        marginBottom: '20px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    },
    label: {
        fontSize: '14px',
        fontWeight: 'bold',
        marginBottom: '5px',
        color: '#666666',
    },
    value: {
        fontSize: '16px',
        marginBottom: '15px',
    },
    hr: {
        borderColor: '#e6ebf1',
        margin: '20px 0',
    },
    footer: {
        fontSize: '14px',
        color: '#999999',
        textAlign: 'center' as const,
    },
};

export default EnquiryEmail;