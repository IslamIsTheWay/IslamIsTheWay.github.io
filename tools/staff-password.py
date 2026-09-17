"""Set a new staff password — without it ever being written anywhere readable.

login.html keeps each account as a salt and a SHA-256 hash, never the
password. Run this, type the new password twice (nothing is shown), and paste
the line it prints over that account's line in login.html's STAFF_ACCOUNTS.

WHY THE OLD PASSWORDS SHOULD BE CHANGED. Until September 2026 they were in
plain text in login.html. The page no longer contains them, but the
repository's history does, and the repository is public.

    python tools/staff-password.py Islam.younis.2026
"""
import getpass, hashlib, secrets, sys

if len(sys.argv) < 2:
    print(__doc__)
    sys.exit(1)
user = sys.argv[1]
first = getpass.getpass("New password for %s: " % user)
second = getpass.getpass("Again: ")
if first != second:
    print("The two did not match. Nothing was changed.")
    sys.exit(1)
if len(first) < 10:
    print("Use at least 10 characters. Nothing was changed.")
    sys.exit(1)
salt = secrets.token_hex(12)
digest = hashlib.sha256((salt + ":" + first).encode("utf-8")).hexdigest()
print('\nPaste this over the account in login.html:\n')
print('      { username: "%s", salt: "%s", hash: "%s" }' % (user, salt, digest))
