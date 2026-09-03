// Lightweight EN/FR dictionary for React-managed areas.
// Google Translate rewrites the DOM, which breaks React event handling,
// so interactive components are marked "notranslate" and translated here.
'use client';

const STORAGE_KEY = 'football-intelligence-language';

const DICT = {
  en: {
    'EMAIL ADDRESS': 'EMAIL ADDRESS',
    'PASSWORD': 'PASSWORD',
    'FULL NAME': 'FULL NAME',
    'CONFIRM PASSWORD': 'CONFIRM PASSWORD',
    'Keep me logged in': 'Keep me logged in',
    'Sign In': 'Sign In',
    'Signing in...': 'Signing in...',
    'Forgot password?': 'Forgot password?',
    'Create Free Account': 'Create Free Account',
    'Creating account...': 'Creating account...',
    'I agree to the': 'I agree to the',
    'Terms of Service': 'Terms of Service',
    'Privacy Policy': 'Privacy Policy',
    'VERIFICATION CODE': 'VERIFICATION CODE',
    'Verify Code': 'Verify Code',
    'Verifying...': 'Verifying...',
    'Resend code': 'Resend code',
    'DEV MODE code': 'DEV MODE code',
    'Missing email. Please start again from sign up or login.': 'Missing email. Please start again from sign up or login.',
    'Email verified successfully! Redirecting to login...': 'Email verified successfully! Redirecting to login...',
    'A new code has been emailed to you.': 'A new code has been emailed to you.',
    'Could not resend code.': 'Could not resend code.',
    'RESET CODE': 'RESET CODE',
    'NEW PASSWORD': 'NEW PASSWORD',
    'Update Password': 'Update Password',
    'Updating...': 'Updating...',
    'Did not receive it?': 'Did not receive it?',
    'Send Reset Code': 'Send Reset Code',
    'Sending code...': 'Sending code...',
    'Elite Member': 'Elite Member',
    'Log Out': 'Log Out',
    'Personal Snapshot': 'Personal Snapshot',
    'Your profile highlights and account status.': 'Your profile highlights and account status.',
    'Member since': 'Member since',
    'Email status': 'Email status',
    'Verified': 'Verified',
    'Pending verification': 'Pending verification',
    'Language': 'Language',
    'Plan': 'Plan',
    'Profile overview': 'Profile overview',
    'Manage your personal details and security settings.': 'Manage your personal details and security settings.',
    'Full name': 'Full name',
    'Email': 'Email',
    'Change display name': 'Change display name',
    'Update email': 'Update email',
    'Current password': 'Current password',
    'Save profile': 'Save profile',
    'Saving...': 'Saving...',
    'Account Centre': 'ACCOUNT CENTRE',
    'Settings': 'Settings',
    'Manage your intelligence workspace preferences.': 'Manage your intelligence workspace preferences.',
    'Notification Preferences': 'Notification Preferences',
    'Control email and in-app alerts for match updates, market signals, and premium briefings.': 'Control email and in-app alerts for match updates, market signals, and premium briefings.',
    'Live match alerts': 'Live match alerts',
    'Get notified when a watched match starts.': 'Get notified when a watched match starts.',
    'Value bet signals': 'Value bet signals',
    'Alert me when the model identifies an opportunity.': 'Alert me when the model identifies an opportunity.',
    'Daily market summary': 'Daily market summary',
    'Send a daily summary of tracked competitions.': 'Send a daily summary of tracked competitions.',
    'Account details': 'Account details',
    'Subscription': 'Subscription',
    'Pro Intelligence Plan': 'Pro Intelligence Plan',
    'Password & Security': 'Password & Security',
    'Confirm password': 'Confirm password',
    'Update password': 'Update password',
    'New password': 'New password',
    'Preference saved.': 'Preference saved.',
    'Signing out...': 'Signing out...',
    'Loading...': 'Loading...',
    'Your Profile': 'Your Profile',
    'Review your membership, performance, and account details in one place.': 'Review your membership, performance, and account details in one place.',
    'Football Intelligence': 'Football Intelligence',
    'Elite Member ? Football Intelligence': 'Elite Member ? Football Intelligence',
    'John Doe': 'John Doe',
    'February 2025': 'February 2025',
    '1,248': '1,248',
    '78.4%': '78.4%',
    '3': '3',
    'Pro Intelligence': 'Pro Intelligence',
  },
  fr: {
    'EMAIL ADDRESS': 'ADRESSE E-MAIL',
    'PASSWORD': 'MOT DE PASSE',
    'FULL NAME': 'NOM COMPLET',
    'CONFIRM PASSWORD': 'CONFIRMER LE MOT DE PASSE',
    'Keep me logged in': 'Rester connect?',
    'Sign In': 'Se connecter',
    'Signing in...': 'Connexion?',
    'Forgot password?': 'Mot de passe oubli? ?',
    'Create Free Account': 'Cr?er un compte gratuit',
    'Creating account...': 'Cr?ation du compte?',
    'I agree to the': "J'accepte les",
    'Terms of Service': "Conditions d'utilisation",
    'Privacy Policy': 'Politique de confidentialit?',
    'VERIFICATION CODE': 'CODE DE V?RIFICATION',
    'Verify Code': 'V?rifier le code',
    'Verifying...': 'V?rification?',
    'Resend code': 'Renvoyer le code',
    'DEV MODE code': 'Code du mode d?veloppement',
    'Missing email. Please start again from sign up or login.': "E-mail manquant. Veuillez recommencer depuis l'inscription ou la connexion.",
    'Email verified successfully! Redirecting to login...': 'E-mail v?rifi? avec succ?s ! Redirection vers la connexion?',
    'A new code has been emailed to you.': 'Un nouveau code vous a ?t? envoy? par e-mail.',
    'Could not resend code.': "Impossible de renvoyer le code.",
    'RESET CODE': 'CODE DE R?INITIALISATION',
    'NEW PASSWORD': 'NOUVEAU MOT DE PASSE',
    'Update Password': 'Mettre ? jour le mot de passe',
    'Updating...': 'Mise ? jour?',
    'Did not receive it?': 'Vous ne l\'avez pas re?u ?',
    'Send Reset Code': 'Envoyer le code de r?initialisation',
    'Sending code...': 'Envoi du code?',
    'Elite Member': 'Membre ?lite',
    'Log Out': 'D?connexion',
    'Personal Snapshot': 'Aper?u personnel',
    'Your profile highlights and account status.': 'Vos points forts et le statut de votre compte.',
    'Member since': 'Membre depuis',
    'Email status': 'Statut de l\'e-mail',
    'Verified': 'V?rifi?',
    'Pending verification': 'V?rification en attente',
    'Language': 'Langue',
    'Plan': 'Formule',
    'Profile overview': 'Aper?u du profil',
    'Manage your personal details and security settings.': 'G?rez vos informations personnelles et vos param?tres de s?curit?.',
    'Full name': 'Nom complet',
    'Email': 'E-mail',
    'Change display name': 'Modifier le nom affich?',
    'Update email': 'Mettre ? jour l\'e-mail',
    'Current password': 'Mot de passe actuel',
    'Save profile': 'Enregistrer le profil',
    'Saving...': 'Enregistrement?',
    'Account Centre': 'CENTRE DU COMPTE',
    'Settings': 'Param?tres',
    'Manage your intelligence workspace preferences.': 'G?rez les pr?f?rences de votre espace de travail.',
    'Notification Preferences': 'Pr?f?rences de notification',
    'Control email and in-app alerts for match updates, market signals, and premium briefings.': 'Contr?lez les alertes e-mail et int?gr?es pour les mises ? jour de matchs, les signaux de march? et les briefings premium.',
    'Live match alerts': 'Alertes de match en direct',
    'Get notified when a watched match starts.': 'Soyez averti quand un match suivi commence.',
    'Value bet signals': 'Signaux de valeur',
    'Alert me when the model identifies an opportunity.': 'Pr?venez-moi quand le mod?le identifie une opportunit?.',
    'Daily market summary': 'R?sum? quotidien du march?',
    'Send a daily summary of tracked competitions.': 'Envoyez un r?sum? quotidien des comp?titions suivies.',
    'Account details': 'D?tails du compte',
    'Subscription': 'Abonnement',
    'Pro Intelligence Plan': 'Formule Pro Intelligence',
    'Password & Security': 'Mot de passe et s?curit?',
    'Confirm password': 'Confirmer le mot de passe',
    'Update password': 'Mettre ? jour le mot de passe',
    'New password': 'Nouveau mot de passe',
    'Preference saved.': 'Pr?f?rence enregistr?e.',
    'Signing out...': 'D?connexion?',
    'Loading...': 'Chargement?',
    'Your Profile': 'Votre profil',
    'Review your membership, performance, and account details in one place.': 'Consultez votre adh?sion, vos performances et les d?tails de votre compte au m?me endroit.',
    'Football Intelligence': 'Intelligence Football',
    'Elite Member ? Football Intelligence': 'Membre ?lite ? Intelligence Football',
    'February 2025': 'F?vrier 2025',
    '1,248': '1 248',
    '78.4%': '78,4 %',
    '3': '3',
    'Pro Intelligence': 'Pro Intelligence',
  },
};

