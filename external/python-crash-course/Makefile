PYTHON ?= uv run --script

# Shared Logic: OS/Shell Detection
ifeq ($(findstring cmd.exe,$(SHELL)),cmd.exe)
    RM_DIR = if exist $(1) rmdir /Q /S $(1)
    RM_FILE = if exist $(1) del /Q /F $(1)
else
    RM_DIR = rm -rf $(1)
    RM_FILE = rm -f $(1)
endif

ifndef NOTION_API_KEY
	NOTION_API_KEY := $(strip $(file < ../NOTION_API_TOKEN_DO_NOT_PUBLISH))
	export NOTION_API_KEY
endif

ifndef VIDEO_LEDGER_ID
	VIDEO_LEDGER_ID := $(strip $(file < ../NOTION_DB_ID_DO_NOT_PUBLISH))
	export VIDEO_LEDGER_ID
endif

.PHONY: build update_ids

build: update_ids
	-pretext build web -g

update_ids:
	$(PYTHON) scripts/video_id_to_panopto_replace.py --notion-database-id $(VIDEO_LEDGER_ID) --directory source/ --apply

clean:
	$(RM_DIR) output/
	$(RM_DIR) generated-assets/
	$(RM_DIR) logs/