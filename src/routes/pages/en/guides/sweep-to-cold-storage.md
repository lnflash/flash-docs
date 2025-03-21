---
title: Sweep to Cold Storage
description: Complete guide to moving your Bitcoin from mobile wallets to hardware security
---

<div class="text-center mb-12">
  <img src="/images/badges/png/coldcard.png" alt="Hardware wallets for Bitcoin cold storage" class="mx-auto h-40 mb-4" />
</div>

# Moving Bitcoin to Hardware Cold Storage

This guide provides step-by-step instructions for securing your Bitcoin in cold storage using hardware wallets. Follow these detailed steps to ensure your Bitcoin is safely transferred from mobile wallets to long-term secure storage.

## Table of Contents

- [Understanding Cold Storage](#understanding-cold-storage)
- [Preparing for the Transfer](#preparing-for-the-transfer)
- [Setting Up Your Hardware Wallet](#setting-up-your-hardware-wallet)
  - [Bitkey Setup](#bitkey-setup)
  - [ColdCard Setup](#coldcard-setup)
  - [Trezor Setup](#trezor-setup)
- [Creating a Secure Receive Address](#creating-a-secure-receive-address)
- [Transferring Bitcoin from Mobile Wallets](#transferring-bitcoin-from-mobile-wallets)
  - [From Flash Wallet](#from-flash-wallet)
  - [From Other Mobile Wallets](#from-other-mobile-wallets)
- [Verifying Your Transfer](#verifying-your-transfer)
- [Best Practices for Cold Storage](#best-practices-for-cold-storage)
- [Recovery and Backup Procedures](#recovery-and-backup-procedures)
- [Advanced Cold Storage Options](#advanced-cold-storage-options)

## Understanding Cold Storage

Cold storage refers to keeping your Bitcoin private keys offline on a dedicated hardware device, dramatically reducing potential attack vectors compared to mobile or online wallets.

### Benefits of Hardware Wallets

- **Enhanced Security**: Private keys never leave the device
- **Protection from Malware**: Immune to computer viruses and keyloggers
- **Physical Verification**: Transactions require physical confirmation
- **Disaster Recovery**: Built-in backup and recovery options
- **Long-term Storage**: Designed for secure, long-term Bitcoin storage

### When to Use Cold Storage

Cold storage is recommended when:
- Your Bitcoin holdings exceed $1,000 in value
- You plan to hold Bitcoin for more than 6 months
- You want maximum protection against remote attacks
- You're creating a long-term savings plan or inheritance

## Preparing for the Transfer

Before beginning the transfer process, prepare the following:

1. **Hardware wallet device** (Bitkey, ColdCard, or Trezor)
2. **Pen and paper** for recording recovery phrases
3. **Secure location** free from cameras or onlookers
4. **Mobile wallet** with Bitcoin to transfer
5. **Small amount for testing** (always send a test transaction first)
6. **Time without distractions** (30-60 minutes for setup)
7. **Stable internet connection** (for the mobile wallet side)

## Setting Up Your Hardware Wallet

Each hardware wallet has a specific setup process. Follow the instructions for your chosen device:

### Bitkey Setup

<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
Bitkey uses a "two-of-three" multi-signature security model with a mobile app component, hardware component, and recovery key component.
</div>

1. **Initial Hardware Setup**
   - Unbox your Bitkey hardware device
   - Power on by pressing the circular button
   - Follow on-screen instructions to set up your device PIN
   - Verify the device displays an untampered seal message

2. **Install the Bitkey Mobile App**
   - Download the Bitkey app from the App Store or Google Play
   - Open the app and select "Set up a new wallet"
   - Follow the pairing instructions to connect to your hardware device
   - Create a secure PIN for the app

3. **Create Your Recovery Key**
   - When prompted, the app will guide you through creating a recovery key
   - Write down all 12 or 24 seed words IN ORDER on provided recovery cards
   - Verify each word carefully - these words ARE your Bitcoin
   - Store recovery cards in a secure, private location

4. **Verify Your Setup**
   - Complete the recovery phrase verification test on both devices
   - Ensure both the hardware and mobile components show the same wallet balance
   - Test the approval process for a small transaction

### ColdCard Setup

<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
ColdCard is a Bitcoin-only hardware wallet that can operate completely air-gapped and offers advanced security features.
</div>

1. **Initial Hardware Setup**
   - Unbox your ColdCard
   - Insert a microSD card (optional but recommended)
   - Connect the device using the included USB cable
   - Create a new wallet when prompted
   - Set up a strong PIN with both a prefix and suffix

2. **Backup Your Seed Words**
   - Carefully write down all 24 seed words in order
   - Double-check each word against the ColdCard screen
   - Consider stamping seed words on metal for fire/water resistance
   - Secure your backup in a safe location

3. **Advanced Security Setup**
   - Set up a BrickMe PIN (emergency delete function)
   - Configure Duress PIN if desired (shows limited funds)
   - Set up a passphrase for additional security (optional)
   - Test your PINs to ensure they work correctly

4. **Install Companion Software**
   - For desktop interaction, install [Sparrow Wallet](https://sparrowwallet.com/)
   - Connect your ColdCard via USB or use the microSD card for air-gapped operation
   - Export the wallet public key to Sparrow using the microSD card
   - Verify the wallet appears correctly in Sparrow

### Trezor Setup

<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
Trezor offers an intuitive user experience with a simple interface while maintaining strong security.
</div>

1. **Initial Hardware Setup**
   - Unbox your Trezor device
   - Connect it to your computer via USB cable
   - Visit [trezor.io/start](https://trezor.io/start)
   - Follow the on-screen instructions
   - Create a new wallet when prompted

2. **Create Device PIN**
   - Create a strong PIN following the on-screen instructions
   - The PIN entry uses a randomized keypad for protection
   - Remember this PIN - it protects physical access to your device

3. **Backup Recovery Seed**
   - Write down all 12 or 24 seed words in exact order
   - Verify the recovery seed when prompted by the setup wizard
   - Store in a secure, private location away from potential threats
   - Consider creating a metal backup for fire/water resistance

4. **Setup Trezor Suite**
   - Install Trezor Suite on your computer
   - Connect your device and unlock it with your PIN
   - Create a Bitcoin wallet in Trezor Suite
   - Optionally add a passphrase for additional security

## Creating a Secure Receive Address

After setting up your hardware wallet, generate a receive address to accept Bitcoin transfers:

1. **Connect Your Hardware Wallet**
   - Bitkey: Open the mobile app and ensure it's synced with your hardware device
   - ColdCard: Connect via USB or use microSD card with Sparrow Wallet
   - Trezor: Connect via USB and open Trezor Suite

2. **Navigate to Receive Function**
   - Bitkey: Tap "Receive" in the mobile app
   - ColdCard: In Sparrow, select "Receive" tab
   - Trezor: In Trezor Suite, click on "Receive" tab

3. **Verify the Address on Hardware**
   - Bitkey: Confirm the address matches on both mobile and hardware devices
   - ColdCard: Verify address on ColdCard screen (crucial security step)
   - Trezor: Confirm address on Trezor screen when prompted

4. **Choose Address Type** (Advanced)
   - Native SegWit (bc1... addresses): Lowest fees, most efficient
   - Nested SegWit (3... addresses): Compatible with older wallets
   - Legacy (1... addresses): Only use if specifically required

5. **Label the Address** (Optional)
   - Add a description like "Flash Transfer - March 2025"
   - Helps track the source of funds later

## Transferring Bitcoin from Mobile Wallets

Now you're ready to send Bitcoin from your mobile wallet to your hardware wallet:

### From Flash Wallet

1. **Open Flash App**
   - Go to the "Wallet" tab
   - Ensure you have sufficient balance

2. **Initiate Transfer**
   - Tap "Send" or "Withdraw"
   - Select "On-chain withdrawal"

3. **Enter Details**
   - Paste your hardware wallet's receive address
   - Double-check the address is correct (first and last few characters)
   - Start with a small test amount (e.g., 0.0001 BTC or 10,000 sats)

4. **Review and Confirm**
   - Check the withdrawal fee (higher fees confirm faster)
   - Prioritize security over saving on fees for cold storage transfers
   - Tap "Confirm" to initiate the transfer

5. **Initial Test Verification**
   - Wait for the test transaction to confirm (10-60 minutes)
   - Verify receipt on your hardware wallet
   - Once confirmed, proceed with transferring larger amounts

### From Other Mobile Wallets

1. **Open Your Mobile Wallet**
   - Access the wallet containing your Bitcoin
   - Navigate to Send/Transfer function

2. **Enter Hardware Wallet Address**
   - Paste your verified hardware wallet address
   - Double-check the entire address if possible
   - For large transfers, verify the address through multiple channels

3. **Set Transaction Fee**
   - Choose an appropriate fee based on urgency
   - For cold storage, medium priority is usually sufficient
   - Check [mempool.space](https://mempool.space) for current fee recommendations

4. **Send Test Transaction**
   - Start with a minimal amount
   - Confirm the transaction
   - Record the transaction ID/hash

5. **Complete the Transfer**
   - After confirming receipt of test transaction
   - Send remaining amount in one or multiple transactions
   - Consider privacy implications of transaction patterns

## Verifying Your Transfer

After sending, verify the transfer was successful:

1. **Check Transaction Status**
   - Use a block explorer like [mempool.space](https://mempool.space)
   - Enter your transaction ID or wallet address
   - Monitor confirmations (6+ is considered extremely secure)

2. **Verify on Hardware Wallet**
   - Bitkey: Check balance in both mobile app and hardware device
   - ColdCard: Check balance in Sparrow Wallet or via microSD export
   - Trezor: Check balance in Trezor Suite

3. **Document the Transfer**
   - Record the transaction ID
   - Note the date, amount, and sending address
   - Store this information securely for future reference

## Best Practices for Cold Storage

Maximize your security with these best practices:

1. **Multiple Hardware Wallets**
   - Consider using different brands for diversification
   - Separate wallets for different purposes (spending vs. long-term)

2. **Regular Verification**
   - Check device functionality every 6-12 months
   - Update firmware when security updates are released
   - Perform test recoveries annually

3. **Secure Storage Environment**
   - Keep hardware wallets in cool, dry locations
   - Protect from electromagnetic interference
   - Consider a fireproof, waterproof container

4. **Physical Security**
   - Don't discuss hardware wallet ownership publicly
   - Consider a home safe or bank safety deposit box
   - Have a "decoy" wallet with small funds if concerned about physical threats

5. **Avoid Common Mistakes**
   - Never enter seed phrases on a computer or phone
   - Don't store seed phrases in cloud services or digital formats
   - Don't share photos of seed phrases or hardware wallets
   - Beware of phishing attempts targeting hardware wallet users

## Recovery and Backup Procedures

Prepare for emergencies with proper backup procedures:

1. **Seed Phrase Protection**
   - Store seed phrases separately from hardware devices
   - Consider metal backup solutions (Cryptosteel, BlockPlate, etc.)
   - Split backups across multiple secure locations

2. **Test Recovery Procedure**
   - Practice recovery without actual funds
   - Understand the process before an emergency
   - Document steps for heirs or trusted individuals

3. **Inheritance Planning**
   - Create clear instructions for heirs
   - Consider multi-signature setups for inheritance
   - Establish legal frameworks appropriate to your jurisdiction

## Advanced Cold Storage Options

For users seeking maximum security:

1. **Multi-Signature Setups**
   - Require multiple devices to approve transactions
   - Distribute risk across different security models
   - Popular options: [Sparrow Wallet](https://sparrowwallet.com/) multisig, [Caravan](https://unchained.com/caravan/)

2. **Air-Gapped Operations**
   - Keep signing device completely offline
   - Transfer transaction data via microSD or QR codes
   - ColdCard and some Trezor models support this workflow

3. **Geographic Distribution**
   - Store backup components in different physical locations
   - Consider jurisdictional diversification for large holdings
   - Balance security with practical accessibility

---

<div class="bg-purple-100 dark:bg-purple-900 p-4 rounded-lg my-8">
  <h3 class="font-bold text-purple-800 dark:text-purple-200 mb-2">Need Help?</h3>
  <p class="text-purple-700 dark:text-purple-300">
    If you encounter any issues during the transfer process, reach out to Flash support through the app or visit our community forums for assistance.
  </p>
</div>

<!-- Navigation links -->
<div class="flex justify-between items-center mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-700">
  <div class="w-1/3 text-left">
    <a href="non-custodial-wallets" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      Non-Custodial Wallets
    </a>
  </div>
  <div class="w-1/3 text-center">
    <!-- Optional center content -->
  </div>
  <div class="w-1/3 text-right">
    <a href="dca" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      Dollar Cost Averaging
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</div>