function readStoredLang() {
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    if (s === 'en' || s === 'fr') return s;
  } catch (e) { /* ignore */ }
  return 'fr';
}

export function getEffectiveLang() {
  if (typeof document !== 'undefined') {
    try {
      const select = document.querySelector('.goog-te-combo');
      if (select && select.value) return select.value === 'fr' ? 'fr' : 'en';
    } catch (e) { /* ignore */ }
  }
  return readStoredLang();
}

// React hook: server renders English, then switches to the real language
// after hydration so React & Google Translate stay out of each other's way.
export function useT() {
  const [lang, setLang] = useStateSafe('en');
  useEffectOnce(() => {
    let mounted = true;
    const sync = () => { if (mounted) setLang(getEffectiveLang()); };
    sync();
    const id = setInterval(sync, 1200);
    const onClick = () => { setTimeout(sync, 300); setTimeout(sync, 1500); };
    document.addEventListener('click', onClick, true);
    window.addEventListener('storage', sync);
    return () => {
      mounted = false;
      clearInterval(id);
      document.removeEventListener('click', onClick, true);
      window.removeEventListener('storage', sync);
    };
  });
  return { lang, t: (key) => (DICT[lang] && DICT[lang][key]) || (DICT.en[key] || key) };
}

// tiny react shims to avoid importing React internals twice
import { useState, useEffect } from 'react';
function useStateSafe(initial) { return useState(initial); }
function useEffectOnce(fn) { useEffect(fn, []); }
