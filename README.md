# HomeStock v1 prototype

## What works
- Add, edit, and delete household products
- Track quantity, unit, category, storage location, reorder threshold, and unit price
- Record use and replenishment events
- Automatically add low-stock items to the shopping list
- Mark shopping-list items as purchased to replenish matching inventory
- View recent activity and basic inventory insights
- Local persistence using browser localStorage

## Run it
For a quick preview, open `index.html` in a browser. For PWA installation and service-worker caching, serve the folder over HTTPS (or localhost). On iPhone, open the hosted HTTPS URL in Safari, tap Share, then Add to Home Screen.

## Important current limitations
This is a functional local-first prototype, not yet a cloud-synced family app. Data is stored in the browser on one device. Clearing browser website data can erase it. Do not treat this prototype as a backup or store sensitive information in it.

NFC: this release includes location-based inventory screens but does not yet read NFC tags. Web NFC support is not available in iOS Safari. The production iPhone implementation should use a native iOS wrapper/app with Core NFC and deep links into location screens. Android can use Web NFC where supported or native NFC APIs.

## Recommended production architecture
- Client: SwiftUI iOS app (Core NFC) plus Android-compatible client/PWA
- Backend: Supabase Auth + Postgres + Row Level Security
- Household model: households, household_members, locations, products, inventory_events, shopping_list_items
- Inventory events: append-only events for use, replenishment, corrections, and purchase
- Predictions: derive rolling average consumption from dated inventory events; show confidence only after sufficient history
- Sync: Supabase Realtime or background refresh; offline event queue with conflict-safe event IDs

## Suggested next milestone
Create Supabase project and schema, implement email/Apple sign-in and household invitations, then sync product/location/event records. Add native iOS NFC reading and tag-to-location mapping after the cloud data model is stable.
