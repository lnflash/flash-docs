---
title: Sweep to Cold Storage
description: Complete guide to moving your Bitcoin from mobile wallets to hardware security
---

<div class="text-center mb-12">
  <img src="/images/badges/webp/sweep-to-cold.webp" alt="Hardware wallets for Bitcoin cold storage" class="mx-auto h-40 mb-4" />
</div>

# Moving Bitcoin to Hardware Cold Storage

This guide provides step-by-step instructions for securing your Bitcoin in cold
storage using hardware wallets. Follow these detailed steps to ensure your
Bitcoin is safely transferred from mobile wallets to long-term secure storage.

## Table of Contents

- [Understanding Cold Storage](#understanding-cold-storage)
- [Preparing for the Transfer](#preparing-for-the-transfer)
- [Setting Up Your Hardware Wallet](#setting-up-your-hardware-wallet)
- [Transferring Bitcoin from Mobile Wallets](#transferring-bitcoin-from-mobile-wallets)
  - [From Flash Wallet](#from-flash-wallet)
  - [From Other Mobile Wallets](#from-other-mobile-wallets)
- [Verifying Your Transfer](#verifying-your-transfer)
- [Best Practices for Cold Storage](#best-practices-for-cold-storage)
- [Recovery and Backup Procedures](#recovery-and-backup-procedures)
- [Advanced Cold Storage Options](#advanced-cold-storage-options)

## Understanding Cold Storage

Cold storage refers to keeping your Bitcoin private keys offline on a dedicated
hardware device, dramatically reducing potential attack vectors compared to
mobile or online wallets.

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

Each hardware wallet has a specific setup process. Select your device below:

<div class="tabs">
  <div class="tab-input">
    <input type="radio" id="tab1" name="tab-control" checked>
    <input type="radio" id="tab2" name="tab-control">
    <input type="radio" id="tab3" name="tab-control">
    <ul>
      <li><label for="tab1">Bitkey</label></li>
      <li><label for="tab2">ColdCard</label></li>
      <li><label for="tab3">Trezor</label></li>
    </ul>

    <div class="slider"><div class="indicator"></div></div>
    <div class="content">
      <section>
        <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
          <h4 class="font-bold mb-2">About Bitkey</h4>
          <p>Bitkey uses a "two-of-three" multi-signature security model with a mobile app component, hardware component, and recovery key component.</p>
        </div>

        <div class="documentation-section">
          <h3 class="font-bold text-xl mb-6">Setting Up Your Bitkey</h3>
          
          <div class="step-container">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4 class="step-title">Initial Hardware Setup</h4>
              <div class="step-instructions">
                <p>Unbox your Bitkey hardware device</p>
                <p>Power on by pressing the circular button</p>
                <p>Follow on-screen instructions to set up your device PIN</p>
                <p>Verify the device displays an untampered seal message</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4 class="step-title">Install the Bitkey Mobile App</h4>
              <div class="step-instructions">
                <p>Download the Bitkey app from the App Store or Google Play</p>
                <p>Open the app and select "Set up a new wallet"</p>
                <p>Follow the pairing instructions to connect to your hardware device</p>
                <p>Create a secure PIN for the app</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4 class="step-title">Create Your Recovery Key</h4>
              <div class="step-instructions">
                <p>When prompted, the app will guide you through creating a recovery key</p>
                <p>Write down all 12 or 24 seed words IN ORDER on provided recovery cards</p>
                <p>Verify each word carefully - these words ARE your Bitcoin</p>
                <p>Store recovery cards in a secure, private location</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4 class="step-title">Verify Your Setup</h4>
              <div class="step-instructions">
                <p>Complete the recovery phrase verification test on both devices</p>
                <p>Ensure both the hardware and mobile components show the same wallet balance</p>
                <p>Test the approval process for a small transaction</p>
              </div>
            </div>
          </div>
        </div>

        <div class="documentation-section mt-12">
          <h3 class="font-bold text-xl mb-6">Creating a Receive Address with Bitkey</h3>
          
          <div class="step-container">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4 class="step-title">Connect Your Wallet</h4>
              <div class="step-instructions">
                <p>Open the Bitkey mobile app on your smartphone</p>
                <p>Ensure it's properly paired with your hardware device</p>
                <p>Verify both devices are powered on and responsive</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4 class="step-title">Generate Address</h4>
              <div class="step-instructions">
                <p>Tap "Receive" in the mobile app</p>
                <p>The app will generate a new Bitcoin address</p>
                <p>Your hardware device will display a verification request</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4 class="step-title">Verify Address</h4>
              <div class="step-instructions">
                <p>Important: Confirm the address matches on both mobile and hardware devices</p>
                <p>This verification step protects against address replacement attacks</p>
                <p>Never use an address you haven't verified on the hardware device</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4 class="step-title">Label the Address (Optional)</h4>
              <div class="step-instructions">
                <p>Add a description like "Flash Transfer - March 2025"</p>
                <p>This helps track the source of funds later</p>
                <p>Labels are stored locally and not on the blockchain</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
          <h4 class="font-bold mb-2">About ColdCard</h4>
          <p>ColdCard is a Bitcoin-only hardware wallet that can operate completely air-gapped and offers advanced security features.</p>
        </div>

        <div class="documentation-section">
          <h3 class="font-bold text-xl mb-6">Setting Up Your ColdCard</h3>
          
          <div class="step-container">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4 class="step-title">Initial Hardware Setup</h4>
              <div class="step-instructions">
                <p>Unbox your ColdCard</p>
                <p>Insert a microSD card (optional but recommended)</p>
                <p>Connect the device using the included USB cable</p>
                <p>Create a new wallet when prompted</p>
                <p>Set up a strong PIN with both a prefix and suffix</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4 class="step-title">Backup Your Seed Words</h4>
              <div class="step-instructions">
                <p>Carefully write down all 24 seed words in order</p>
                <p>Double-check each word against the ColdCard screen</p>
                <p>Consider stamping seed words on metal for fire/water resistance</p>
                <p>Secure your backup in a safe location</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4 class="step-title">Advanced Security Setup</h4>
              <div class="step-instructions">
                <p>Set up a BrickMe PIN (emergency delete function)</p>
                <p>Configure Duress PIN if desired (shows limited funds)</p>
                <p>Set up a passphrase for additional security (optional)</p>
                <p>Test your PINs to ensure they work correctly</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4 class="step-title">Install Companion Software</h4>
              <div class="step-instructions">
                <p>For desktop interaction, install <a href="https://sparrowwallet.com/">Sparrow Wallet</a></p>
                <p>Connect your ColdCard via USB or use the microSD card for air-gapped operation</p>
                <p>Export the wallet public key to Sparrow using the microSD card</p>
                <p>Verify the wallet appears correctly in Sparrow</p>
              </div>
            </div>
          </div>
        </div>

        <div class="documentation-section mt-12">
          <h3 class="font-bold text-xl mb-6">Creating a Receive Address with ColdCard</h3>
          
          <div class="step-container">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4 class="step-title">Connect Your Wallet</h4>
              <div class="step-instructions">
                <p>Option 1 (USB): Connect ColdCard via USB cable to your computer</p>
                <p>Option 2 (Air-gapped): Use microSD card for complete isolation</p>
                <p>Open Sparrow Wallet on your computer</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4 class="step-title">Generate Address</h4>
              <div class="step-instructions">
                <p>In Sparrow Wallet, select the "Receive" tab</p>
                <p>Choose the address type (Native SegWit recommended)</p>
                <p>Sparrow will display a new Bitcoin address and QR code</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4 class="step-title">Verify Address</h4>
              <div class="step-instructions">
                <p>Crucial security step: Verify the address on ColdCard's screen</p>
                <p>On ColdCard, navigate to Address Explorer</p>
                <p>Compare the address shown in Sparrow with the one on ColdCard</p>
                <p>Only proceed if addresses match exactly</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4 class="step-title">Label the Address (Optional)</h4>
              <div class="step-instructions">
                <p>In Sparrow, add a label such as "Flash Transfer - March 2025"</p>
                <p>This helps you track which deposits came from where</p>
                <p>Labels are stored in Sparrow, not on the blockchain</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
          <h4 class="font-bold mb-2">About Trezor</h4>
          <p>Trezor offers an intuitive user experience with a simple interface while maintaining strong security.</p>
        </div>

        <div class="documentation-section">
          <h3 class="font-bold text-xl mb-6">Setting Up Your Trezor</h3>
          
          <div class="step-container">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4 class="step-title">Initial Hardware Setup</h4>
              <div class="step-instructions">
                <p>Unbox your Trezor device</p>
                <p>Connect it to your computer via USB cable</p>
                <p>Visit <a href="https://trezor.io/start">trezor.io/start</a></p>
                <p>Follow the on-screen instructions</p>
                <p>Create a new wallet when prompted</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4 class="step-title">Create Device PIN</h4>
              <div class="step-instructions">
                <p>Create a strong PIN following the on-screen instructions</p>
                <p>The PIN entry uses a randomized keypad for protection</p>
                <p>Remember this PIN - it protects physical access to your device</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4 class="step-title">Backup Recovery Seed</h4>
              <div class="step-instructions">
                <p>Write down all 12 or 24 seed words in exact order</p>
                <p>Verify the recovery seed when prompted by the setup wizard</p>
                <p>Store in a secure, private location away from potential threats</p>
                <p>Consider creating a metal backup for fire/water resistance</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4 class="step-title">Setup Trezor Suite</h4>
              <div class="step-instructions">
                <p>Install Trezor Suite on your computer</p>
                <p>Connect your device and unlock it with your PIN</p>
                <p>Create a Bitcoin wallet in Trezor Suite</p>
                <p>Optionally add a passphrase for additional security</p>
              </div>
            </div>
          </div>
        </div>

        <div class="documentation-section mt-12">
          <h3 class="font-bold text-xl mb-6">Creating a Receive Address with Trezor</h3>
          
          <div class="step-container">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4 class="step-title">Connect Your Wallet</h4>
              <div class="step-instructions">
                <p>Connect Trezor to your computer via USB cable</p>
                <p>Open Trezor Suite on your computer</p>
                <p>Unlock your device with your PIN</p>
                <p>Enter passphrase if you've set one up</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4 class="step-title">Generate Address</h4>
              <div class="step-instructions">
                <p>In Trezor Suite, click on the "Receive" tab</p>
                <p>Select the account you want to receive to (if multiple)</p>
                <p>Choose address type (Native SegWit recommended for lower fees)</p>
                <p>Trezor Suite will generate a new Bitcoin address</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4 class="step-title">Verify Address</h4>
              <div class="step-instructions">
                <p>Trezor will prompt you to confirm the address on the device</p>
                <p>Compare the address on your screen with the one on Trezor</p>
                <p>Only approve if they match completely</p>
                <p>This step protects against malware that might try to display fake addresses</p>
              </div>
            </div>
          </div>
          
          <div class="step-container">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4 class="step-title">Label the Address (Optional)</h4>
              <div class="step-instructions">
                <p>Add a descriptive label like "Flash Transfer - March 2025"</p>
                <p>Trezor Suite will save this label with the address</p>
                <p>Makes it easier to identify funds and their source later</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

</div>
</div>

<style>
.tabs {
  width: 100%;
  margin: 0 auto 2rem;
}

.tab-input {
  position: relative;
}

.tab-input input[type="radio"] {
  display: none;
}

.tab-input ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 1rem;
}

.tab-input ul li {
  margin-right: 0.5rem;
}

.tab-input ul li label {
  display: block;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem 0.375rem 0 0;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.tab-input ul li label:hover {
  background-color: rgba(139, 92, 246, 0.1);
}

.tab-input .content {
  position: relative;
}

.tab-input .content section {
  display: none;
  animation: fadeIn 0.5s ease-in-out;
}

.documentation-section {
  margin-bottom: 2rem;
}

.step-container {
  display: flex;
  margin-bottom: 1.5rem;
  border-radius: 0.5rem;
  overflow: hidden;
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  min-width: 3rem;
  background-color: #8b5cf6;
  color: white;
  padding: 0.75rem;
}

.step-content {
  flex: 1;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-left: none;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.dark .step-content {
  border-color: #374151;
}

.step-title {
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
  color: #4b5563;
}

.dark .step-title {
  color: #e5e7eb;
}

.step-instructions p {
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;
}

.step-instructions p:before {
  content: "•";
  position: absolute;
  left: 0.5rem;
  color: #8b5cf6;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Set the active tab using the radio buttons */
#tab1:checked ~ ul li:nth-child(1) label,
#tab2:checked ~ ul li:nth-child(2) label,
#tab3:checked ~ ul li:nth-child(3) label {
  color: white;
  background-color: #8b5cf6;
}

#tab1:checked ~ .content section:nth-child(1),
#tab2:checked ~ .content section:nth-child(2),
#tab3:checked ~ .content section:nth-child(3) {
  display: block;
}

/* Dark mode adjustments */
.dark .tab-input ul {
  border-color: #374151;
}

.dark .tab-input ul li label:hover {
  background-color: rgba(139, 92, 246, 0.2);
}
</style>

## Transferring Bitcoin from Mobile Wallets

Now you're ready to send Bitcoin from your mobile wallet to your hardware
wallet:

<div class="documentation-section mt-6">
  <h3 class="font-bold text-xl mb-6">From Flash Wallet</h3>

<div class="step-container">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4 class="step-title">Open Flash App</h4>
      <div class="step-instructions">
        <p>Go to the "Wallet" tab</p>
        <p>Ensure you have sufficient balance</p>
        <p>Check that your Lightning channels have enough outbound capacity</p>
      </div>
    </div>
  </div>

<div class="step-container">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4 class="step-title">Initiate Transfer</h4>
      <div class="step-instructions">
        <p>Tap "Send" or "Withdraw"</p>
        <p>Select "On-chain withdrawal"</p>
        <p>Note that on-chain withdrawals have higher fees than Lightning</p>
      </div>
    </div>
  </div>

<div class="step-container">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4 class="step-title">Enter Details</h4>
      <div class="step-instructions">
        <p>Paste your hardware wallet's receive address</p>
        <p>Double-check the address is correct (first and last few characters)</p>
        <p>Start with a small test amount (e.g., 0.0001 BTC or 10,000 sats)</p>
        <p>Enter an amount that's high enough to cover network fees</p>
      </div>
    </div>
  </div>

<div class="step-container">
    <div class="step-number">4</div>
    <div class="step-content">
      <h4 class="step-title">Review and Confirm</h4>
      <div class="step-instructions">
        <p>Check the withdrawal fee (higher fees confirm faster)</p>
        <p>Prioritize security over saving on fees for cold storage transfers</p>
        <p>Verify all details are correct one final time</p>
        <p>Tap "Confirm" to initiate the transfer</p>
      </div>
    </div>
  </div>

<div class="step-container">
    <div class="step-number">5</div>
    <div class="step-content">
      <h4 class="step-title">Initial Test Verification</h4>
      <div class="step-instructions">
        <p>Wait for the test transaction to confirm (10-60 minutes)</p>
        <p>View the transaction status in the Flash app</p>
        <p>Verify receipt on your hardware wallet</p>
        <p>Once confirmed, proceed with transferring larger amounts</p>
      </div>
    </div>
  </div>
</div>

<div class="documentation-section mt-12">
  <h3 class="font-bold text-xl mb-6">From Other Mobile Wallets</h3>

<div class="step-container">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4 class="step-title">Open Your Mobile Wallet</h4>
      <div class="step-instructions">
        <p>Access the wallet containing your Bitcoin</p>
        <p>Navigate to Send/Transfer function</p>
        <p>Make sure your wallet is updated to the latest version</p>
      </div>
    </div>
  </div>

<div class="step-container">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4 class="step-title">Enter Hardware Wallet Address</h4>
      <div class="step-instructions">
        <p>Paste your verified hardware wallet address</p>
        <p>Double-check the entire address if possible</p>
        <p>For large transfers, verify the address through multiple channels</p>
        <p>Never manually type addresses - always copy and paste</p>
      </div>
    </div>
  </div>

<div class="step-container">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4 class="step-title">Set Transaction Fee</h4>
      <div class="step-instructions">
        <p>Choose an appropriate fee based on urgency</p>
        <p>For cold storage, medium priority is usually sufficient</p>
        <p>Check <a href="https://mempool.space">mempool.space</a> for current fee recommendations</p>
        <p>Consider the tradeoff between confirmation time and cost</p>
      </div>
    </div>
  </div>

<div class="step-container">
    <div class="step-number">4</div>
    <div class="step-content">
      <h4 class="step-title">Send Test Transaction</h4>
      <div class="step-instructions">
        <p>Start with a minimal amount (0.0001 BTC or equivalent)</p>
        <p>Review all details before confirming</p>
        <p>Confirm the transaction in your wallet</p>
        <p>Record the transaction ID/hash for reference</p>
      </div>
    </div>
  </div>

<div class="step-container">
    <div class="step-number">5</div>
    <div class="step-content">
      <h4 class="step-title">Complete the Transfer</h4>
      <div class="step-instructions">
        <p>After confirming receipt of test transaction</p>
        <p>Send remaining amount in one or multiple transactions</p>
        <p>Consider privacy implications of transaction patterns</p>
        <p>Keep transaction IDs for future reference</p>
      </div>
    </div>
  </div>
</div>

<div class="bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-400 p-4 my-8">
  <h4 class="font-medium text-yellow-800 dark:text-yellow-200">Security Reminder</h4>
  <p class="text-yellow-700 dark:text-yellow-300 mt-2">
    Always verify the receiving address on your hardware wallet's secure screen before sending any funds.
    A compromised computer could display a different address than the one you intended to use.
  </p>
</div>

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
   - Popular options: [Sparrow Wallet](https://sparrowwallet.com/) multisig,
     [Caravan](https://unchained.com/caravan/)

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
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
      </svg>
      Non-Custodial Wallets
    </a>
  </div>
  <div class="w-1/3 text-center">
    <!-- Optional center content -->
  </div>
  <div class="w-1/3 text-right">
    <a href="infrastructure" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      Infrastructure
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</div>
